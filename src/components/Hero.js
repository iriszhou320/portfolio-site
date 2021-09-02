import React from "react";
import {Col, Container, Jumbotron, Row} from "react-bootstrap";

function Hero(props) {
    return(
        <Jumbotron className="bg-transparent jumbotron-fluid p-0">
            <Container fluid={true}>
                <Row className={"justify-content-center py-5"}>
                    <Col md={8} sm={12}>
                        { props.title && props.time && <h1 className={"display-3 fw-bolder i-font"}>{props.title}{props.time}</h1> }
                        { props.subtitle && <h3 className={"display-6 fw-light i-font"}>{props.subtitle} <a href={props.link} target="_blank" rel="noopener noreferrer">Lever</a> &#9749;</h3> }
                        { props.text && <h3 className={"display-7 lead fw-light i-font"}>{props.text} </h3> }
                    </Col>
                </Row>
            </Container>
        </Jumbotron>
    )
}

export default Hero;
