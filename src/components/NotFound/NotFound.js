import React from 'react';
import img from '../../images/100643812-404-error-page-vector-illustration-banner-with-not-found-message-cartoon-penguin-with-lenses-backgro.jpg'

const NotFound = () => {
    return (
        <div>
            <h2 className="text-danger">404 page Not Found</h2>
            <div>
                <img className="img-fluid" src={img} alt="" />
            </div>
        </div>
    );
};

export default NotFound;