const cloudinary = require("cloudinary").v2;
const multer = require("multer");


cloudinary.config({
  cloud_name: "dqg4v54hk",
  api_key: "922889426749643",
  api_secret: "mI5zvHjm0ISuGbpd-VgqnsEtULs",
});


const storage = new multer.memoryStorage();

async function imageUploadUtil(file) {
  const result = await cloudinary.uploader.upload(file, {
    resource_type: "auto",
  });

  return result;
}

const upload = multer({ storage });

module.exports = { upload, imageUploadUtil };
