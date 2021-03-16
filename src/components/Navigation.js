import React, {useState} from 'react';
import {NavLink} from 'react-router-dom'; 

const Navigation = () => {

    return (
        <nav>
            <a href="###" className="bold">Photosen</a>

            <div className="mymenunav">
                <a href="###"><i className="fas fa-bars"></i></a> 

                <ul>
                    <li><NavLink to="/">Homme</NavLink></li>
                    <li>
                        <a href="###">Gallerie</a>
                        <ul class="dropmenu">
                            <li><NavLink to="/gallery1">Gallery 1</NavLink></li>
                            <li><NavLink to="/gallery2">Gallery 2</NavLink></li>
                        </ul>
                    </li>   
                    <li><NavLink to="/services">services</NavLink></li>
                    <li><NavLink to="/about">About</NavLink></li>
                    <li><NavLink to="/contact">Contact</NavLink></li>
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