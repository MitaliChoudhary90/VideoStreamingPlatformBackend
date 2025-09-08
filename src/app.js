import express, { urlencoded } from 'express'
import cors from 'cors'
import cookieParser from 'cookie-parser'

const app=express()

app.use(cors({
    origin:process.env.CORS_ORIGIN, //In .env we can give from where the url is coming from i.e. the site proj is hosted on
    credentials:true
}))

app.use(express.json({
    limit:"16kb"
}))

app.use(urlencoded())

app.use(express.static("public"))
app.use(cookieParser())
export {app}