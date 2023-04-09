const multer = require("multer");
const path = require("path");
const fs = require("fs");

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'uploads/'); // Define the folder where the uploaded file will be saved
    },
    filename: function (req, file, cb) {
        const ext = file.originalname.split('.').pop();
        cb(null, file.originalname); // Set the filename of the uploaded file
    }
});
const upload = multer({ storage: storage });


class CvController {
    uploadFile = (req, res) => {
        upload.single('file')(req, res, function (err) {
            if (err) {
                // Handle Multer errors or other errors
                return res.status(500).json({ error: err.message });
            }
            if (!req.file) {
                return res.status(400).json({ error: 'No file uploaded.' });
            }
            return res.status(200).json({ message: 'File uploaded.', filename: req.file.filename });
        });
    };

    downloadFile(req, res) {
        const { filename } = req.params;
        console.log(filename)
        const filePath = path.join(__dirname, '../uploads', 'denys_makarov_cv.pdf');

        console.log(filePath)
        fs.readFile(filePath, (err, data) => {
            if (err) {
                res.status(404).send('File not found');
            } else {
                res.download(filePath);
            }
        });
    }
}

module.exports = new CvController()