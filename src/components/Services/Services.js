import Program from '../Program/Program';
import './Services.css'
import React, { useEffect, useState } from 'react';
import { Container, Row } from 'react-bootstrap';

const Services = () => {
    const [programming, setProgramming] = useState([])
    useEffect( () => {
        fetch('./FakeData.json')
        .then(res => res.json())
        .then(data => setProgramming(data))
    },[])
    return (
         <Container>
             <h1 className="text-primary">Our Services</h1>
             <Row className="service-container" xs={1} md={2}>
              { 
                programming.map(program => <Program
                 key={program.key}
                 program={program}
                ></Program>)
               }
                </Row>
        </Container>
               
    );
};

export default Services;