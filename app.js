const express = require('express')
const app = express()
const port = 8200
const router = require('./routes/route')
const apiRouter = require('./routes/api-route')
const path = require('path')
const bodyParser = require('body-parser'); 

global.users = [
    {
        username: "bharat",
        email: "abc@xyz.com"
    },
    {
        username: "Test",
        email: "xyz@xyz.com"
    }
]

app.set('views', path.join(__dirname,'views'))
app.set('view engine','pug')
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:true}))
app.use('/', router)
app.use('/api', apiRouter)


app.listen(port, () => {
   console.log('Server is running at port :${port}');
});



