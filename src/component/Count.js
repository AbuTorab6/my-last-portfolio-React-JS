import React,{Fragment} from 'react';
import '../asset/css/custom.css';

import CountUp from 'react-countup';
import VisibilitySensor from 'react-visibility-sensor';

import {FontAwesomeIcon}  from '@fortawesome/react-fontawesome';
import {faFolderClosed} from '@fortawesome/free-regular-svg-icons'
import {faCloudDownloadAlt} from '@fortawesome/free-solid-svg-icons'

const Count = () => {
    return (
        <Fragment>
            <section className="count-section">
                <div className="row">
                    <h2>Summary</h2>
                    <div className="grid-count">
                    <div className="col">
                         <p><FontAwesomeIcon className="count-icon" icon={faFolderClosed} /></p>
                            <h1>
                                <CountUp start={0} end={30} duration={3}>
                                    {
                                        ({ countUpRef, start }) => (
                                            <VisibilitySensor onChange={start}>
                                                <span ref={countUpRef} />
                                            </VisibilitySensor>
                                        )
                                    }
                                </CountUp>
                            </h1>
                            <p>Total Project</p>
                        </div>


                        <div className="col">
                        <p><FontAwesomeIcon className="count-icon" icon={faCloudDownloadAlt} /></p>
                            <h1>
                                <CountUp start={0} end={2} duration={3}>
                                    {
                                        ({ countUpRef, start }) => (
                                            <VisibilitySensor onChange={start}>
                                                <span ref={countUpRef} />
                                            </VisibilitySensor>
                                        )
                                    }
                                </CountUp>
                            </h1>
                            <p>React js</p>
                        </div>

                        <div className="col">
                        <p><FontAwesomeIcon className="count-icon" icon={faCloudDownloadAlt} /></p>
                            <h1>
                                <CountUp start={0} end={7} duration={2}>
                                    {
                                        ({ countUpRef, start }) => (
                                            <VisibilitySensor onChange={start}>
                                                <span ref={countUpRef} />
                                            </VisibilitySensor>
                                        )
                                    }
                                </CountUp>
                            </h1>
                            <p>Raw CSS</p>
                        </div>

                        <div className="col">
                        <p><FontAwesomeIcon className="count-icon" icon={faCloudDownloadAlt} /></p>
                            <h1>
                                <CountUp start={0} end={2} duration={3}>
                                    {
                                        ({ countUpRef, start }) => (
                                            <VisibilitySensor onChange={start}>
                                                <span ref={countUpRef} />
                                            </VisibilitySensor>
                                        )
                                    }
                                </CountUp>
                            </h1>
                            <p>Express js and MongoDB</p>
                        </div>

                        <div className="col">
                        <p><FontAwesomeIcon className="count-icon" icon={faCloudDownloadAlt} /></p>
                            <h1>
                                <CountUp start={0} end={3} duration={3}>
                                    {
                                        ({ countUpRef, start }) => (
                                            <VisibilitySensor onChange={start}>
                                                <span ref={countUpRef} />
                                            </VisibilitySensor>
                                        )
                                    }
                                </CountUp>
                            </h1>
                            <p>Raw JavaScript</p>
                        </div>

                        <div className="col">
                        <p><FontAwesomeIcon className="count-icon" icon={faCloudDownloadAlt} /></p>
                            <h1>
                                <CountUp start={0} end={1} duration={2}>
                                    {
                                        ({ countUpRef, start }) => (
                                            <VisibilitySensor onChange={start}>
                                                <span ref={countUpRef} />
                                            </VisibilitySensor>
                                        )
                                    }
                                </CountUp>
                            </h1>
                            <p>Bootstrap</p>
                        </div>

                        <div className="col">
                        <p><FontAwesomeIcon className="count-icon" icon={faCloudDownloadAlt} /></p>
                            <h1>
                                <CountUp start={0} end={4} duration={2}>
                                    {
                                        ({ countUpRef, start }) => (
                                            <VisibilitySensor onChange={start}>
                                                <span ref={countUpRef} />
                                            </VisibilitySensor>
                                        )
                                    }
                                </CountUp>
                            </h1>
                            <p>WordPress</p>
                        </div>

                        <div className="col">
                        <p><FontAwesomeIcon className="count-icon" icon={faCloudDownloadAlt} /></p>
                            <h1>
                                <CountUp start={0} end={2} duration={2}>
                                    {
                                        ({ countUpRef, start }) => (
                                            <VisibilitySensor onChange={start}>
                                                <span ref={countUpRef} />
                                            </VisibilitySensor>
                                        )
                                    }
                                </CountUp>
                            </h1>
                            <p>PSD to HTML</p>
                        </div>


                        <div className="col">
                        <p><FontAwesomeIcon className="count-icon" icon={faCloudDownloadAlt} /></p>
                            <h1>
                                <CountUp start={0} end={1} duration={2}>
                                    {
                                        ({ countUpRef, start }) => (
                                            <VisibilitySensor onChange={start}>
                                                <span ref={countUpRef} />
                                            </VisibilitySensor>
                                        )
                                    }
                                </CountUp>
                            </h1>
                            <p>Raw Java</p>
                        </div>

                        <div className="col">
                        <p><FontAwesomeIcon className="count-icon" icon={faCloudDownloadAlt} /></p>
                            <h1>
                                <CountUp start={0} end={1} duration={1}>
                                    {
                                        ({ countUpRef, start }) => (
                                            <VisibilitySensor onChange={start}>
                                                <span ref={countUpRef} />
                                            </VisibilitySensor>
                                        )
                                    }
                                </CountUp>
                            </h1>
                            <p>PHP and Mysql</p>
                        </div>
                    </div>
                </div>
            </section>
        </Fragment>
    );
};

export default Count;