import React from "react";
import CardInfo from "./CardInfo";
import {Col, Container, Row} from "react-bootstrap";

function Card(props) {

    return (
        // <Container fluid={true} className={"justify-content-center"}>
            <Col className="d-inline-block i-card" onClick={(e) => props.click(props.item)}>
                <img className="i-card-image" src={props.item.imgSrc} alt={props.item.imgSrc}/>
                {props.item.selected &&
                <CardInfo title={props.item.title} subTitle={props.item.subTitle} link={props.item.link}/>}
            </Col>
        // </Container>

    );

}
export default Card;
