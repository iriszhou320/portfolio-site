import './App.css';
import React from "react";
import {BrowserRouter as Router, Link, Route} from "react-router-dom";
import {Container, Nav, Navbar} from "react-bootstrap";
import Footer from './components/Footer'
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/About";
import ContactPage from "./pages/Contact";


class App extends React.Component {

  constructor(props) {
    super(props);

    let today = new Date();
    let hourNow = today.getHours();
    let greeting;

    if(hourNow > 18){
      greeting = 'Evening,';
    }else if(hourNow > 12){
      greeting = 'Afternoon,';
    }else if(hourNow > 5){
      greeting = 'Morning,';
    }

    this.state = {
      title: 'Iris Zhou',
      headerLinks: [
        { title: 'Home', path: '/'},
        { title: 'About', path: '/about'},
        { title: 'Contact', path: '/contact'},
      ],
      home: {
        title: 'Good ',
        time:  greeting,
        subtitle: 'I\'m a software engineer @ ',
        text: "",
        link: 'https://www.lever.co/'
      },
      about: {
        title: 'About Me'
      },
      contact: {
        title: 'Let\'s Connect'
      }
    }
  }
  render() {

    return (
        <Router>
          <Container className="p-4" fluid={true}>
            <Navbar className="border-bottom" bg="transparent" expand="lg">
              <Navbar.Brand className={"i-font"}>
                {/*<img src={}/>*/}
                Iris Zhou
              </Navbar.Brand>

              <Navbar.Toggle className="border-0" aria-controls="navbar-toggle"/>
              <Navbar.Collapse id={"navbar-toggle"}>
                <Nav className="ms-auto">
                  <Link className="nav-link i-font" to="/">Home</Link>
                  <Link className="nav-link i-font" to="/about">About</Link>
                  <Link className="nav-link i-font" to="/contact">Contact</Link>
                </Nav>
              </Navbar.Collapse>
            </Navbar>

            <Route path="/" exact render={() => <HomePage title={this.state.home.title} time = {this.state.home.time} subTitle={this.state.home.subtitle} text={this.state.home.text} link={this.state.home.link}/>} />
            <Route path="/about" render={() => <AboutPage title={this.state.about.title}/>} />
            <Route path="/contact" render={() => <ContactPage title={this.state.contact.title} />} />

            <Footer />

          </Container>
        </Router>
    );
  }
}

export default App;
