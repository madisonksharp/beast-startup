import { User } from "./types.js";

export class API {
  static async login(username, pass) {
    //TODO: call API to login user
    const res = await fetch("http://localhost:3000/login", {
      method: "POST",
      body: JSON.stringify({
        username: username,
        password: pass,
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    });
    if (!res.ok) {
      console.log(res.status);
    }
    var data = await res.json();
    console.log(data);
    var usr = data;
    // save user to local storage

    localStorage.setItem("bs-user", JSON.stringify(usr));

    // return true if logged in
    return true;
  }

  static async register(username, name, email, password, profilePic) {
    //var usr = new User(username, name, email, profilePic);

    //TODO:
    try {
      const res = await fetch("http://localhost:3000/register", {
        method: "POST",
        body: JSON.stringify({
          username: username,
          name: name,
          email: email,
          password: password,
          profilePic: profilePic,
        }),
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
      });
      if (!res.ok) {
        console.log(res.status);
      }
      var data = await res.json();
      console.log(data);
      var usr = data;

      localStorage.removeItem("bs-user");
      localStorage.setItem("bs-user", JSON.stringify(usr));
    } catch (e) {
      console.log(e);
      return false;
    }
    return true;
  }

  static getCurrentUser() {
    var currentUser = JSON.parse(localStorage.getItem("bs-user"));
    return currentUser;
  }

  static async getQuote() {
    const url = "https://api.quotable.io/random";
    const res = await fetch(url);
    if (!res.ok) {
      console.log(res.status);
    }
    var data = await res.json();
    console.log(data);
    var quote = { quote: data.content, author: data.author };
    return quote;
  }

  static giveKudos(toUser) {
    //TODO: call server API websocket
    //current user gives kudos to other user
  }

  static gotKudos(fromUser) {
    //TODO: client function called via the websocket connection with the server when another user (fromUser) gave this current user kudos
  }
}
