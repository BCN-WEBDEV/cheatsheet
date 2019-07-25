// npm install cloudinary multer-storage-cloudinary multer

// In config folder new file cloudinary.js

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
  allowedFormats: ['jpg', 'png']
});
 
const parser = multer({ storage: storage });

module.exports = parser



// In the hbs view
<form action="/meme" method="POST" enctype="multipart/form-data">
  <input type="file" name="photo" />
  <button type="submit">Add Image</button>
</form>



// In the router where we want to upload the image
const parser = require('../config/cloudinary');

router.post('/', parser.single('photo'), (req, res, next) =>{
 ...
 const image_url = req.file.secure_url
 ...
}

