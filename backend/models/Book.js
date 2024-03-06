import mongoose from "mongoose";

const bookSchema = new mongoose.Schema({
    name: { type: String },
    author: { type: String },
    price: { type: Number },
    imageurl: { type:String, required: true},
})

const bookModel = mongoose.model('book', bookSchema);

export {bookModel as Book}
