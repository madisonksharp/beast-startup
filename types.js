export default class User {
  constructor(username, name, email, profilePic = "") {
    this.username = username;
    this.name = name;
    this.email = email;
    this.profilePic = profilePic;
    this.goals = [];
    this.buddies = [];
  }
}

export { User };
