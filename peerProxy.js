const { WebSocketServer } = require("ws");
const uuid = require("uuid");
const { userGotKudos } = require("./database.js");
const GaveKudosEvent = "gave-kudos-event";
const GotKudosEvent = "got-kudos-event";

function peerProxy(httpServer) {
  // Create a websocket object
  const wss = new WebSocketServer({ noServer: true });

  // Handle the protocol upgrade from HTTP to WebSocket
  httpServer.on("upgrade", (request, socket, head) => {
    wss.handleUpgrade(request, socket, head, function done(ws) {
      console.log("handleUpgrade done");
      wss.emit("connection", ws, request);
    });
  });

  // Keep track of all the connections so we can forward messages
  let connections = [];

  wss.on("connection", (ws) => {
    const connection = { id: uuid.v4(), alive: true, ws: ws };
    connections.push(connection);

    // Forward messages to everyone

    ws.on("message", async function message(event) {
      console.log("got message: ", JSON.stringify(event));
      const d = event.data;
      console.log("data :", d);
      if (typeof event.data === "string") {
        //create a JSON object
        var msg = JSON.parse(event.data);
        console.log("parsed: ", msg);
        if (msg.type == GaveKudosEvent) {
          const newLikeCount = await userGotKudos(msg.data);
          const outMessage = {
            fromUser: msg.fromUser,
            type: GotKudosEvent,
            data: {
              feedItemId: msg.data.feedItemId,
              newLikeCount: newLikeCount,
            },
          };
          connections.forEach((c) => {
            c.ws.send();
            //in case we want to send to everyone but the sender
            // if (c.id !== connection.id) {
            //   c.ws.send(data);
            // }
          });
        }
      }
    });

    // Remove the closed connection so we don't try to forward anymore
    ws.on("close", () => {
      const pos = connections.findIndex((o, i) => o.id === connection.id);

      if (pos >= 0) {
        connections.splice(pos, 1);
      }
    });

    // Respond to pong messages by marking the connection alive
    ws.on("pong", () => {
      connection.alive = true;
    });
  });

  // Keep active connections alive
  setInterval(() => {
    connections.forEach((c) => {
      // Kill any connection that didn't respond to the ping last time
      if (!c.alive) {
        c.ws.terminate();
      } else {
        c.alive = false;
        c.ws.ping();
      }
    });
  }, 10000);
}

module.exports = { peerProxy };
