import React, { Fragment } from 'react';

const Gal1 = () => {
    const images = [
        {name: 'arbres', link: './imgs/nature_small_1.jpg'},
        {name: 'buissons', link: './imgs/nature_small_2.jpg'},
        {name: 'pluie', link: './imgs/nature_small_3.jpg'},
        {name: 'nature', link: './imgs/nature_small_4.jpg'},
        {name: 'arbres', link: './imgs/nature_small_5.jpg'},
        {name: 'arbres', link: './imgs/nature_small_6.jpg'},
        {name: 'arbres', link: './imgs/nature_small_7.jpg'},
        {name: 'arbres', link: './imgs/nature_small_8.jpg'},
        {name: 'rails', link: './imgs/nature_small_9.jpg'},
        {name: 'arbres', link: './imgs/nature_small_7.jpg'},
        {name: 'nature', link: './imgs/nature_small_4.jpg'},
        {name: 'buissons', link: './imgs/nature_small_2.jpg'},
    ]; 

    return (
        <Fragment>
            <h2 className="text-center h1">Portrait Gallery 1</h2>
            
            <div className="row">
                {images.map((img, i) =>
                    <div className="col-lg-3 col-md-6 image-info mb-3" key={i}>
                        <img src={img.link} alt={img.name} title={img.name} />
                    </div>
                )}
            </div>

        </Fragment>
    );
};

export default Gal1;