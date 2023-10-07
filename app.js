require('dotenv').config()
const express = require("express");
const connectDB = require('./DB/connection');
const app = express()
const cors = require('cors')
app.use(cors())
const port = process.env.PORT
const indexRouter = require("./modules/index.router")
// var whitelist = ['http://example1.com', 'http://example2.com']
// var corsOptions = {
//   origin: function (origin, callback) {
//     if (whitelist.includes(origin)) {
//       callback(null, true)
//     } else {
//       callback(new Error('Not allowed by CORS'))
//     }
//   }
// }
app.use(express.json())
const path = require('path')
app.get("/", (req, res) => {
    try {
        res.json({ message: "Welcome par" , PO:port})

    } catch (error) {
        res.json({ message: "error grt page" })

    }

})
app.use('/api/v1/uploads', express.static(path.join(__dirname, './uploads')))
app.use('/api/v1/auth', indexRouter.authRouter)
app.use('/api/v1/user', indexRouter.userRouter)
app.use('/api/v1/post', indexRouter.postRouter)
app.use('/api/v1/admin', indexRouter.adminRouter)
const QRCode = require('qrcode')
app.get("/qr", (req, res) => {
    QRCode.toDataURL(`<a href='https://stackoverflow.com/questions/16531895/mongoose-query-where-value-is-not-null'> click me</a>`, function (err, url) {
        if (err) {
            res.status(400).json({ message: "QR err" })
        } else {
            console.log(url)
            res.json({ message: "QR", url })
        }
    })
})


connectDB()
app.listen(port, () => {
    console.log(`server is runnin on port :::: ${port}`);
})