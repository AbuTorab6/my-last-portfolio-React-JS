import React,{Fragment} from 'react';

import reactjs1 from '../asset/image/reactjs1.PNG';
import mern from '../asset/image/mern.jpeg';
import conference from '../asset/image/confarence.PNG';
import Javascript1 from '../asset/image/Javascript1.PNG';

import {Link} from 'react-router-dom'


const Project = () => {
    return (
        <Fragment>
            <section className="project-section">
                <div className="row">
                    <p className="project-title">My Endeavor</p>
                    <h2>The projects below are what I finished</h2>
                    <div className="grid-project">
                        <div className="col">
                            <img className="project-card-img" src={reactjs1} />
                            <h3>React Js</h3>
                            <p className="project-card-title">React JS was used to construct this project.It is a website with several pages.React Bootstrap is applied here.You can get more information on my github.</p>
                            <p className="project-card-btn"><a  href="https://github.com/AbuTorab6/My-1st-website-by-React-JS.git" target="_blank">GitHub</a></p>
                        </div>
                        <div className="col">
                            <img className="project-card-img" src={mern} />
                            <h3>Express JS</h3>
                            <p className="project-card-title">It is an Express js-based authentication and authorization project.MongoDb is the database I used.This project implements CRUD operations.</p>
                            <p className="project-card-btn"><a  href="https://github.com/AbuTorab6/authentication-authorization-by-express-js-and-mongoDB.git" target="_blank">GitHub</a></p>
                        </div>
                        <div className="col">
                            <img className="project-card-img" src={Javascript1} />
                            <h3>JavaScript</h3>
                            <p className="project-card-title">Raw JavaScript was used to construct this project.Here, tasks can be added, deleted, filtered, and cleared. </p>
                            <p className="project-card-btn"><a  href="https://github.com/AbuTorab6/taskManagement-JavaScript.git" target="_blank">GitHub</a></p>
                        </div>
                    </div>
                 <p><Link className="all-project-btn" to="/project">View All Project</Link></p>
                </div>
            </section>
        </Fragment>
    );
};

export default Project;