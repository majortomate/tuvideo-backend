const fs = require('fs');
const cloudinary = require('cloudinary').v2;

async function uploadSingleHandler(req, res){
  const { file } = req;

  const size = file.size / 1024 / 1024; // MB

  if (size > 2) {
    return res.status(400).json({
      message: 'File size is too big'
    });
  }

  try {
    const result = await cloudinary.uploader.upload(file.path, {
      folder: 'videos',
      use_filename: true,
      unique_filename: false,
      overwrite: true,
      resource_type: 'auto'
    })
    return res.json(result);
  } catch (error) {
    return res.status(500).json(error);
  } finally {
    fs.unlinkSync(file.path);
  }
}

module.exports = {
  uploadSingleHandler,
}
