import { API } from "./api.js";
export class Feed {
  socket;
  GaveKudosEvent = "gave-kudos-event";
  GotKudosEvent = "got-kudos-event";
  constructor() {
    this.configureWebSocket();
  }
  Hello() {
    console.log("Im ready for bed. feed.js");
  }
  configureWebSocket() {
    const protocol = `wss`;
    const testProtocol = `${protocol}://${window.location.host}/ws`;
    console.log("test protocol url is : ", testProtocol);
    this.socket = new WebSocket(`${protocol}://${window.location.host}/ws`);
    this.socket.onopen = (event) => {
      console.log("client websocket connected");
    };
    this.socket.onclose = (event) => {
      console.log("client websocket disconnected");
    };
    this.socket.onmessage = async (event) => {
      const msg = JSON.parse(await event.data.text());
      if (msg.type === GotKudosEvent) {
        API.gotKudos(message.data);
      }
    };
  }
  broadcastEvent(fromUser, type, data) {
    const event = {
      fromUser: fromUser,
      type: type,
      data: data,
    };
    this.socket.send(JSON.stringify(event));
  }
}
