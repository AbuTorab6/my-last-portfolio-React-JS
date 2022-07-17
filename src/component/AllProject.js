import React,{Fragment} from 'react';


import reactjs1 from '../asset/image/reactjs1.PNG';
import reactjs2 from '../asset/image/reactjs2.PNG';
import mern from '../asset/image/mern.jpeg';
import lumen from '../asset/image/lumen.png';

import wordpressPortfolio from '../asset/image/portfolioWordpress.jpg'
import ecommerce from '../asset/image/ecommerce.jpg'
import airi from '../asset/image/airi.PNG'

import recycleTrash from '../asset/image/recycleTrash.PNG';
import testplan from '../asset/image/TestPlan.png'
import java from '../asset/image/java.png';
import oracle from '../asset/image/oracle.jpg';

import conference from '../asset/image/confarence.PNG';
import resraurent from '../asset/image/resraurent.PNG';
import fbSignUp from '../asset/image/fb-signUp.PNG';
import landingPage1 from '../asset/image/landingPage1.PNG';
import landingPage2 from '../asset/image/LandingPage2.PNG';
import leader from '../asset/image/leader.PNG';
import SurveyForm1 from '../asset/image/SurveyForm1.PNG';
import surveyForm2 from '../asset/image/surveyForm2.PNG';

import bootstrap from '../asset/image/Bootstrap.PNG';
import Javascript1 from '../asset/image/Javascript1.PNG';
import javascript2 from '../asset/image/javascript2.PNG';

import psdToHtml1 from '../asset/image/psdToHtml1.PNG';
import psdToHtml2 from '../asset/image/psdToHtml2.PNG';



const AllProject = () => 
{
    return (
        <Fragment>
            <section className="all-project-section">
                <div className="row">
                    <p className="all-project-title">My Endeavor</p>
                    <h2>The projects below are what I finished</h2>
                    <div className="grid-all-project">
                        <div className="col">
                            <img className="all-project-card-img" src={reactjs1} />
                            <h3>React Js</h3>
                            <p className="all-project-card-title">React JS was used to construct this project.It is a website with several pages.React Bootstrap is applied here.You can get more information on my github.</p>
                            <p className="all-project-card-btn"><a  href="https://github.com/AbuTorab6/My-1st-website-by-React-JS.git" target="_blank">GitHub</a></p>
                        </div>
                        <div className="col">
                            <img className="all-project-card-img" src={reactjs2} />
                            <h3>React Js-2</h3>
                            <p className="all-project-card-title">React JS was used to construct this project.It is a website with several pages.React Bootstrap is applied here.You can get more information on my github.</p>
                            <p className="all-project-card-btn"><a  href="https://github.com/AbuTorab6/my-last-portfolio-React-JS.git" target="_blank">GitHub</a></p>
                        </div>
                        <div className="col">
                            <img className="all-project-card-img" src={mern} />
                            <h3>Express JS</h3>
                            <p className="all-project-card-title">It is an Express js-based authentication and authorization project.MongoDb is the database I used.This project implements CRUD operations.</p>
                            <p className="all-project-card-btn"><a  href="https://github.com/AbuTorab6/authentication-authorization-by-express-js-and-mongoDB.git" target="_blank">GitHub</a></p>
                        </div>
                        <div className="col">
                            <img className="all-project-card-img" src={lumen} />
                            <h3>Lumen rest API</h3>
                            <p className="all-project-card-title">A phone book project by Lumen rest API.</p>
                            <p className="all-project-card-btn"><a  href="https://github.com/AbuTorab6/PhoneBook-Lumen-API.git" target="_blank">GitHub</a></p>
                        </div>
                        <div className="col">
                            <img className="all-project-card-img" src={wordpressPortfolio} />
                            <h3>Wordpress-1</h3>
                            <p className="all-project-card-title">This is a single page portfolio website by wordpress.</p>
                            <p className="all-project-card-btn"><a  href="https://github.com/AbuTorab6/portfolio-wordpress.git" target="_blank">GitHub</a></p>
                        </div>
                        <div className="col">
                            <img className="all-project-card-img" src={ecommerce} />
                            <h3>Wordpress-2</h3>
                            <p className="all-project-card-title">This is a e-commerce website by wordpress.</p>
                            <p className="all-project-card-btn"><a  href="https://github.com/AbuTorab6/E-commarce-Wordpress.git" target="_blank">GitHub</a></p>
                        </div>
                        <div className="col">
                            <img className="all-project-card-img" src={airi} />
                            <h3>Wordpress-3</h3>
                            <p className="all-project-card-title">This is a simple wordpress template.</p>
                            <p className="all-project-card-btn"><a  href="https://github.com/AbuTorab6/My-1st-wordpress-website-Airi-.git" target="_blank">GitHub</a></p>
                        </div>
                        <div className="col">
                            <img className="all-project-card-img" src={recycleTrash} />
                            <h3>PHP</h3>
                            <p className="all-project-card-title">Raw php was used to construct this project.It is a website for recycling trash. This project implements authentication, authorization of user and also CRUD operations. </p>
                            <p className="all-project-card-btn"><a  href="https://github.com/AbuTorab6/recycleTrash-PHP.git" target="_blank">GitHub</a></p>
                        </div>
                        <div className="col">
                            <img className="all-project-card-img" src={testplan} />
                            <h3>Test Plan</h3>
                            <p className="all-project-card-title">A software test plan documentation for Recycle Trash. </p>
                            <p className="all-project-card-btn"><a  href="https://github.com/AbuTorab6/Test-plan-of-recycle-trash.git" target="_blank">GitHub</a></p>
                        </div>
                        <div className="col">
                            <img className="all-project-card-img" src={java} />
                            <h3>JAVA</h3>
                            <p className="all-project-card-title">Raw java was used to construct this project. It is a market management system </p>
                            <p className="all-project-card-btn"><a  href="https://github.com/AbuTorab6/market-management-JAVA.git" target="_blank">GitHub</a></p>
                        </div>
                        <div className="col">
                            <img className="all-project-card-img" src={oracle} />
                            <h3>Oracle database</h3>
                            <p className="all-project-card-title">Dance school management system using Oracle database</p>
                            <p className="all-project-card-btn"><a  href="https://github.com/AbuTorab6/dance-school-management-oracle.git" target="_blank">GitHub</a></p>
                        </div>
                        <div className="col">
                            <img className="all-project-card-img" src={Javascript1} />
                            <h3>JavaScript-1</h3>
                            <p className="all-project-card-title">Raw JavaScript was used to construct this project.Here, tasks can be added, deleted, filtered, and cleared. </p>
                            <p className="all-project-card-btn"><a  href="https://github.com/AbuTorab6/taskManagement-JavaScript.git" target="_blank">GitHub</a></p>
                        </div>
                        <div className="col">
                            <img className="all-project-card-img" src={javascript2} />
                            <h3>JavaScript-2</h3>
                            <p className="all-project-card-title">Raw JavaScript was used to construct this project.It is a mechanism for managing libraries. You can include the title of the book, the author's name, and the ISBN. Additionally, you have the option of erasing the book information. </p>
                            <p className="all-project-card-btn"><a  href="https://github.com/AbuTorab6/LibraryManagement-JavaScript.git" target="_blank">GitHub</a></p>
                        </div>
                        <div className="col">
                            <img className="all-project-card-img" src={bootstrap} />
                            <h3>Bootstrap</h3>
                            <p className="all-project-card-title">This website was created using Bootstrap. In this project, Bootstrap version 4 has been used.</p>
                            <p className="all-project-card-btn"><a  href="https://github.com/AbuTorab6/bootstrap-1.git" target="_blank">GitHub</a></p>
                        </div>
                        <div className="col">
                            <img className="all-project-card-img" src={psdToHtml1} />
                            <h3>PSD To HTML</h3>
                            <p className="all-project-card-title">Here HTML, CSS and JQuery plugin has been used.The PSD template has been converted into HTML</p>
                            <p className="all-project-card-btn"><a  href="https://github.com/AbuTorab6/cuda.git" target="_blank">GitHub</a></p>
                        </div>
                        <div className="col">
                            <img className="all-project-card-img" src={psdToHtml2} />
                            <h3>PSD To HTML-2</h3>
                            <p className="all-project-card-title">Here HTML, CSS and JQuery plugin has been used.The PSD template has been converted into HTML</p>
                            <p className="all-project-card-btn"><a  href="https://github.com/AbuTorab6/psd-to-html-2.git" target="_blank">GitHub</a></p>
                        </div>
                        <div className="col">
                            <img className="all-project-card-img" src={conference} />
                            <h3>HTML and CSS</h3>
                            <p className="all-project-card-title">This is a website for a international Conferance developed with HTML and CSS.This site has 4 pages such as Home,Speakers,Schedule,Venue. Every page have a Navigation bar.</p>
                            <p className="all-project-card-btn"><a  href="https://github.com/AbuTorab6/confarence-site.git" target="_blank">GitHub</a></p>
                        </div>
                        <div className="col">
                            <img className="all-project-card-img" src={resraurent} />
                            <h3>HTML and CSS</h3>
                            <p className="all-project-card-title">This website is for a restaurant and was created using only CSS and raw HTML.</p>
                            <p className="all-project-card-btn"><a  href="https://github.com/AbuTorab6/restaurant.git" target="_blank">GitHub</a></p>
                        </div>
                        <div className="col">
                            <img className="all-project-card-img" src={fbSignUp} />
                            <h3>HTML and CSS</h3>
                            <p className="all-project-card-title">This is templet of Facebook Sign up page. This templet is made with raw HTML and CSS</p>
                            <p className="all-project-card-btn"><a  href="https://github.com/AbuTorab6/facebook-sign-up.git" target="_blank">GitHub</a></p>
                        </div>
                        <div className="col">
                            <img className="all-project-card-img" src={landingPage1} />
                            <h3>HTML and CSS</h3>
                            <p className="all-project-card-title">This is templet of landing page. This templet is made with raw HTML and CSS</p>
                            <p className="all-project-card-btn"><a  href="https://github.com/AbuTorab6/single-page-website-1-.git" target="_blank">GitHub</a></p>
                        </div>
                        <div className="col">
                            <img className="all-project-card-img" src={landingPage2} />
                            <h3>HTML and CSS</h3>
                            <p className="all-project-card-title">This is templet of landing page. This templet is made with raw HTML and CSS</p>
                            <p className="all-project-card-btn"><a  href="https://github.com/AbuTorab6/landing-page.git" target="_blank">GitHub</a></p>
                        </div>
                        <div className="col">
                            <img className="all-project-card-img" src={SurveyForm1} />
                            <h3>HTML and CSS</h3>
                            <p className="all-project-card-title">This survey form is quite straightforward. Raw HTML and CSS were used to create this templet. You'll find a field where you may type in information such as your name, address, and email.</p>
                            <p className="all-project-card-btn"><a  href="https://github.com/AbuTorab6/survey-form1.git" target="_blank">GitHub</a></p>
                        </div>
                        <div className="col">
                            <img className="all-project-card-img" src={surveyForm2} />
                            <h3>HTML and CSS</h3>
                            <p className="all-project-card-title">This survey form has parallax effects. Raw HTML and CSS were used to create this templet. You will find a field where you may enter information such as your name, address, and email.</p>
                            <p className="all-project-card-btn"><a  href="https://github.com/AbuTorab6/parallax-survey-form.git" target="_blank">GitHub</a></p>
                        </div>
                        <div className="col">
                            <img className="all-project-card-img" src={leader} />
                            <h3>HTML and CSS</h3>
                            <p className="all-project-card-title">This is a very simple Portfolio of Sheikh Mujibur Rahman. This templet is made with raw HTML and CSS. I made it just for my practice purpose</p>
                            <p className="all-project-card-btn"><a  href="https://github.com/AbuTorab6/Portfolio-Sheikh-Mujibur-Rahman.git" target="_blank">GitHub</a></p>
                        </div>
                    </div>
                </div>
            </section>
        </Fragment>
    );
};

export default AllProject;