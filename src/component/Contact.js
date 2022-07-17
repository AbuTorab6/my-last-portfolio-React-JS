import React,{Fragment} from 'react';

const Contact = () => {
    return (
        <Fragment>
            <section className='contact-section'>
                <marquee>**This form is not dynamic yet. I am working on it !**</marquee>
                <div className='row'>
                    <div className='grid-contact'>
                        <div className='col'>
                            <form>
                                    <div className="contact-name contact-common">
                                        <input type="text" id="name" name="name" placeholder='Full Name*' required />
                                    </div>
                                    <div className="contact-email contact-common">
                                        <input type="email" id="email" name="email" placeholder='Email*' required/>
                                    </div>
                                    <div className="contact-msg contact-common">
                                        <textarea id="msg" name="msg" placeholder='Message*' required/>
                                    </div>
                                    <div className="contact-btn">
                                        <input type="submit" value="send" />
                                    </div>
                            </form>
                        </div>
                        <div className='col'>
                            <p className="contact-title">Get in touch with a human</p>
                            <h2>Let's have a conversation, please! Just complete the form.</h2>
                        </div>
                    </div>
                </div>
            </section>
        </Fragment>
    );
};

export default Contact;