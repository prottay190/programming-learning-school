import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import './About.css';
import img from '../../images/download.jpg'

const About = () => {
   
    return (
        <div className="about-container">
        <Container className="row-container p-4 mt-2">
            <Row>
                <Col className="text-white">
                  <h1>Learning programming & Online Courses</h1>
                  <p>Our Course Include Many Type of Programing Language. Enroll In a course as you Interested. We Will learn Coding with Fun ans Tricks</p>
                </Col>
                <Col> <img className="img-fluid" src={img} alt=""  /></Col>
            </Row>
            </Container>

            <Container className="p-4">
                <h2 className="text-primary p-4">Our Courses</h2>
                <Row>
                    <Col>
                       <h2>javaScript</h2>
                       <p>JavaScript is the world's most popular programming language.</p>
                    </Col>
                    <Col>
                       <h2>PhP</h2>
                       <p>PHP is a popular general-purpose scripting language that is especially suited to web development</p>
                    </Col>
                    <Col>
                       <h2>Java</h2>
                       <p>Java is a high-level, class-based, object-oriented programming language that is designed to have as few implementation dependencies as possible.</p>
                    </Col>
                </Row>
                <Row>
                    <Col>
                       <h2>C++</h2>
                       <p>C++ is a popular programming language. C++ is used to create computer programs.</p>
                    </Col>
                    <Col>
                       <h2>C</h2>
                       <p>C is a general-purpose, procedural computer programming language supporting structured programming, lexical variable scope, and recursion, with a static type system.</p>
                    </Col>
                    <Col>
                      <h2>Pythan</h2>
                      <p>Python is an interpreted high-level general-purpose programming language</p>
                    </Col>
                </Row>
                </Container>
        </div>
    );
};

export default About;