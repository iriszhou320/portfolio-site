import React from "react";
import chef from '../resources/chef.jpg'
import plutus from '../resources/plutus.jpg'
import quiz from '../resources/quiz.jpg'
import npm from '../resources/npm.jpg'
import milo from '../resources/milo.jpeg'
import spotify from '../resources/spotify.jpeg'
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
                {
                    id: 3,
                    title: 'NPM Notifier',
                    subTitle: 'Slackbot to notify publish in subscribed NPM repo',
                    imgSrc: npm,
                    link: 'https://github.com/iriszhou320/npm-slack-notifier',
                    selected: false
                },
                {
                    id: 4,
                    title: 'Milo\'s Social',
                    subTitle: 'The coolest cat you ever see',
                    imgSrc: milo,
                    link: 'https://www.instagram.com/milogramm_/',
                    selected: false
                },
                {
                    id: 5,
                    title: 'Bops',
                    subTitle: 'Curated Spotify playlist for the homes',
                    imgSrc: spotify,
                    link: 'https://open.spotify.com/playlist/4D0oPi5u09IXBbynVk9Ip4?si=cfb2e740fad542b9',
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
