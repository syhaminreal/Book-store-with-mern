import express from "express";
import Book from "./models/book.js"; // Import Book as default
import { verifyAdmin } from "./auth.js";

const router = express.Router();

router.post('/add', verifyAdmin, async (req, res) => {
    try {
        const { name, author, imageUrl, price } = req.body;
        // Create a new book instance
        const newBook = new Book({
            name,
            author,
            imageUrl,
            price
        });

        // Save the new book to the database (corrected variable name)
        await newBook.save();

        // Send success response
        return res.json({ added: true });
    } catch (err) {
        // Handle errors
        console.error(err);
        return res.status(500).json({ message: "Error in adding book" });
    }
});
router.get('/books', async (req, res) => {
    try{
       const books =  await Book.find()
       return res.json(books)
    }catch(err){
        return res.json(err)
    }
})

router.get('/boo/:id', async(req, res) => {
    try{
        const id= req.params.id;
        const book = await Book.findById({_id: id})
        return res.json(books)
    }catch(err) {
        return res.json(err)
    }
})


router.put('/book/:id', async (req, res) => {
    try {
        const id = req.params.id;
        const book = await Book.findByIdAndUpdate(id, req.body, { new: true });
        return res.json({ updated: true, book });
    } catch (err) {
        return res.status(500).json({ error: err.message });
    }
});

router.delete('/book/:id', async (req, res) => {
    try {
        const id = req.params.id;
        const book = await Book.findByIdAndDelete({_id: id});
        return res.json({ delted: true, book });
    } catch (err) {
        return res.status(500).json({ error: err.message });
    }
});

export { router as bookRouter };
