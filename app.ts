//import some modules
import express from "express"
import cors from "cors"
import dotenv from "dotenv"

import { router } from "./routes/router"



//create express app
const app = express()

//activate dotenv
dotenv.config()

//middleware for cors
app.use(cors())

//middleware for json
app.use(express.json())

//middleware for route
app.use('/products', router)



dotenv.config()



app.listen(process.env.PORT, () => {
    console.log(`server was started on port ${process.env.PORT}`)
    console.log(`you have to make request to /some`)
    

})

