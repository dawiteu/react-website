import React, { Fragment } from 'react';

const About = () => {
    return (
        <Fragment>
            <h5 className="text-center h1 mb-5 pb-5">About us.</h5>
            <div className="row" id="aboutcontent">
                <div className="col-lg-6 col-md-6">
                    <img src="./imgs/img_2.jpg" alt="coffee time" className="img-fluid" />
                </div>
                <div className="col-lg-6 col-md-6 d-lg-flex d-md-flex flex-column align-items-lg-end align-items-md-end">
                    <div className="w-75 align-self-lg-end">
                        <h2>Notre mission</h2>
                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aliquam, eligendi? Repellendus ullam nostrum voluptatem expedita accusantium eligendi quisquam, iste reprehenderit deserunt non quam perferendis, quasi, earum aliquam ea accusamus. Velit nostrum odit voluptates, aliquid, fugiat illum totam dignissimos tempora quisquam quibusdam deserunt molestiae ad tenetur quasi recusandae, provident nesciunt! Natus laboriosam porro, exercitationem debitis vel, harum amet deserunt nesciunt soluta error non quae molestias libero repellat sequi optio fugit a dicta tenetur aperiam ducimus. Dicta tenetur, ex, porro explicabo fugiat, harum nesciunt vitae minus cupiditate error veniam neque. Nostrum quam labore iste velit magni earum accusantium inventore sed voluptas, nulla sint laudantium doloribus odit eveniet eius maxime vel accusamus odio fugit.</p>
                        <p> In consequuntur repellendus deserunt repudiandae neque doloribus laboriosam eos tempora, deleniti alias consectetur optio unde eum cupiditate, saepe ratione dicta? Laborum repellendus voluptatem cum quibusdam eos, iure placeat delectus excepturi quis laboriosam porro quia, beatae, quo nesciunt minima ex.</p>                        
                    </div>
                </div>
            </div>
        </Fragment>
    );
};

export default About;