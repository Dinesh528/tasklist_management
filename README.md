# Getting Started with Create React App

This project was bootstrapped with [Create React App].

## Available Scripts

## clone the project from github
after cloning write npm install to install all the neccessary dependencies

after installation of packages do this
### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\

Login page will be displayed:
we need to login using dummy credentials as follows
Email: jhon@gmail.com
password: 1234

## after login
home page will there , where we can create a new task on clicking on the create task button 
for navigation purpose we have the navbar 
in which create and edit tasks are the private routes, it can we accessed once user loggedIn, or else it will thrown to login page

viewTasks page , 
all the tasks that are created are placed in DataTable , 
we can filter on name and date of the task
sort on the name of the task 
we have actions to perform like edit and delete

jokesSpot page:
under this page jokes are displayed in tabular way with spinner before fetching the data 

note: don't refresh after login , because we are not storing the user credentials in local storage or in api 

