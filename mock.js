//Mock Database

const Users = [
  {
    username: "abethebabe",
    name: "Abram",
    email: "abethebabe@gmail.com",
    profilePic: "/images/swimming.jpg",
    goals: [
      {
        name: "Take Vitamins",
        frequency: "daily",
        streak: "2 days",
      },
      {
        name: "Walk Dogs",
        frequency: "daily",
        streak: "3 days",
      },
      {
        name: "Go to Gym",
        frequency: "daily",
        streak: "5 days",
      },
    ],
    buddies: ["frogoildgear"],
  },
  {
    username: "frogoildgear",
    name: "Eric",
    email: "froggy@gmail.com",
    profilePic: "/images/profile-f.png",
    goals: [
      {
        name: "take vitamins",
        frequency: "daily",
        streak: "2 days",
      },
      {
        name: "walk dogs",
        frequency: "daily",
        streak: "3 days",
      },
    ],
    buddies: ["abethebabe"],
  },
];

module.exports = Users;
