import React from "react";
import Hero from "../components/Hero";
import Carousel from "../components/Carousel";
import {Container} from "react-bootstrap";


function HomePage(props) {
    return(
        <div>
         <Hero title = {props.title} time = {props.time} subtitle = {props.subTitle} text={props.text} link={props.link}/>
            <Container className={"justify-content-around"}>
                <Carousel  />
            </Container>
        </div >
    );
}
export default HomePage
