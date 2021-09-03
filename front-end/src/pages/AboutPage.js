import React from "react";
import Hero from "../components/Hero";
import Content from "../components/Content";
import {Card, Col, Container, Jumbotron, Row} from "react-bootstrap";
import me from '../resources/me.JPG'

function AboutPage(props) {
    return(
            <Row className="justify-content-center">
                <Col className={"justify-content-md-center"} sm={4}>
                    <img src={me} className={"me-image"}/>
                </Col>
                <Col >
                    {/*<Container fluid={true} className={"i-font"}>*/}
                    {/*</Container>*/}
                    <Card className={"i-font fw-light about-font about-card"} >
                        <Card.Body>
                            <p>
                                I am Iris, a software engineer at Lever, specializing in backend systems and engineering platform building. I'm gaining experience in Typescript, NodeJS, Express and various
                                web development skills
                            </p>
                            <p>
                                Graduated from Western University in May 2020, I started at <a href={"https://www.carfax.com/"}>CARFAX </a>	&#129418; as a systems developer, with extensive
                                knowledge of Java, SpringBoot, MongoDB, ElasticSearch and AWS.
                            </p>
                            <p>
                                In my spare time, I love going to music festivals, EDM shows and taking naps &#x1f634;
                            </p>
                        </Card.Body>
                    </Card>

                </Col>
            </Row>
    );
}
export default AboutPage
