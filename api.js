import { User } from "./types.js";
import { Users } from "./mock.js";

export class API {
  static login(username, pass) {
    console.log("hi");
    //TODO: call API to login user
    var usr = Users[0];
    usr.username = username;

    // save user to local storage
    localStorage.setItem("bs-user", JSON.stringify(usr));

    // return true if logged in
    return true;
  }

  static register(username, name, email, password, profilePic) {
    var usr = new User(username, name, email, profilePic);

    //TODO:
    usr.password = password;
    try {
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

  static giveKudos(toUser) {
    //TODO: call server API websocket
    //current user gives kudos to other user
  }

  static gotKudos(fromUser) {
    //TODO: client function called via the websocket connection with the server when another user (fromUser) gave this current user kudos
  }
}
