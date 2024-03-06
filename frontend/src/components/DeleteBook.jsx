import React, {useEffect}from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'


const DeleteBook = () => {
    const navigate = useNavigate();
    const {id} = useParams()

    useEffect(() => {
        axios.get('http://localhost:3000/book/book/'+id)
            .then(res => {
                if (res.data.delete) {
                    navigate('/books');
                }
            })
            .catch(error => {
                console.error('Logout failed:', error);
            });
    }, []);
}

export default DeleteBook