//npm install cloudinary multer-storage-cloudinary multer

//in config folder new file cloudinary.js

const cloudinary = require('cloudinary');
const cloudinaryStorage = require('multer-storage-cloudinary');
const multer = require('multer');
 
cloudinary.config({
  cloud_name: 'your cloud_name',
  api_key: 'yoyr api_key',
  api_secret: 'your api_secret'
  });

const storage = cloudinaryStorage({
  cloudinary: cloudinary,
  folder: 'name folder',
  allowedFormats: ['jpg', 'png'],
  filename: function (req, file, cb) {
    cb(undefined, 'my-file-name');
  }
});
 
const parser = multer({ storage: storage });

module.exports = parser
