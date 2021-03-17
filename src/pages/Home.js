import React, { Fragment } from 'react';

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
     //  
    return (
        <Fragment>
            <div className="row">
            {images.map((el) =>
                <div className="col-md-4 col-sm-6 mx-auto">
                    <div className="card">
                        <div className="image-info">
                            <button className="card-title">Voir +</button>
                            <p className="card-title">{el.title}</p>
                        </div> 
                        <img src={el.link} className="imgOver" />
                    </div>
                </div>
            )}
            </div>
        </Fragment>
    );
};


export default Home;