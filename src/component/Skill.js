import React,{Fragment,useState} from 'react';

import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';


var ob = {
    data:[
        {name:"JavaScript",skill:90},
        {name:"React js",skill:80},
        {name:"CSS",skill:95},
        {name:"Bootstrap",skill:70},
        {name:"Node js",skill:80},
        {name:"Express js",skill:85},
        {name:"C++",skill:80},
        {name:"JQuery",skill:90}

    ]
};

const Skill = () => 
{
    return (
        <Fragment>
            <section className="skill-section">
                <div className="row">
                    <h2>My Skills</h2>
                <div className="grid-skill">
                    <div className="col">
                    <ResponsiveContainer width="100%" height="100%">
                        <BarChart width={150} height={40} data={ob.data}>
                            <Tooltip/>
                            <XAxis dataKey="name"/>
                            <Bar dataKey="skill" fill="#2B9B2B" />
                        </BarChart>
                     </ResponsiveContainer>
                    </div>
                    <div className="col">
                        <p> My job is to build your website so that it is functional and user-friendly but at the same time attractive.</p>
                        <p>Comfortable: JavaScript, React js, Node js, Express js, MongoDB, ES6, C++ Bootstrap, Jquery, Lumen API.</p>
                        <p>Forgetting: Wordpress, Sass, C, Java, C#, python, PHP, MySQL.</p>
                    </div>
                </div>
                </div>
            </section>
        </Fragment>
    );
};

export default Skill;