# Fat Birds Full Stack Website

## Table of Contents
[Description](#description) <br />
[Installation](#installation) <br />
[Technologies](#technologies) <br />
[Screenshots](#screenshots) <br />
[Test](#test) <br />
[Questions](#questions) <br />
<br />

## Description
Founded in 2020, Fat Birds Wing Bar is an asian fusion chicken wing restaurant based in Midland, Texas. As aspiring junior engineers, we, Diana Contreras
Daniel Kang, Felix Gilbert Cagatin, have decided to build a full stack website for our client in order to aid them in expanding their reach and growing their online presence. <br />

## Installation
### Installing the Files
1. Assuming the user already has ```Node.js```and ```MySQL``` installed, simply clone the repository via the ```git clone``` command. 
2. Once the respository has been cloned, we must then install the required dependencies. This can be done via the ```npm install``` command. 
3. Once the dependencies have been install, we then create an ```.env``` file. Within this file, add the following environmental variables
```
DB_NAME=FB_MENU_DB
DB_USER=<mysql username>
DB_PW=<mysql password>

SECRET_SESSION_KEY=<secret session key>
OWNER_REGISTER_KEY=<owner register key>
```
### Creating the Database
4. Once the .env file has been populated by our own information, we must then create the database. First, change directories to the ```\db\``` directory. 
5. After moving to the ```\db\``` directiory, run the following command, replacing ```<mysql username>``` with your mysql username. <br/> 
```
mysql -u <mysql username> -p
```
6. Once we are logged in to mySQL, we can then run the mySQL file via:
```
source schema.sql
```
7. Then, quit the mysql command interface via the ```quit``` command, and move back into the root directory.
8. Lastly, we must populate our newly created database with seed values. To do this, run the following command, which will then populate our database:
```
node seeds/index,js
```
### Creating an Account
9. To create an account, we must enter the secret key into our ```.env``` file under ```OWNER_REGISTER_KEY```. 
10. Once we add the admin key onto our ```.env``` file, we can then go to the [Login](https://fat-birds-wing-bar.herokuapp.com/login) route to create an account with our secret key.
11. Click on the register button, to register a new account with your email and password, then enter the key in the form field specified ```Key```.
12. If successful, we will be directed to the login page, where we can simply input our login information to access the admin side website. 

## Technologies
Our full stack website utilizes the following technologies:
* [Expess Handlebars](https://www.npmjs.com/package/express-handlebars)
* [Bootstrap](https://getbootstrap.com/)
* [Fontawesome](https://fontawesome.com/)
* [Passport](https://www.npmjs.com/package/passport)
* [Passport-local JS](https://www.passportjs.org/packages/passport-local/)
* [Jest](https://www.npmjs.com/package/jest)
* [Supertest](https://www.npmjs.com/package/supertest)
* [Sequelize](https://sequelize.org/)
* [Nodemon](https://www.npmjs.com/package/nodemon)
* [BCrypy](https://www.npmjs.com/package/bcrypt)
* [Dotenv](https://www.npmjs.com/package/dotenv)
* [Express](https://expressjs.com/)
* [Mysql2](https://www.npmjs.com/package/mysql2)
* [Heroku](https://www.heroku.com/)
* [Anime.js](https://animejs.com/)
<br/>

## Screenshots
### Website
![](/public/images/screenshot_main.PNG) <br/>
![](/public/images/screenshot_menu_chicken.PNG) <br >
![](/public/images/screenshot_about.PNG) <br >
![](/public/images/screenshot_contact.PNG) <br >
![](/public/images/screenshot_mobile.PNG) <br >

### Admin Side
![](/public/images/admin_login_page.PNG) <br/>
![](/public/images/admin_user_page.PNG) <br/>
### Each Admin Operation has the following options to choose from:
![](/public/images/admin_operations.PNG) <br />
### For example, The Following image is an update operation for Sauces:
![](/public/images/admin_operation_demo.PNG) <br />
## Test
- Make sure to have installed everything from [Installation](#installation)
- If you want to run all test then in the terminal type ```npm test```
- If you want to just run the tests for checking the handlebars, in the terminal type ```npm test handlebar.test.js```
- If you want to just run the tests for the routes and their functionality, in the terminal type ```npm test route.test.js``` <br/>


## Questions? 
Reach us at the following with your questions: <br/>
### Felix Cagatin
Github: [cagatin](https://github.com/cagatin)

Email: cagatingilbert@gmail.com


### Diana Contreras
Github: [contrer83](https://github.com/contrer83)

Email: dcontrer98@gmail.com


### Daniel Kang
Github: [DKhubgit](https://github.com/DKhubgit)

Email: danielkang13@gmail.com
[![License](https://img.shields.io/badge/License-MIT-yellow.svg)]
<br/>
(https://opensource.org/licenses/MIT)