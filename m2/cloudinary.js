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


// in the hbs view
<form action="/meme" method="POST" enctype="multipart/form-data">
  <input type="file" name="photo" />
  <button type="submit">Add Image</button>
</form>


// in the router where we want to upload the image
const parser = require('../config/cloudinary');

router.post('/', parser.single('photo'), (req, res, next) =>{
 ...
 
 const image_url = req.file.secure_url
 
 ...
}

