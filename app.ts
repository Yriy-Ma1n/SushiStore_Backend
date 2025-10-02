//import some modules
import express from "express"
import cors from "cors"
import dotenv from "dotenv"
import { createClient } from "@supabase/supabase-js";
// import { router } from "./routes/router.js"

//create express app
const app = express()

//activate dotenv
dotenv.config()

//middleware for cors
app.use(cors())

//middleware for json
app.use(express.json())

//middleware for route
// app.use('/products', router)



dotenv.config()

export const supabase = createClient(
    process.env.SUPABASE_URL || '',
    process.env.SUPABASE_KEY || ''
)


app.get('/some', async (req, res) => {
    const { data, error } = await supabase.from("Products").select("*")
    console.log(error)
    if (data) {
        res.send(data)
    }else{
        res.send("something wrong")
    }

})


app.listen(process.env.PORT, () => {
    console.log(`server was started on port ${process.env.PORT}`)
    console.log(`you have to make request to /some`)

})

