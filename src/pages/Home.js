import React, { Fragment } from 'react';
import {Link} from 'react-router-dom'; 

const Home = () => {

    const images = [
        {title: "Camera", link: "./imgs/img_1.jpg"},
        {title: "Café time", link: "./imgs/img_2.jpg"},
        {title: "écran", link: "./imgs/img_3.jpg"},
        {title: "livre", link: "./imgs/img_4.jpg"},
        {title: "dormir", link: "./imgs/img_5.jpg"},
        {title: "Monsieur JSP Ki", link: "./imgs/img_6.jpg"},
        {title: "Mariage", link: "./imgs/img_7.jpg"},
        {title: "livre 2", link: "./imgs/img_4.jpg"},
        {title: "ecran 2", link: "./imgs/img_3.jpg"}
    ];

    const randNumb = () => {
        const numb = Math.floor(Math.random() * 10) + 1;
        return numb % 2 === 0 ? '1' : '2';
    }
     //  
    return (
        <Fragment>
            <div className="row">
            {images.map((el,i) =>
                <div className="col-md-4 col-sm-6 mx-auto" key={i}>
                    <div className="card">
                        <div className="image-info">
                            <p className="card-title">{el.title}</p>
                            <Link to={`gallery`+randNumb()}>
                                <button className="card-title">more photos</button>
                            </Link>
                        </div> 
                        <img src={el.link} className="imgOver" alt={el.title} />
                    </div>
                </div>
            )}
            </div>
        </Fragment>
    );
};


export default Home;