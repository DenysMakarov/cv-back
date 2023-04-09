const Router = require('express')
const router = new Router()
const cvController = require('../controlers/cvController')
const multer = require('multer');
const path = require("path");


router.post('/upload',  cvController.uploadFile)
router.get('/download/:filename',  cvController.downloadFile)
module.exports = router