import React, {useEffect, useState} from 'react';
import {NavLink} from 'react-router-dom'; 

const Navigation = () => {
    const [width, setWidth] = useState(window.innerWidth); 

    const [dropGalmenu, setDropGalMenu] = useState(false); 

    const [dispMobMenu, setDispMenu] = useState(false); // ouvert par def?  
    
    // ouverture ou vermeture du menu deroulant (gal 1 et 2 );
    const toggleGalMenu = (e) =>{
        //e.preventDefault();
        if(!dropGalmenu){
            setDropGalMenu(true);
            
        }else{
            setDropGalMenu(false);
        }
    }
    
    // verif de la tailel de l'ecran. si petit -> on ferme les menus. 
    const checkViewSize = () => {
        let size = window.innerWidth; 
        setWidth(size); 
        if(size > 650){
            setDispMenu(false);
            setDropGalMenu(false);
        }
    }

    window.addEventListener("resize", checkViewSize); 
    
    // fermeture du menu mobile. 
    const toggleMobileMenu = (e) =>{
        e.preventDefault();
        if(!dispMobMenu){
            console.log('open');
            setDispMenu(true);
        }else{
            console.log('close');
            setDispMenu(false);
        }
    }

    // fermeture du menu deroulant SI ouvert et click a l'exterieur ; 
    const menuIsOpen = (e) =>{
        /*
        if(dropGalmenu){
            if(e.target.outerText !== "GALLERIE"){
                console.log('click a lexetiertie' );
                //setDropGalMenu(false);
                //setDispMenu(false);
            }
        }

        if(dispMobMenu){
            console.log('menu mobile ouvert');
            //console.log(e); 
            //if(e.target != "li" || e.target != "i"){
               // setDispMenu(false);
            //}
        }
        */
    }

    document.addEventListener("click", (e) => menuIsOpen(e));

    return (
        <nav>
            <a href="###" className="bold">Photosen</a>

            <div className="mymenunav">
                <a href="###" onClick={(e) => {toggleMobileMenu(e)}}><i className="fas fa-bars"></i></a> 

                <ul className={dispMobMenu ? 'dmobileMenu' : ''}>
                    <li><NavLink to="/" exact activeClassName="activemenu">Homme</NavLink></li>
                    <li>
                        <a href="###" onClick={(e) => { toggleGalMenu(e) } }>Gallerie</a>
                        <ul className={`dropmenu ${dropGalmenu && `activated` }`}>
                            <li><NavLink exact to="/gallery1" onClick={(e) => { toggleGalMenu(e) } } activeClassName="activemenu">Gallery 1</NavLink></li>
                            <li><NavLink exact to="/gallery2" onClick={(e) => { toggleGalMenu(e) } } activeClassName="activemenu">Gallery 2</NavLink></li>
                        </ul>
                    </li>   
                    <li><NavLink exact to="/services" activeClassName="activemenu">services</NavLink></li>
                    <li><NavLink exact to="/about" activeClassName="activemenu">About</NavLink></li>
                    <li><NavLink exact to="/contact" activeClassName="activemenu">Contact</NavLink></li>
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