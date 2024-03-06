import React from 'react'
import { Link } from 'react-router-dom';

const BookCard = ({book, role}) => {
    const {name, author, price, imageUrl } = book;
  return (
    <div className='book-card'>
        <img src={imageUrl} alt={name}className='book-image'/>
        <div className="book-deatils">
            <h3> {name}</h3>
            <p>{author}</p>
        </div>
        {role === "admin" &&
         <div className="book-actions">
         <button> <Link to={`/book/${book._id}`}>edit</Link></button>
         <button> <Link to={`/delete/${book._id}`}>Delete</Link></button>
     </div>}
     {role === "student" &&
         <div className="book-actions">
         <button> <Link to={`/book/${book._id}`}>Add to cart</Link></button>

     </div>}
       
    </div>
  )
}

export default BookCard