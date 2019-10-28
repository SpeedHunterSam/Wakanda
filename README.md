# Rally App - Project Wakanda

## Description

This app tracks a rally teams waypoints during a rally.  A time stamp is displayed immediately once the waypoint co-ordinates or user inputted location is recoreded in the database.

Currently, this app functions as a basic rally location logger.


#### Screen design layout

Mobile First Design.  This app is intended to be used by the passenger.


#### New Technologies Used

* bcrypt for authentication
* json web tokens for authentication
* Redux for state management
* React Strap for styling
 


#### Deployed Link: 
https://golden-city-wakanda.herokuapp.com/


#### File Structure

~~~

Wakanda - (Rally App)
├── client
│   ├── public
│   │   ├── favicon.ico
│   │   ├── index.html
│   │   ├── logo192.png
│   │   ├── logo512.png
│   │   ├── manifest.json
│   │   └── robots.txt
│   ├── src
│   │   ├── actions
│   │   │   ├── authActions.js
│   │   │   ├── errorsActions.js
│   │   │   ├── itemActions.js
│   │   │   └── types.js
│   │   ├── components
│   │   │   ├── auth
│   │   │   │   ├── LoginModal.js
│   │   │   │   ├── Logout.js
│   │   │   │   └── RegisterModal.js
│   │   │   ├── appNavbar.js
│   │   │   ├── GPSLocations.js
│   │   │   └── itemModal.js
│   │   ├── reducers
│   │   │   ├── authReducer.js
│   │   │   ├── errorReducer.js
│   │   │   ├── index.js
│   │   │   └── itemReducer.js
│   │   ├── App.css
│   │   ├── App.js
│   │   ├── App.test.js
│   │   ├── index.js
│   │   ├── serviceWorker.js
│   │   └── store.js
│   ├── .gitignore
│   ├── package-lock.json
│   ├── package.json
│   └── README.md
├── config
│   └── default.json
├── middleware
│   └── auth.js
├── models
│   ├── Item.js
│   └── User.js
├── routes
│   └── api
│       ├── auth.js
│       ├── items.js
│       └── users.js
├── .gitignore
├── package-lock.json
├── package.json
├── README.md
└── server.js

~~~


###### References: 

In addition to the material learned in class, I referenced Brad Traversy's MERN Stack Tutorial when developing this app.
