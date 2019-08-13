## Firebase set up

- Go to [firebase](https://firebase.google.com/?gclid=Cj0KCQjwv8nqBRDGARIsAHfR9wAIX0mKzq-1BoHSdIfgyLdsVMV262qc4o2oySSygPlILD8jbCd7jYEaAs5xEALw_wcB)

- Login with your account

- Go to [console](https://console.firebase.google.com/u/0/)

- Add a new project with the name of your project

- Mark `no` to Google Analitycs

- And press `Create project`

  



npm install -g firebase-tools`

- In the project folder run:

`firebase login`

- login with your credentials

`firebase init`

- select `Hosting: Configure and deploy Firebase Hosting sites` and press `Enter`
- select your project and press `Enter`
- write `build` as tour public directory and press `Enter`
- type `y`to condigure as a single-page-application and press `Enter`



### For file upload

- Go to Storage in the firebase console

- Click start to use firebase storage

- Select Europe and create

- Change the rules to allow users to upload images

  ```javascript
  service firebase.storage {
    match /b/{bucket}/o {
      match /{allPaths=**} {
        allow read, write;
      }
    }
  }
  ```

- Create a folder called`images`



- `npm install firebase react-firebase-file-uploader`

- execute somewhere in your application:

- ```javascript
  import firebase from "firebase";
   
  const config = {
    apiKey: "<API_KEY>",
    authDomain: "<PROJECT_ID>.firebaseapp.com",
    storageBucket: "<BUCKET>.appspot.com"
  };
  firebase.initializeApp(config);
  ```

- In the component you need to use image upload:

- ```javascript
  import React, { Component } from "react";
  import firebase from "firebase";
  import FileUploader from "react-firebase-file-uploader";
   
  class FileUploadComponent extends Component {
    state = {
      isUploading: false,
      progress: 0,
      avatarURL: ""
    };
   
    handleUploadStart = () => this.setState({ isUploading: true, progress: 0 });
  
    handleProgress = progress => this.setState({ progress });
  
    handleUploadError = error => {
      this.setState({ isUploading: false });
      console.error(error);
    };
  
    handleUploadSuccess = filename => {
      this.setState({ progress: 100, isUploading: false });
      firebase
        .storage()
        .ref("images")
        .child(filename)
        .getDownloadURL()
        .then(url => {
          console.log(url)
          this.setState({ avatarURL: url })
        });
    };
   
    render() {
      const {isUploading, progress, avatarURL} = this.state;
      return (
        <div>
          <form>
            <label>Avatar:</label>
            {isUploading && <p>Progress: {progress}</p>}
            {avatarURL && <img src={avatarURL} alt='name'/>}
            <FileUploader
              accept="image/*"
              name="avatar"
              randomizeFilename
              storageRef={firebase.storage().ref("images")}
              onUploadStart={this.handleUploadStart}
              onUploadError={this.handleUploadError}
              onUploadSuccess={this.handleUploadSuccess}
              onProgress={this.handleProgress}
            />
          </form>
        </div>
      );
    }
  }
   
  export default FileUploadComponent;
  ```



[Link to documentation](https://www.npmjs.com/package/react-firebase-file-uploader)

