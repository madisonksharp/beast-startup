import { User } from "./types.js";

export class API {
  static baseURL = "http://localhost:4000";
  static setBaseURL(url) {
    this.baseURL = url;
  }
  static async login(username, pass) {
    //TODO: call API to login user
    const res = await fetch(`${this.baseURL}/login`, {
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
      const res = await fetch(`${this.baseURL}/register`, {
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
  static async addGoal(name, frequency) {
    // USER SIDE here: copy login fetch, update fetch body w/new var, return goal,
    const usr = API.getCurrentUser();

    const res = await fetch(`${this.baseURL}/add-goal`, {
      method: "POST",
      body: JSON.stringify({
        username: usr.username,
        name: name,
        frequency: frequency,
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
    var newGoal = data;
    return newGoal;

    //on profile page : show new goal form = done, click save goal then call this=done , js on profile : append child to goallist =?
    // server side app.js: add route (app.use) /add-goal =?, takes name and freq as body= done, return goal to add to list= done
  }

  //websocket
  static giveKudos(toUser) {
    //TODO: call server API websocket
    //current user gives kudos to other user
  }

  static gotKudos(fromUser) {
    //TODO: client function called via the websocket connection with the server when another user (fromUser) gave this current user kudos
  }
}
