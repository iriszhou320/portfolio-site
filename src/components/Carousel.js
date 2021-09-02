import React from "react";
import chef from '../resources/chef.jpg'
import plutus from '../resources/plutus.jpg'
import quiz from '../resources/quiz.jpg'
import Card from "./Card";
import {Container, Row} from "react-bootstrap";


class Carousel extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            items: [
                {
                    id: 0,
                    title: 'Chef Planète',
                    subTitle: 'Mobile app for healthier choices',
                    imgSrc: chef,
                    link: 'https://youtu.be/8pAnRxqPc3U',
                    selected: false
                },
                {
                    id: 1,
                    title: 'Plutus',
                    subTitle: 'Multi platform financial chatbot',
                    imgSrc: plutus,
                    link: 'https://devpost.com/software/plutus-sbp397',
                    selected: false
                },
                {
                    id: 2,
                    title: 'Quiz Mee',
                    subTitle: '2D simulation trivia game',
                    imgSrc: quiz,
                    link: 'https://devpost.com/software/quiz-mee',
                    selected: false
                },
            ]
        }
    }

    handleCardClick = (id) => {
        let items = [...this.state.items];
        items[id].selected = !items[id].selected;

        items.forEach(item => {
            if(item.id !== id) {
                item.selected = false;
            }
        });

        this.setState({
            items
        });
    }

    makeItems = (items) => {
        return items.map(item => {
            return <Card item={item} click={(e => this.handleCardClick(item.id, e))} key={item.id} />
        })
    }
    render() {
        return(
            <Container fluid={true}>
                <Row className="justify-content-around">
                    {this.makeItems(this.state.items)}
                </Row>
            </Container>
        );
    }
}

export default Carousel
