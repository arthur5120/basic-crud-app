
// Server Configuration and Initialization

import { modConnect } from './models'
import { conSetCors } from './controllers'
import router from './routes'
import express from 'express'
import dotenv from 'dotenv'

dotenv.config()

const app = express()
const PORT : number = parseInt(process.env.PORT as string, 10) || 3000

modConnect() // Connects to the database

app.use(
	conSetCors, 
	router
)

app.listen(PORT, () => {
    console.log(`The Server is running on ${PORT}`)
})