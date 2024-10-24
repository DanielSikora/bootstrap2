import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';

const Footer = () => {
    return (
        <footer className="bg-dark text-white text-center py-4">
            <div className="container">
                <div className="row">
                    <div className="col-md-4">
                        <h5>O nas</h5>
                        <ul className="list-unstyled">
                            <li><a href="#" className="text-white">Kim jesteśmy?</a></li>
                            <li><a href="#" className="text-white">Nasz cel</a></li>
                        </ul>
                    </div>
                    <div className="col-md-4">
                        <h5>Kontakt</h5>
                        <ul className="list-unstyled">
                            <li><a href="#" className="text-white">Adres</a></li>
                            <li><a href="#" className="text-white">telefon</a></li>
                        </ul>
                    </div>
                    <div className="col-md-4">
                        <h5>Śledź nas</h5>
                        <ul className="list-unstyled">
                            <li><a href="#" className="text-white">Facebook</a></li>
                            <li><a href="#" className="text-white">GG</a></li>
                        </ul>
                    </div>
                </div>
                <p className="mt-3">Wszelkie prawa zastrzezone.</p>
            </div>
        </footer>
    );
};
export default Footer;