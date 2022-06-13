const express = require("express")
const mongoose = require("mongoose")
const bodyParser = require("body-parser")
const app = express()
const port = process.env.PORT || 5050

app.use(bodyParser.urlencoded({extended:true}))

//Static Files
 app.use(express.static('public'))
 app.use('/css',express.static(__dirname + 'public/css'))
 app.use('/image',express.static(__dirname + 'public/image'))
 app.use('/js',express.static(__dirname + 'public/js'))

//Templeting Engine
app.set('view engine','ejs')

//Render the page
app.get("/",(req, res) => 
{
    const sendData = {
        location : "Location",
        temp : "Temp",
        desc : "Description",
        feel : "Feel",
        humidity : "Humidity",
        speed : "Speed"
    }
    res.render("index",{sendData : sendData})
})

//routes
const weatherRouter = require('./src/routes/weather')
app.use('/',weatherRouter)

app.listen(port,() => 
{
console.log(`Listening to port ${port}`)
})