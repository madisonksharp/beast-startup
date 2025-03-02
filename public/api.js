//const { peerProxy } = require("./peerProxy.js");

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
      return false;
    }
    var data = await res.json();
    console.log(data);
    var usr = data;
    // save user to local storage
    localStorage.setItem("bs-user", JSON.stringify(usr));
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

  static async getCurrentUser() {
    if (!localStorage.getItem("bs-user")) {
      return null;
    }
    //each page call getcurrentuser if null
    // window.location.href= index.html
    //on index.html - call getcurrentuser and hide menu if returns null

    var currentUser = JSON.parse(localStorage.getItem("bs-user"));
    const res = await fetch(
      `${this.baseURL}/get-user?` +
        new URLSearchParams({
          username: currentUser.username,
        })
    );
    var data = await res.json();
    console.log(data);
    var usr = data;

    localStorage.removeItem("bs-user");

    localStorage.setItem("bs-user", JSON.stringify(usr));
    return usr;
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
    const usr = await API.getCurrentUser();

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
    var updatedGoals = data;
    return updatedGoals;
  }

  static async getFeed() {
    var currentUser = JSON.parse(localStorage.getItem("bs-user"));
    const res = await fetch(
      `${this.baseURL}/get-feed?` +
        new URLSearchParams({
          username: currentUser.username,
        })
    );
    var data = await res.json();
    console.log(data);
    var feed = data;

    return feed;
  }

  //ws
}
