const app = require('./app')
const mongoose = require('mongoose')
const port = process.env.PORT || 5000


app.listen(port,()=>{
    console.log(`your app is running successfully at http://localhost:${port}`)
})


mongoose.connect('mongodb://localhost:27017/agency')
.then(()=>{
    console.log('your database is connected successfully')
})
.catch(err => console.log(err))

