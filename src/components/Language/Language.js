import React from 'react';
import './Language.css'
import { Card } from 'react-bootstrap';

const Language = (props) => {
    const {name, img, Price} =props.lg;
    return (
        <div className="lg-contain">
             <Card style={{ width: '30rem' }}>
                <Card.Img variant="top" src={img} />
                <Card.Body>
                    <Card.Title>Name: {name}</Card.Title>
                    <Card.Text>
                       <h5>price: ${Price}</h5>
                    </Card.Text>
                </Card.Body>
            </Card>

        </div>
    );
};

export default Language;