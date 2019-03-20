[![Build Status](https://travis-ci.com/dartmouth-cs52-18S/classconnect-client.svg?token=oPyFmwLvTzTq5eE3F4cy&branch=master)](https://travis-ci.com/dartmouth-cs52-18S/classconnect-client)

# Class Connect

 A webapp for linking friends when selecting classes for an upcoming term. Users can search classes to see friends thinking about taking certain classes. The webapp displays information about each course and a description so it becomes easier to plan out ones schedule. A user can also see how many other people are planning on taking a course to predict their likelyhood of getting into a certain class.

![welcome](/gif/welcome-home.gif)


## Architecture

### Organization
The code is organized between seven different connected components, Welcome, sign in, sign up, Home, search, course page, and a user page. The welcome page displays a few hot courses and prompts the user to either sign in or sign up. Sign up and sign in are self explanatory while the home page displays hot courses and courses currently selected for the user. Here one is able to search for courses, add/drop them and is the main functionality of our program.

![home](/gif/add-drop.gif)

On the course page one is able to see information about the course such as what type of distributive it fills and the description for the course. One is also able to see other users in the course. The user page shows all of the courses that a specific user is currently thinking about taking.

![course](https://thumbs.gfycat.com/UnrulyTotalEstuarinecrocodile-size_restricted.gif)

Our actions index.js folder contains all of the functions that we use to communicate with the backend. The styles folder contains all of the sass documents we used for styling the website.

![serach](/gif/sign-up-search.gif)

### Libraries
We used a large amount of different libraries to that span across a variety of uses. Material-ui was used for the styling of buttons and some of the text. Axios was used for communication with the backend server. The react and redux libraries were used as the framework for our webapp. React-router was used for navigation between mutiple pages.

## Setup

To setup the program first install yarn through Homebrew with `brew install yarn`. Next go to the root directory of the program and run `yarn`. This will install all the necessary dependencies. The program can then be run through `yarn start`.

# Getting Started

Running our API is easy!
1. Fork our repo
1. Clone your fork
1. Run `yarn` to install dependencies
1. Run `yarn start` to start the dev server
1. The dev server is at `localhost:8080`
1. `yarn deploy` to upload to Surge!
1. To test locally fork [our API](https://github.com/dartmouth-cs52-18S/classconnect-api)

## Authors

Cole Corrente
Scott Magnuson
Jakob Stern
Bobby Crawford
Peter Warren
