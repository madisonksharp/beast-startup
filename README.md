# Buddy System

## Elevator Pitch

Picture this: a web application designed to transform your journey to success into a collaborative adventure. Whether you're striving for fitness milestones, boosting productivity, or diving into personal development, Buddy System has got your back.
Imagine setting and tracking your goals effortlessly with interactive habit streaks, making progress feel like a game. But here's the twist – you're not alone on this journey. Stay in the loop with your friends' achievements through personalized notifications, creating a tight-knit community of mutual support.
Because achieving greatness is not a solo mission – it's a shared expedition. Elevate your aspirations, celebrate victories, and conquer challenges together with Buddy System. Because with a buddy by your side, success is not just a destination – it's an incredible journey!

## Design

![Mock of login and goal page.](images/IMG_0265.jpg)
![feed mockup.](images/IMG_0266.jpg)

## Key Features

- Secure login over HTTPS
- ability to check that user did the habit that day
- display of streak length
- ability to track goal progress
- ability to connect with friends
- goal progress consistently stored

## Technologies

I will use these technologies in these ways:

- **HTML** - 3 HTML pages: 1 for user goals, 1 leaderboard of friends, one for login
- **CSS** - Mobile first styling, responsive site so that it looks good on different screen sizes, uses good whitespace, color choice and contrast
- **JavaScript** - provides login, displays other users,
- **Service** - backend service with endpoints for:
  - login
  - keeping goal progress
  - habit streak
  - receiving goals
- **DB/Login** - register and login users, credentials securely stored in database
- **WebSocket** - as progress toward a goal is made, their streak and progress will be broadcast to the user's friends
- **React** - Application will use next.js as the web server with react for HTML CSS and JS

## HTML Startup Deliverable

I guess this is what the assignment should look like. but below this is more description of the changes I made by page.

- **HTML pages** - 4 HTML pages: Index, feed, goals, and profile
- **Links** - all pages link to each other so user can navigate through the pages easily
- **Text** - there is placeholder text in several spots
- **Images** - new images on feed, goals, and profile pages
- **DB/Login** - input boxes for username and password. placeholder for goals and buddies that will be in database.
- **WebSocket** - all users buddies' activities broadcast on the feed page via websocket.

### more descriptive HTML Startup deliverable by HTML page

- **Index.html page**
  - added username and password boxes
  - added a create account button
  - header 2 is now the BuddySystem catchphrase thing
  - links to all pages in application in navbar
- **Feed.html page**
  - new image
  - Username is the placeholder for the users username. the page will be customized for user " Username's feed"
  - Placeholders for all user's buddies' activities via websocket
  - placeholder for motivational quotes about habits pulled from API
  - Comment for button to celebrate buddies habit streaks
- **Goals.html page**
  - new image
  - placeholder for goals stored in database
  - placeholder for buddies who are working with you on that goal will be stored with database
  - placeholder for number of days in habit streak stored in database
- **profile.html page**
  - new image
  - placeholder for Avatar, username, name, and list of buddies stored in database

## CSS deliverable

For this deliverable I properly styled the application. There may be some changes from this into the final application, but I am happy with the results

- [x] **Header, footer, and main content body** I used TailwindCSS as the framework for my CSS
- [x] **Navigation elements** - I created a mobile menu that responds on the click. the links also change to pink when clicked. There is also a hamburger menu for a mobile screen size.
- [x] **Responsive to window resizing** - My app looks great on all window sizes and devices.
- [x] **Application elements** - Used good contrast and whitespace
- [x] **Application text content** - Consistent fonts
- [x] **Application images** - turned the images into cards with colored backgrounds

Using tailwindCSS. Specific colors and stuff are in tailwind.config.js.
output.css has the tailwind framework stuff

## JavaScript deliverable

For this deliverable I implemented by JavaScript so that the application works for a single user. I also added placeholders for future technology.

- [x] **login** - When you press enter or the login button it takes you the profile page. when you create a new account and press the create account button, it goes to the feed.
- [x] **database** - the database stores the signed in user and the login information when an account is created (api.js)
- [x] **WebSocket** - I set up giveKudos and gotKudos functions so that the like button will send kudos and show that you got kudos.
- [x] **application logic** - takes the user goals and buddies (currently from the mock data), takes new user from registration, saves user to local storage and displays their info on profile

My mock database is mock.js - here it has user information. this is the localstorage it draws from when a user logs in.
types.js has the constructor for the user

## Service deliverable

For this deliverable I

- [] **Node.js/Express HTTP service** -
- [] **Static middleware for frontend** -
- [] **Calls to third party endpoints** - I didn't have time to implement this. 😔
- [] **Backend service endpoints** - Placeholders for login that stores the current user on the server. Endpoints for voting.
- [] **Frontend calls service endpoints** - I did this using the fetch function.

## DB/Login deliverable

For this deliverable

- [] **MongoDB Atlas database created** - done!
- [] **Stores data in MongoDB** - done!
- [] **User registration** - Creates a new account in the database.
- [] **existing user** - Stores the votes under the same user if the user already exists.
- [] **Use MongoDB to store credentials** - Stores both user and their votes.
- [ ] **Restricts functionality** - You cannot vote until you have logged in. This is restricted on the frontend only. 😔

## WebSocket deliverable

For this deliverable

- [] **Backend listens for WebSocket connection** - done!
- [] **Frontend makes WebSocket connection** - done!
- [] **Data sent over WebSocket connection** - done!
- [] **WebSocket data displayed** - All user votes display in realtime. I'm really proud that this is working. Way cool!

## React deliverable

For this deliverable

- [] **Bundled and transpiled** - done!
- [] **Components** - Login, voting list, vote are all components.
- [] **Router** - Routing between login and voting components.
- [] **Hooks** - Vue uses class properties instead of `UseState` to track changes in vote state.

## Notes

[notes](/notes.md)
