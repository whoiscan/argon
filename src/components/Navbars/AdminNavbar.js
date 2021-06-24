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
import {Link} from "react-router-dom";
// reactstrap components
import {
    Button,
    Container,
    DropdownItem,
    DropdownMenu,
    DropdownToggle,
    Form,
    Input,
    Label,
    Nav,
    Navbar,
    UncontrolledDropdown
} from "reactstrap";
import qs from "querystring";

class AdminNavbar extends Component {
    constructor(props) {
        super(props);
        this.state = {value: ''};

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.routeToProfile = this.routeToProfile.bind(this)
    }


    handleChange(event) {
        this.setState({value: event.target.value});
    }

    routeToProfile(name) {
        this.props.history.push({
            pathname: '/api/user-profile',
            search: '' + name
        });
    }

    handleSubmit(event) {
        event.preventDefault();
        console.log(this.state.value);
        const options = {
            method: 'POST',
            headers: {'Content-Type': 'application/x-www-form-urlencoded'},
            body: qs.stringify({subject: this.state.value})
        };

        fetch('http://localhost:8081/api/v1/auth/find/by/subject', options).then((response) => {
            if (response.ok) {
                response.json().then(json => {
                    console.log(json);
                    if (json.id !== null)
                        this.props.history.push('/api/user-profile?' + json.id + '')
                    else
                        alert("So'rovingiz bo'yicha ma'lumot topilmadi.")
                });
            }

        });
    }

    render() {
        return (
            <>
                <Navbar className="navbar-top navbar-dark" expand="md" id="navbar-main">
                    <Container fluid>
                        <Link
                            className="h4 mb-0 text-white text-uppercase d-none d-lg-inline-block"
                            to="/"
                        >
                        </Link>
                        <Form onSubmit={this.handleSubmit}>
                            <div style={{position: "absolute", right: "200px"}}>
                                <Label>
                                    <Input type="text" value={this.state.value} placeholder="Fan nomini kiriting.."
                                           onChange={this.handleChange}/>
                                </Label>

                                <Button color="primary" type="submit" value="Qidirish">Qidirish</Button>
                            </div>
                        </Form>
                        <Nav className="align-items-center d-none d-md-flex" navbar>
                            <UncontrolledDropdown nav>
                                <DropdownToggle className="pr-0" nav>
                                    {/*<Media className="align-items-center">*/}
                                    {/*  <span className="avatar avatar-sm rounded-circle">*/}
                                    {/*    <img*/}
                                    {/*      alt="..."*/}
                                    {/*      src={*/}
                                    {/*        require("../../assets/img/theme/team-4-800x800.jpg")*/}
                                    {/*          .default*/}
                                    {/*      }*/}
                                    {/*    />*/}
                                    {/*  </span>*/}
                                    {/*  <Media className="ml-2 d-none d-lg-block">*/}
                                    {/*    <span className="mb-0 text-sm font-weight-bold">*/}
                                    {/*      Jessica Jones*/}
                                    {/*    </span>*/}
                                    {/*  </Media>*/}
                                    {/*</Media>*/}
                                </DropdownToggle>
                                <DropdownMenu className="dropdown-menu-arrow" right>
                                    <DropdownItem className="noti-title" header tag="div">
                                        <h6 className="text-overflow m-0">Welcome!</h6>
                                    </DropdownItem>
                                    <DropdownItem to="/admin/user-profile" tag={Link}>
                                        <i className="ni ni-single-02"/>
                                        <span>My profile</span>
                                    </DropdownItem>
                                    <DropdownItem to="/admin/user-profile" tag={Link}>
                                        <i className="ni ni-settings-gear-65"/>
                                        <span>Settings</span>
                                    </DropdownItem>
                                    <DropdownItem to="/admin/user-profile" tag={Link}>
                                        <i className="ni ni-calendar-grid-58"/>
                                        <span>Activity</span>
                                    </DropdownItem>
                                    <DropdownItem to="/admin/user-profile" tag={Link}>
                                        <i className="ni ni-support-16"/>
                                        <span>Support</span>
                                    </DropdownItem>
                                    <DropdownItem divider/>
                                    <DropdownItem href="#pablo" onClick={(e) => e.preventDefault()}>
                                        <i className="ni ni-user-run"/>
                                        <span>Logout</span>
                                    </DropdownItem>
                                </DropdownMenu>
                            </UncontrolledDropdown>
                        </Nav>
                    </Container>
                </Navbar>
            </>
        )
            ;
    };
}

export default AdminNavbar;
