const Router = require('express')
const router = new Router()

const downloadCv = require('./downloadCv')

router.use('/cv', downloadCv)

module.exports = router