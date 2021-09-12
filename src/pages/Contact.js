import React from "react";
import {Col, Container, Form, Jumbotron, Row} from "react-bootstrap";
import Content from "../components/Content";
import {Button} from "react-bootstrap";
import Axios from "axios"
import { useForm, ValidationError } from '@formspree/react';


const ContactPage = () => {
    const [state, handleSubmit] = useForm("xbjqwroa");

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
                <Form onSubmit={handleSubmit} className={"i-font"}>
                    <Form.Group>
                        <Form.Label htmlFor={"full-name"}>Full Name</Form.Label>
                        <Form.Control id={"full-name"} name={"name"} type={"text"}/>
                    </Form.Group>

                    <Form.Group>
                        <Form.Label htmlFor={"email"}>Your Email</Form.Label>
                        <Form.Control id={"email"} name={"email"} type={"email"}/>
                        <ValidationError
                            prefix="Email"
                            field="email"
                            errors={state.errors}
                        />
                    </Form.Group>

                    <Form.Group>
                        <Form.Label htmlFor={"message"}>Message</Form.Label>
                        <Form.Control id={"message"} name={"message"} as={"textarea"} rows={"6"}/>
                        <ValidationError
                            prefix="Message"
                            field="message"
                            errors={state.errors}
                        />
                    </Form.Group>
                    <p></p>

                    <Button className={"d-inline-block"} variant={"secondary"} type={"submit"} disabled={state.submitting} >
                        Send
                    </Button>


                    {state.succeeded && <p className={"d-inline success-msg"}>Email Sent</p>}
                </Form>
            </Content>
        </div>
    )
}
export default ContactPage
