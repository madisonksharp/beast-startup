# Buddy System

## Elevator Pitch

Picture this: a web application designed to transform your journey to success into a collaborative adventure. Whether you're striving for fitness milestones, boosting productivity, or diving into personal development, Buddy System has got your back.
Imagine setting and tracking your goals effortlessly with interactive habit streaks, making progress feel like a game. But here's the twist – you're not alone on this journey. Stay in the loop with your friends' achievements through personalized notifications, creating a tight-knit community of mutual support.
Because achieving greatness is not a solo mission – it's a shared expedition. Elevate your aspirations, celebrate victories, and conquer challenges together with Buddy System. Because with a buddy by your side, success is not just a destination – it's an incredible journey!

## Design

! [Mock of login](IMG_0265.jpg)
! [Mock of feed] (IMG_0266.jpg)

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

### Notes

[notes](/notes.md)
