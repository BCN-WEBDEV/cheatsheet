## Set up workspace



#### Module 1

There is nothing to set up, everything should come with the pre-work. 

- Git
- GitHub
- iTerm
- zsh
- VsCode



#### Module 2

##### Node & npm

- Installation of node and npm with [nvm](https://github.com/nvm-sh/nvm)

- ```javascript
  curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.34.0/install.sh | zsh
  ```

- Copy and paste on the same terminal the command that appear just above and look like the following

```javascript
export NVM_DIR="$HOME/.nvm"
[ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh"  # This loads nvm
[ -s "$NVM_DIR/bash_completion" ] && \. "$NVM_DIR/bash_completion"  # This loads nvm bash_completion
```

- After noghtin will happend

- Now we just need to type

- ```j
  nvm install node
  ```

- To make sure that it worked let's try to type the following:

- ```
  node -v 
  # v12.0.1
  npm -v
  # 6.9.0
  ```



##### Packages

As packages we need the following:

```
npm install -g nodemon
npm install -g express-generator
npm install -g eslint
```

[nodemon](https://www.npmjs.com/package/nodemon)

[express-generator](https://expressjs.com/en/starter/generator.html)

[eslint](https://eslint.org/docs/user-guide/getting-started)



#### Mongo and mongo shell

[Best explanation](https://treehouse.github.io/installation-guides/mac/mongo-mac.html)

- Type next command anywhere on the terminal

  `brew install mongodb`

- On the root folder of your computer, `cd ~`, type the next command 

  `mkdir -p /data/db`

- Now we need to chnage the permissions for that folder with

- ```
  sudo chown -R `id -un` /data/db
  ```

- To make sure it worked, run first 

  `mongod` Starts mongo

- and then

  `mongo` Opens mongo shell



#### Module 3

`		npm install -g create-react-app`

or

`npx create-react-app`

