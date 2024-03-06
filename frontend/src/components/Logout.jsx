import React, { useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Logout = ({setRole}) => {
    const navigate = useNavigate();

    useEffect(() => {
        axios.get('http://localhost:3000/auth/logout')
            .then(res => {
                if (res.data.logout) {
                    setRole('')
                    navigate('/');
                }
            })
            .catch(error => {
                console.error('Logout failed:', error);
            });
    }, []); // Passing an empty dependency array to ensure useEffect runs only once

    return null; // Since this component is responsible for a side effect and doesn't render anything, return null
};

export default Logout;
