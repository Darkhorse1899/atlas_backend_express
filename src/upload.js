import multer from "multer"
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "uploads/"); // set the destination for file uploads
  },
  filename: function (req, file, cb) {
    cb(null, file.fieldname + "-" + Date.now());
  },
});

const upload = multer({ storage: storage });
export default upload;