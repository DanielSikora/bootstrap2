import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const Navbar = () => {
    return (
        <nav className='navbar navbar-expand-lg navbar-light bg-light'>
            <div className='w-100'>
                <a className='navbar-brand' href='#strona'>Logo</a>
                <button className='navbar-toogler' type='button' data-bs-toogle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className='navbar-toogler-icon'></span>
                </button>
                <div className='collapse navbar-collapse' id="navbarNav">
                    <ul className='navbar-nav ms-auto'>
                        <li className='nav-item'><a className='nav-link active' aria-current="page" href='#'>Home</a></li>
                        <li className='nav-item'><a className='nav-link active'href='#'>O nas</a></li>
                        <li className='nav-item'><a className='nav-link active'href='#'>Usługi</a></li>
                        <li className='nav-item'><a className='nav-link active'href='#'>Kontakt</a></li>
                        <li className='nav-item'><a className='nav-link active'href='#'>Coś tam</a></li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};
export default Navbar;