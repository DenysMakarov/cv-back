require('dotenv').config()
const express = require('express')
const cors = require('cors')
// const fileUpload = require('express-fileupload')
const path = require('path')
const router = require("./routes");


const PORT = process.env.PORT || 7000;

const app = express()
app.use(cors())
app.use(express.json())
app.use(express.static(path.resolve(__dirname, 'static')))
// app.use(fileUpload({})) // if ON, multer not working

app.use('/api', router)



const start = async () => {
    try{
        app.listen(PORT, () => console.log(`server ${PORT} has started...`))
    }catch (e){
        console.log(e)
    }
}


start()