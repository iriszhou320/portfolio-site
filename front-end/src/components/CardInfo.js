import React from "react";
import { useSpring, animated } from "react-spring";

function CardInfo(props) {

    const style = useSpring({opacity: 1, from: {opacity: 0}});

    return(

        <animated.div className={"i-card-info"} style={style}>
            <p className={"i-card-title i-font"}>{props.title}</p>
            <p className={"i-card-subtitle i-font"}>{props.subTitle}</p>
            <a href={props.link} target="_blank" rel="noopener noreferrer">View</a>
        </animated.div>
    );
}
export default CardInfo;
