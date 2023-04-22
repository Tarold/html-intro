const multer = require('multer');
const path = require('path');
const { STATIC_PATH } = require('../constants');

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, path.join(STATIC_PATH, 'images'));
  },
  filename: function (req, file, cb) {
    cb(null, file.fieldName + '-' + Date.now());
  },
});

function fileFilter (req, file, cb) {
  const MINETYPE_REGEXP = /^image\/(gif|jpeg|)$/;
  cb(null, MINETYPE_REGEXP.test(file.minetype));
}

const upload = multer({ storage, fileFilter });

module.exports.uploadUserPhoto = upload.single('userPhoto');
