import React from "react";
import {Col, Container, Form, Jumbotron, Row} from "react-bootstrap";
import Content from "../components/Content";
import {Button} from "react-bootstrap";

class ContactPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name:'',
            email:'',
            message:'',
            disabled: false,
            emailSent: null,
        }
    }

    handleChange = (event) => {
        console.log(event)
        const target = event.target
        const value = target.type === 'checkbox' ? target.checked : target.value
        const name = target.name

        this.setState({
            [name]: value
        })
    }

    handleSubmit = (event) => {
        event.preventDefault()

        this.setState({
            disabled: true
        })

    }
    render() {
        return(
            <div>
                <Jumbotron className="bg-transparent jumbotron-fluid p-0 py-5">
                    <Container fluid={true}>
                        <Row className={"justify-content-center py-lg-5"}>
                            <Col md={8} sm={12}>
                                <h1 className={"i-font fw-bold"}>Let's Talk</h1>
                            </Col>
                        </Row>
                    </Container>
                </Jumbotron>

                <Content>
                    <Form>
                        <Form.Group>
                            <Form.Label htmlFor={"full-name"}>Full Name</Form.Label>
                            <Form.Control id={"full-name"} name={"name"} type={"text"} value={this.state.name} onChange={this.handleChange}/>
                        </Form.Group>

                        <Form.Group>
                            <Form.Label htmlFor={"email"}>Your Email</Form.Label>
                            <Form.Control id={"email"} name={"email"} type={"email"} value={this.state.email} onChange={this.handleChange}/>
                        </Form.Group>

                        <Form.Group>
                            <Form.Label htmlFor={"message"}>Message</Form.Label>
                            <Form.Control id={"message"} name={"message"} as={"textarea"} rows={"6"} value={this.state.message} onChange={this.handleChange}/>
                        </Form.Group>

                        <Button className={"d-inline-block"} color={"Grey"} variant={"primary"} type={"submit"} disabled={this.state.disabled}>
                            Send
                        </Button>


                        {this.state.emailSent === true && <p className={"d-inline success-msg"}>Email Sent</p>}
                        {this.state.emailSent === false && <p className={"d-inline err-msg"}>Email Failed To Sent</p>}
                    </Form>
                </Content>
            </div>
        )
    }
}
export default ContactPage
