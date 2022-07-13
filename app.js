const express  = require('express')
const app = express()
const cors = require('cors')
const cookieParser = require('cookie-parser')
const userRouter = require('./router/user.router')
const serviceRouter = require('./router/services.router')
const blogRouter = require('./router/blog.router')
const portfolioRouter = require('./router/portfolio.router')
const teamRouter = require('./router/team.router')
const reviewRouter = require('./router/review.router')



app.use(cookieParser())
app.use(cors({
    origin:'http://localhost:3000',
    methods:['POST','PUT','GET','DELETE','OPTIONS','HEAD'],
    credentials:true
}))
app.use(express.json())

app.use('/api/user',userRouter)
app.use('/api/services',serviceRouter)
app.use('/api/blog',blogRouter)
app.use('/api/portfolio',portfolioRouter)
app.use('/api/team',teamRouter)
app.use('/api/review',reviewRouter)

app.use((req,res) =>{
    res.status(404).send('your data is not found')
})



module.exports = app