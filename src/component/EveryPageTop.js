import React,{Fragment} from 'react';

const EveryPageTop = (ob) => {
    return (
        <Fragment>
            <section className='everyPageTop-section'>
                <div className="row">
                    <h2>{ob.pageTitle}</h2>
                </div>
            </section>
        </Fragment>
    );
};

export default EveryPageTop;