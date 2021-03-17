import React, { Fragment } from 'react';

const Services = () => {
    const service = [
        {img: "camera-retro", title: "Camera", description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem sed consequatur, mollitia neque assumenda in?", price: "100"},
        {img: "photo-video", title: "Weed photos", description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem sed consequatur, mollitia neque assumenda in?", price: "250"},
        {img: "horse-head", title: "Aniamls", description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem sed consequatur, mollitia neque assumenda in?", price: "3000"},
        {img: "id-badge", title: "Portrait", description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem sed consequatur, mollitia neque assumenda in?", price: "69"},
        {img: "plane-slash", title: "travel", description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem sed consequatur, mollitia neque assumenda in?", price: "3"},
        {img: "photo-video", title: "Video edit", description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem sed consequatur, mollitia neque assumenda in?", price: "3"},
    ];
    return (
        <Fragment>
            <h5 className="text-center bold h1">Services :</h5>
            <div className="row">
                {service.map((serv,i) => 
                    <div key={i} className="col-lg-4 col-md-6 col-sm-12 parentserv">
                        <div className="card">
                            <i className={`fas fa-`+serv.img}></i>
                            <h4>{serv.title}</h4>
                            <p className="descrip">{serv.description}</p>
                            <p className="price">{serv.price} &euro;</p>
                        </div>
                    </div>) 
                }                
            </div>

        </Fragment>
    );
};
// console.log(serv);<div className="col-lg-4 service"> {serv.description}</div>
export default Services;