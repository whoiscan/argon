/*!

=========================================================
* Argon Dashboard React - v1.2.0
=========================================================

* Product Page: https://www.creative-tim.com/product/argon-dashboard-react
* Copyright 2021 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/argon-dashboard-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React, {Component} from "react";
import qs from 'querystring';
import {
    Button,
    Card,
    CardBody,
    Col,
    Form,
    FormGroup,
    Input,
    InputGroup,
    InputGroupAddon,
    InputGroupText,
    Row,
} from "reactstrap";
import firebase from '../../firebaseConfig'

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: ''
        }
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleChange(event) {
        this.setState({[event.target.name]: event.target.value});
    }

    handleSubmit(event) {
        event.preventDefault();
        console.log(this.state.username);
        console.log(this.state.password);

        // firebase
        //     .firestore()
        //     .collection('Login')
        //     .add({
        //         username: this.state.username,
        //         password: this.state.password
        //     }).then(()=>{
        //     alert('Ваши данные отправлены')
        //
        // })
        //     .catch((err)=>{
        //         console.log(err);
        //     });
        // const options = {
        //     method: 'POST',
        //     headers: {'Content-Type': 'application/x-www-form-urlencoded'},
        //     body: qs.stringify({username: this.state.username, password: this.state.password})
        // };

    };

    render() {
        return (
            <>
                <Col lg="5" md="7">
                    <Card className="bg-secondary shadow border-0">
                        <CardBody className="px-lg-5 py-lg-5">
                            <div className="text-center text-muted mb-4">
                                <h3>Измените пароль</h3>
                            </div>
                            <Form role="form" onSubmit={this.handleSubmit}>
                                <FormGroup className="mb-3">
                                    <InputGroup className="input-group-alternative">
                                        <InputGroupAddon addonType="prepend">
                                            <InputGroupText>
                                                <i className="ni ni-lock-circle-open"/>
                                            </InputGroupText>
                                        </InputGroupAddon>
                                        <Input
                                            name="username"
                                            placeholder="Введите старый пароль"
                                            value={this.state.username}
                                            type="text"
                                            onChange={this.handleChange}
                                        />
                                    </InputGroup>
                                </FormGroup>
                                <FormGroup>
                                    <InputGroup className="input-group-alternative">
                                        <InputGroupAddon addonType="prepend">
                                            <InputGroupText>
                                                <i className="ni ni-lock-circle-open"/>
                                            </InputGroupText>
                                        </InputGroupAddon>
                                        <Input
                                            name="password"
                                            placeholder="Введите новый пароль"
                                            type="password"
                                            value={this.state.password}
                                            onChange={this.handleChange}
                                        />
                                    </InputGroup>
                                </FormGroup>
                                <div className="text-center">
                                    <Button className="my-4" color="primary" type="submit">
                                        Вход
                                    </Button>
                                </div>
                            </Form>
                        </CardBody>
                    </Card>
                    <Row className="mt-3">
                        <Col xs="6">
                            <a
                                className="text-light"
                                href="#pablo"
                                onClick={(e) => e.preventDefault()}
                            >
                                <small>Забыли пароль?</small>
                            </a>
                        </Col>
                        <Col className="text-right" xs="6">
                            <a
                                className="text-light"
                                href="#pablo"
                                onClick={(e) => e.preventDefault()}
                            >
                                <small>Регистрация</small>
                            </a>
                        </Col>
                    </Row>
                </Col>
            </>
        );
    }
}

export default Login;