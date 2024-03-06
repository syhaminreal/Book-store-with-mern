import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom'; // Corrected spelling of useNavigate
import '../css/stud.css';

const EditBook = () => {
    // Define state variables for book name, author, price, and image URL
    const [name, setName] = useState('');
    const [author, setAuthor] = useState('');
    const [price, setPrice] = useState('');
    const [imageUrl, setImageUrl] = useState('');
    const navigate = useNavigate(); // Corrected spelling of useNavigate
    const {id} = useParams()

    useEffect(() => {
        axios.get('http://localhost:3000/book/book/+id')
        .then(res => {
           setName(res.data.name)
           setAuthor(res.data.author)
           setPrice(res.data.price)
           setImageUrl(res.data.imageUrl)
        })
        .catch(err => console.log(err))
    }, [])


    const handleSubmit = (e) => {
        e.preventDefault();

        axios.put('http://localhost:3000/book/book/'+id, { name, author, price, imageUrl })
            .then(res => {
                if (res.data.updated) {
                    navigate('/books'); // Corrected Navigate to '/dashboard' 
                }else{
                  console.log(res);
                }
               
            })
            .catch(err => console.log(err));
    };

    return (
        <div className="student-form-container">
            <div className="student-form">
                <h2>Edit Book</h2>
                <form onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label htmlFor="book">Book Name</label>
                        <input
                            type="text"
                            id="book"
                            name="book"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="author">Author</label>
                        <input
                            type="text"
                            id="author"
                            name="author"
                            value={author}
                            onChange={(e) => setAuthor(e.target.value)}
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="price">Price</label>
                        <input
                            type="number"
                            id="price"
                            name="price"
                            value={price}
                            onChange={(e) => setPrice(e.target.value)}
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="imageUrl">Image URL</label>
                        <input
                            type="text"
                            id="imageUrl"
                            name="imageUrl"
                            value={imageUrl}
                            onChange={(e) => setImageUrl(e.target.value)}
                        />
                    </div>
                    <button type="submit">Update</button>
                </form>
            </div>
        </div>
    );
};

export default AddBook;
