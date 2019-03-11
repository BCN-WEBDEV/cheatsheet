# Deployment
- http://learn.ironhack.com/#/learning_unit/3170
- create heroku account
  - it's a cloud platform for hosting apps
  - https://signup.heroku.com/
- create application
  - provide a name (it will be the url https://app-name.herokuapp.com)
- install [heroku CLI](https://devcenter.heroku.com/articles/heroku-cli)
  - download here: https://devcenter.heroku.com/articles/heroku-cli

- prepare app inside the project
  - `$ heroku login`
  - `$ heroku git:remote -a app-name`
  - make sure package.json is in the root of the project
  - make sure package.json contains a start script
  - add [engines](https://devcenter.heroku.com/articles/nodejs-support#specifying-a-node-js-version) to package.json

```
"scripts": {
  "start": "node ./bin/www"
},
"engines": {
  "node": "x.x.x",
  "npm": "x.x.x"
}
```

- create database via shell
  - `$ heroku addons:create mongolab:sandbox`
  - `$ heroku addons:open mongolab`
  - `$ heroku config:get MONGODB_URI`

- OR create database in [MongoDB Atlas](https://www.mongodb.com/cloud/atlas)
  - sign up [MongoDB Atlas Signup](https://cloud.mongodb.com/user#/atlas/register/accountProfile)
  - create a bogus organiztion and project until you reach the new cluster page
  - create new MongoDB Cluster
    - cloud provider
    - choose ireland
    - make sure cluster tier is set to M0 (free)
    - create cluster
    - go to security
    - click `add new user`
    - add a username and password
    - make sure user privileges are `read and write to any database
    - go to ip whitelist
    - add 0.0.0.0/0 as a ip
    - go to overview
    - click `connect`
    - click `connect your aplication`
    - copy the link that starts with `mongodb+srv`, replacing with the password chosen before
    - replace the word test with the name of the database that you want to create
    - this link is reusable in module 3 by changing the database name as a second cluster is paid
  - copy mongodb url to herokuapp settings config variables `MONGODB_URI`
  
```
mongodb://myuser:mypassword@ds255309.mlab.com:11309/ironhack-database
```
- configure app
  - REMOVE ALL API KEYS (e.g. facebook secret) FROM YOUR CODE
  - `$ npm install --save dotenv`
  - add `require('dotenv').config();` to app.js
  - create `.env` file (adds fake environment variables to `process.env`)
  - add `.env` to `.gitignore`
  - replace hardcoded mongodb URI with process env variable in app.js

```
# in .env file
MONGODB_URI=mongodb://localhost/databaseName
FACEBOOK_API_KEY=qwerqweoiov32414oih12p3ou12po12po3ihp1234
```


```javascript
// in app.js
mongoose.connect(process.env.MONGODB_URI, ...);
```

- deploy
  - `$ git add` && `$ git commit`
  - `$ git push heroku master`
  - `$ heroku logs`
  - `$ heroku logs -t`
