# Create and set up an app with express-generator

[Here](https://github.com/BCN-WEBDEV/cheatsheet/tree/master/m2/express-apps/express-app-sample-setup) you will find an example of the result files after following these steps.

## Create the app with express generator
  
Install express generator globally (only the first time you use it):

  ```
  $ npm install -g express-generator
  ```

Create the express app files with express-generator:

  ```
  $ express --hbs --git <name-of-the-folder>
  ```
  
Acces to the folder and install the dependencies:
  
  ```
  $ cd <name-of-the-folder>
  $ npm install
  ```
  
## Create the repo
  
  ```
  $ git init
  ```
  
## Set up

  Copy and paste the boilerplate of .gitignore to your file .gitignore:
  
  [.gitignore boilerplate](https://github.com/BCN-WEBDEV/cheatsheet/blob/master/tools/git/.gitignore)
  
  Add at the header of layout.hbs:
  
  ```html
  <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
  ```
  
  Change all the variables "var" to "const"
  
  Add to all the .js files:
  
  ```
  'use strict';
  ````
  Change all the functions to arrow functions
  
  Add to package.json > script:
  
  ```
  "start-dev": "nodemon -e js,json,hbs ./bin/www"
  ```
## Set up errors configuration

Replace lines 27-41 (aprox, starts with "// -- 404 and error handler") with lines 18-36 from [app.js boilerplate](https://github.com/BCN-WEBDEV/cheatsheet/blob/master/m2/express-apps/app.js)

Add not-found.hbs and replace the code in error.hbs with a H1, for example:

```html
<h1>500 Server Error</h1>
```

Delete ths line from app.js:

```js
const createError = require('http-errors');
```

## Set up HBS

Find in app.js "// view engine setup" and add line 1 and 7 from [HBS boilerplate](https://github.com/BCN-WEBDEV/cheatsheet/blob/master/m2/express-apps/hbs-views-and-layouts.js). It should be like this:

```js
// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');
const hbs = require('hbs');
hbs.registerPartials(path.join(__dirname, '/views/partials'));
```

## Set up Database with mongoose

```
$npm install mongoose
```

Add at the top of app.js:

```js
const mongoose = require('mongoose');
```

copy and paste the code below and change the name of the database:
```js
mongoose.connect('mongodb://localhost/database-name', {
  keepAlive: true,
  useNewUrlParser: true,
  reconnectTries: Number.MAX_VALUE
});
```

You can find a boilerplate of this here: [mongoose-connect boilerplate](https://github.com/BCN-WEBDEV/cheatsheet/blob/master/m2/express-apps/mongoose-connect.js)
