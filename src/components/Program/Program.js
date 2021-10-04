import React from 'react';
import { Card,  } from 'react-bootstrap';
import './Program.css';

const Program = (props) => {
    console.log(props)
    const {name, img, Price} =props.program;
    return (
        <div className='program-style'>
             <Card style={{ width: '30rem' }}>
                <Card.Img variant="top" src={img} />
                <Card.Body>
                    <Card.Title>Name: {name}</Card.Title>
                    <Card.Text>
                       <h5>price: ${Price}</h5>
                       <button className="bg-dark text-white">Enroll Now</button>
                    </Card.Text>
                </Card.Body>
            </Card>

        </div>
    
    )
};

export default Program;