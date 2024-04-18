import express from 'express'
import dotenv from 'dotenv'
import bodyParser from 'body-parser'

dotenv.config()
const app = express()
const PORT = process.env.PORT

app.use(bodyParser.json({limit: "30mb", extended:true}))
app.use(bodyParser.urlencoded({limit: "30mb", extended:true}))

app.listen(PORT, ()=>{
    console.log(`Server is running on port ${PORT}`)
})