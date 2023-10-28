import express, { response } from "express"
import { PORT, mongoDBURL } from "./config.js"
import mongoose from "mongoose"
import { Book } from "./models/bookModel.js"

const app = express()

//middleware to parse request body
app.use(express.json())

app.get('/',(req,res) => {
    console.log(req)
    return res.status(234).send("Welcome")
})

//route to save a book
app.post('/books',async (req,res) => {
try {
    if(!req.body.title || !req.body.author || !req.body.publishYear){
        return res.status(400).send({message: 'Send all required fields'})
    }
    const newBook = {
        title: req.body.title,
        author: req.body.author,
        publishYear: req.body.publishYear,
    }
    const book = await Book.create(newBook)
    return res.status(201).send(book)
    
} catch (error) {
    console.log(error)
    res.status(500).send({message: error.message})
}
})

//get all books
app.get('/books', async (req,res) => {
    try {
        const books = await Book.find({})
        return res.status(200).json({
            count: books.length,
            data: books
        })
    } catch (error) {
        console.log(error)
        res.status(500).send({message: error.message})
    }
})

//get a book by id
app.get('/books/:id', async (req,res) => {
    try {
        const {id} = req.params
        const book = await Book.findById(id)
        return res.status(200).json(book)
    } catch (error) {
        console.log(error)
        res.status(500).send({message: error.message})
    }
})

mongoose.connect(mongoDBURL).then(() => {
    console.log('Connected to the database')
    app.listen(PORT, () => {
        console.log(`App is listening on port ${PORT}`)
    })
    
}).catch((error) => {
    console.log(error)
})