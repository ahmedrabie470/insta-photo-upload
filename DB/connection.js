const mongoose = require('mongoose');

const connectDB =  ()=>{
    return mongoose.connect('mongodb+srv://MahmoudElwan:01015776658@mahmoudelwan-nodejs.jfspq.mongodb.net/insat89')
    .then(res => console.log(`connected DB on url .....`))
    .catch(err => console.log('fail to connect'))
}

module.exports  = connectDB