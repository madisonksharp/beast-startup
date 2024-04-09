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

    localStorage.setItem("bs-user", JSON.stringify(usr));
  }

  static getCurrentUser() {
    var currentUser = JSON.parse(localStorage.getItem("bs-user"));
    return currentUser;
  }

  static giveKudos() {
    //TODO: call server API websocket
  }
}
