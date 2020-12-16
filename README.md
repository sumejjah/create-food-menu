# create-food-menu
Web application using React, Redux, Styled Components, React Bootstrap, Auth0.

## App URL
App is available here: https://create-food-menu.netlify.app

## What is app about
A simple project consisted of client created with React.js, Redux and React Bootstrap, and a server done with Node.js and Express. The purpose of the project is to provide a web app which uses Edamam API for searching meal recipes. Each meal could be edited in modal and downloaded to the PC. 

## How to use
After successful log in, user will be redirected to the main page with search bar. As this app is about food/meals search, searh can be done with various food related keyword, such as: chicken, croissant, breakfast, dinner..

Once the search button is clicked, the list of corresponding meals will be presented to the user. Each meal can be selected, and dispalyed in a modal, where user is prompted with the ability of editing meal recipe (name and ingredients). For editing ingridients, user has to click on pen (edit) icon, after which he would be able to remove or edit existing ingridient and add the new ones. After clicking "Download", the recipe details is exported as .txt file in JSON format and saved on PC, in the Downloads folder.

The user can't use this app without signing in. If the user tries to acess some url while not loggedin, he will be redirected to login/sign up page. Also, if the user attempts to access not existing url, he weill be redirected to the error page with the abiliti to go back to dashboard.

## Project setup
Both, the client and server must be running, in order for the project to be fully functional.

## Starting the client
Before starting the client for the first time, add .env file to the root folder. The file must contain the following values:

```
REACT_APP_API_URL = http://localhost:5000
REACT_APP_DOMAIN_AUTH0 = <<domain_auth0>>
REACT_APP_CLIENT_ID = <<cliend_id>>
```
Please contact me if you need any of these. After adding .env file with correct variables, run the following commands:

```
npm install
npm start
```
The client will be running at: http://localhost:3000.

# Starting the server
Server soruce code is available [here](https://github.com/sumejjah/food-server).
