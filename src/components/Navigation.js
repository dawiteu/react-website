import React, {useState} from 'react';
import {NavLink} from 'react-router-dom'; 

const Navigation = () => {

    return (
        <nav>
            <a href="###" className="bold">Photosen</a>

            <div className="mymenunav">
                <a href="###"><i className="fas fa-bars"></i></a> 

                <ul>
                    <li>
                        <NavLink to="/">Accueil</NavLink>
                    </li>
                    <li>
                        <NavLink to="/about">About</NavLink>
                    </li>   
                    <li>
                        <NavLink to="/shop">Shop</NavLink>
                    </li>
                </ul>
            </div>

            <div class="icons">
                <ul>
                    <li><a href="###"><i class="fab fa-facebook"></i></a></li>
                    <li><a href="###"><i class="fab fa-instagram"></i></a></li>
                    <li><a href="###"><i class="fab fa-snapchat"></i></a></li>
                    <li><a href="###"><i class="fab fa-twitter"></i></a></li>
                </ul>
            </div>

        </nav>
    );
};

export default Navigation;