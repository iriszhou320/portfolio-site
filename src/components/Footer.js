import React from "react";
import {Col, Container, Row} from "react-bootstrap";

function Footer() {

    return (
        <footer className={"mt-5"}>
            <Container fluid={true}>
                <Row className={"border-top justify-content-between"}>
                    <Col className={"p-0"} md={3} sm={12}>
                        © 2021 Iris Zhou &#128121;
                    </Col>
                </Row>
            </Container>
        </footer>
    )
}

export default Footer
