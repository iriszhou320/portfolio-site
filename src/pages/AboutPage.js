import React from "react";
import {Card, Col, Container, Jumbotron, Row} from "react-bootstrap";
import me from '../resources/me.JPG'

function AboutPage() {
    return(
        <Container fluid={true}>
            <Row>
                    <Col md={3} className={"text-center"}>
                        <img src={me} className={"me-image"} alt={"image"} />
                    </Col>
                <Col md={9}>
                    <Card className={"i-font fw-light about-font about-card"} >
                        <Card.Body>
                            <p>
                                I am Iris, a software engineer at Lever, specializing in backend systems and engineering platform building. I'm gaining experience in Typescript, NodeJS, Express and various
                                web development skills
                            </p>
                            <p>
                                Graduated from Western University in May 2020 with a software engineering degree, I started at <a target="_blank" rel="noopener noreferrer" className={"link-secondary"} href={"https://www.carfax.com/"}>CARFAX </a>	&#129418; as a systems developer, with extensive
                                knowledge of Java, SpringBoot, MongoDB, ElasticSearch and AWS.
                            </p>
                            <p>
                                In my spare time, I love going to the gym, music festivals, EDM shows and taking naps &#x1f634;
                            </p>
                        </Card.Body>
                    </Card>

                </Col>
            </Row>
        </Container>
    );
}
export default AboutPage
