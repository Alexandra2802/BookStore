import express, { response } from "express"
import { PORT, mongoDBURL } from "./config.js"
import mongoose from "mongoose"
import { Book } from "./models/bookModel.js"
import booksRoute from "./routes/booksRoute.js"

const app = express()

//middleware to parse request body
app.use(express.json())

app.use('/books',booksRoute)


mongoose.connect(mongoDBURL).then(() => {
    console.log('Connected to the database')
    app.listen(PORT, () => {
        console.log(`App is listening on port ${PORT}`)
    })
    
}).catch((error) => {
    console.log(error)
    res.status(500).send({message: error.message})
})


app.get('/',(req,res) => {
    console.log(req)
    return res.status(234).send("Welcome")
})

