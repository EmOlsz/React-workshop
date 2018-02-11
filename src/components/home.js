import React from 'react';
import { Link } from 'react-router-dom';

export default function HomePage() {
    return (
        <div>
            <Link to='/contact'>CONTACTS</Link>
            <h1>Hello World!</h1>
            <p>Lorem ipsum dolor sit amet</p>
        </div>
    );
}