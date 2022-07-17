import React,{Fragment} from 'react';

import jubo from '../asset/image/jubo.jpg';

import {Link} from 'react-router-dom'

const About = () => {
    return (
        <Fragment>
            <section className="about-section">
                <div className="row">
                    <div className="grid-about">
                        <div className="col">
                            <img className="mypic" src={jubo} alt="torab" />
                        </div>
                        <div className="col">
                            <p className="about-p1">ABOUT ME</p>
                            <h2>Hey, It's Abu Torab Ibnul Baki (Juboraz) I'm the one. I am a MERN Stack Developer.</h2>
                            <p className="about-p2"> In computer science and engineering, I'm pursuing my BSc at AIUB. I create websites. I am working in web world for more than 2 years. Around 2019, I began studying web development. I have been working with WordPress for quite some time. Then, JavaScript and the JavaScript's framework appeared to be more intelligent to me. I then began studying MERN Stack Development. </p>
                            <p className="about-p2">The technology used in the web world is changed quite quickly; one such example is the changeover from version 17 to version 18 of React js. Because of this, I believe it's crucial to stay current with technology. I have a serious addiction to learning about new technologies as well as how to improve my knowledge of current ones. which make it easy for me to change from one technology to another.</p>
                            
                            <p className="about-p5" ><Link className="about-btn" to="/contact" >Contact</Link></p>
                        </div>
                    </div>
                </div>
            </section>
        </Fragment>
    );
};

export default About;