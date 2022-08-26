const cloudinary = require('cloudinary').v2;

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
  secure: true
});

async function UploadImage(filePath) {
  return await cloudinary.uploader.upload(filePath, {
    folder: 'users/userTest'
  });
}

module.exports = {
  UploadImage
}
