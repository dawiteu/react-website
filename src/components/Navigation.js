import React, {useState} from 'react';
import {NavLink} from 'react-router-dom'; 

const Navigation = () => {
    const [width, setWidth] = useState(window.innerWidth); 

    const [dropGalmenu, setDropGalMenu] = useState(false); 

    const [dispMobMenu, setDispMenu] = useState(false); // ouvert par def?  
    
    const toggleGalMenu = () =>{
        if(!dropGalmenu){
            setDropGalMenu(true);
        }else{
            setDropGalMenu(false);
        }
    }
    
    const checkViewSize = () => {
        let size = window.innerWidth; 
        setWidth(size); 
        if(size > 650){
            setDispMenu(false);
            setDropGalMenu(false);
        }
    }
    window.addEventListener("resize", checkViewSize); 

    const toggleMobileMenu = (e) =>{
        e.preventDefault();
        console.log('toggle');
        if(!dispMobMenu){
            setDispMenu(true);
        }else{
            setDispMenu(false);
            setDropGalMenu(false);
        }
    }

    return (
        <nav>
            <a href="###" className="bold">Photosen</a>

            <div className="mymenunav">
                <a href="###" onClick={(e) => {toggleMobileMenu(e)}}><i className="fas fa-bars"></i></a> 

                <ul className={dispMobMenu && 'dmobileMenu'}>
                    <li><NavLink to="/">Homme</NavLink></li>
                    <li>
                        <a href="###" onClick={toggleGalMenu}>Gallerie</a>
                        <ul className={`dropmenu ${dropGalmenu ? `activated` : `` }`}>
                            <li><NavLink to="/gallery1">Gallery 1</NavLink></li>
                            <li><NavLink to="/gallery2">Gallery 2</NavLink></li>
                        </ul>
                    </li>   
                    <li><NavLink to="/services">services</NavLink></li>
                    <li><NavLink to="/about">About</NavLink></li>
                    <li><NavLink to="/contact">Contact</NavLink></li>
                </ul>
            </div>

            <div className="icons">
                <ul>
                    <li><a href="###"><i className="fab fa-facebook"></i></a></li>
                    <li><a href="###"><i className="fab fa-instagram"></i></a></li>
                    <li><a href="###"><i className="fab fa-snapchat"></i></a></li>
                    <li><a href="###"><i className="fab fa-twitter"></i></a></li>
                </ul>
            </div>

        </nav>
    );
};

export default Navigation;