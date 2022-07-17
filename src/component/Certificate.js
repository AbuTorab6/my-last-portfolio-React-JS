import React,{Fragment,useState} from 'react';


import ImageGallery from 'react-image-gallery';


import certificate1 from '../asset/image/certificate1.PNG'
import certificate2 from '../asset/image/certificate2.PNG'
import certificate3 from '../asset/image/certificate3.PNG'
import certificate4 from '../asset/image/certificate4.PNG'
import certificate5 from '../asset/image/certificate5.PNG'
import certificate6 from '../asset/image/certificate6.jpg'


import "react-image-gallery/styles/css/image-gallery.css";

const Certificate = () => {


    const[v1,v2]=useState({
        showPlayButton: false,
        showBullets:true,
        showIndex:true
    });

    const images = [
        {
          original: [certificate1],
          thumbnail: [certificate1],
          originalHeight:'400px',
        },
        {
          original: [certificate2],
          thumbnail: [certificate2],
          originalHeight:'400px',
          
        },
        {
          original: [certificate3],
          thumbnail: [certificate3],
          originalHeight:'400px',
        },
        {
          original: [certificate4],
          thumbnail: [certificate4],
          originalHeight:'400px',
        },
        {
          original: [certificate5],
          thumbnail: [certificate5],
          originalHeight:'400px',
        },
        {
          original: [certificate6],
          thumbnail: [certificate6],
          originalHeight:'400px',
        },
      ];


    return (
        <Fragment>
            <section className='certificate-section'>
                <div className='row'>
                   <p className="certificate-title">My Certificates</p>
                    <h2>The certificate below are what I achieved</h2>
                    <div className='my-certificate'>
                        <ImageGallery 
                          items={images} 
                          showPlayButton={v1.showPlayButton} 
                          showBullets={v1.showBullets}
                          showIndex={v1.showIndex}
                        />;
                    </div>
                </div>
            </section>
        </Fragment>
    );
};

export default Certificate;