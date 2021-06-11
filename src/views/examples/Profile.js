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
// reactstrap components
import {Button, Card, CardBody, CardHeader, Col, Container, Form, FormGroup, Input, Row,} from "reactstrap";
// core components
import UserHeader from "components/Headers/UserHeader.js";
import axios from "axios";
import qs from "querystring";

const TUTOR_BY_ID = 'http://localhost:8081/api/v1/auth/tutor/by/id';
const config = {
    headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
    }
}


class Profile extends Component {
    constructor(props) {
        super(props);
        this.state = {
            tutor: ''
        }
    }

    componentDidMount() {
        console.log(this.props.location.search.match(/\d+/)[0])
        axios.post(TUTOR_BY_ID, qs.stringify({id: this.props.location.search.match(/\d+/)[0]}),
            config).then((response) => {
            console.log(response)
            this.setState({tutor: response.data})
        });
    }

    render() {
        return (
            <>
                <UserHeader/>
                {/* Page content */}
                <Container className="mt--7" fluid>
                    <Row>
                        <Col className="order-xl-2 mb-5 mb-xl-0" xl="4">
                            <Card className="card-profile shadow">
                                <Row className="justify-content-center">
                                    <Col className="order-lg-2" lg="3">
                                        <div className="card-profile-image">
                                            <a href="#pablo" onClick={(e) => e.preventDefault()}>
                                                <img
                                                    alt="..."
                                                    className="rounded-circle"
                                                    src={this.state.tutor.photo}
                                                />
                                            </a>
                                        </div>
                                    </Col>
                                </Row>
                                <CardHeader className="text-center border-0 pt-8 pt-md-4 pb-0 pb-md-4">
                                    <div className="d-flex justify-content-between">
                                        <Button
                                            className="float-right"
                                            color="default"
                                            href="#pablo"
                                            onClick={(e) => e.preventDefault()}
                                            size="sm"
                                        >
                                            {this.state.tutor.ranking}
                                        </Button>
                                    </div>
                                </CardHeader>
                                <CardBody className="pt-0 pt-md-4">
                                    <Row>
                                        <div className="col">
                                            <div className="card-profile-stats d-flex justify-content-center mt-md-5">
                                                <div>
                                                    <span className="heading">52</span>
                                                    <span className="description">Talabalar</span>
                                                </div>
                                                <div>
                                                    <span className="heading">10</span>
                                                    <span className="description">Guruhlar</span>
                                                </div>
                                            </div>
                                        </div>
                                    </Row>
                                    <div className="text-center">
                                        <h3>
                                            {this.state.tutor.name}
                                            <span className="font-weight-light"></span>
                                        </h3>
                                        <div className="h5 font-weight-300">
                                            <i className="ni location_pin mr-2"/>
                                            {this.state.tutor.address}
                                        </div>
                                        <div className="h5 mt-4">
                                            <i className="ni business_briefcase-24 mr-2"/>
                                            Dars vaqti: {this.state.tutor.working_hours}
                                        </div>
                                        <div className="h5 mt-4">
                                            <i className="ni education_hat mr-2"/>
                                            Fan: {this.state.tutor.subject}
                                        </div>
                                        <hr className="my-4"/>
                                    </div>
                                </CardBody>
                            </Card>
                        </Col>
                        <Col className="order-xl-1" xl="8">
                            <Card className="bg-secondary shadow">
                                <CardHeader className="bg-white border-0">
                                    <Row className="align-items-center">
                                        <Col xs="8">
                                            <h3 className="mb-0">Profil</h3>
                                        </Col>
                                        <Col className="text-right" xs="4">
                                            <Button
                                                color="primary"
                                                href="#pablo"
                                                onClick={(e) => e.preventDefault()}
                                                size="sm"
                                            >
                                                {this.state.tutor.ranking}
                                            </Button>
                                        </Col>
                                    </Row>
                                </CardHeader>
                                <CardBody>
                                    <Form>
                                        <h6 className="heading-small text-muted mb-4">
                                            Men haqimda
                                        </h6>
                                        <div className="pl-lg-4">
                                            <Row>
                                                <Col>
                                                    <FormGroup>
                                                        <label
                                                            className="form-control-label"
                                                            htmlFor="input-username"
                                                        >
                                                            Ma'lumot
                                                        </label>
                                                        <Input
                                                            className="form-control-alternative"
                                                            placeholder="A few words about you ..."
                                                            rows="10"
                                                            defaultValue={this.state.tutor.aboutMe}
                                                            type="textarea"
                                                        />
                                                    </FormGroup>
                                                </Col>
                                            </Row>
                                        </div>
                                        <hr className="my-4"/>
                                        {/* Address */}
                                        <h6 className="heading-small text-muted mb-4">
                                            Ta'lim
                                        </h6>
                                        <div className="pl-lg-4">
                                            <Row>
                                                <Col md="12">
                                                    <FormGroup>
                                                        <label
                                                            className="form-control-label"
                                                            htmlFor="input-address"
                                                        >
                                                            Oliygoh
                                                        </label>
                                                        <Input
                                                            className="form-control-alternative"
                                                            defaultValue={this.state.tutor.qualifications}
                                                            placeholder="Home Address"
                                                            type="text"
                                                        />
                                                    </FormGroup>
                                                </Col>
                                            </Row>
                                        </div>

                                        <h6 className="heading-small text-muted mb-4">
                                            Bog'lanish
                                        </h6>
                                        <div className="pl-lg-4">
                                            <Row>
                                                <Col lg="4">
                                                    <FormGroup>
                                                        <label
                                                            className="form-control-label"
                                                            htmlFor="input-city"
                                                        >
                                                            Telefon
                                                        </label>
                                                        <Input
                                                            className="form-control-alternative"
                                                            defaultValue={this.state.tutor.phone_number}
                                                            id="input-city"
                                                            placeholder="City"
                                                            type="text"
                                                        />
                                                    </FormGroup>
                                                </Col>
                                            </Row>
                                        </div>
                                        <hr className="my-4"/>
                                    </Form>
                                </CardBody>
                            </Card>
                        </Col>
                    </Row>
                </Container>
            </>
        );
    };
}

export default Profile;