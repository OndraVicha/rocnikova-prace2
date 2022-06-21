import React from 'react';
import './Footer.css';

export const Footer = (props) => {
    
    let year = new Date().getFullYear();
    return (
        <footer className='bg-warning mt-3 p-3 text-center'>
        
        <p className=' text-dark copyright'>&copy; {year} - Ročníkový projekt IT2 - autor: <b>Ondřej Vícha</b></p>
    </footer>
    );
} 