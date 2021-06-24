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
import {BiBarChart, BiLocationPlus, BiPhone, BiRename, BiSidebar, BiTimeFive} from "react-icons/bi";
// reactstrap components
import {
    Badge,
    Card,
    CardFooter,
    CardHeader,
    Container,
    Media,
    Pagination,
    PaginationItem,
    PaginationLink,
    Progress,
    Row,
    Table,
} from "reactstrap";
// core components
import Header from "components/Headers/Header.js";
import axios from "axios";

const TUTORS_LIST = 'http://localhost:8081/api/v1/auth/tutors/ranking';

class Tables extends Component {
    constructor(props) {
        super(props)
        this.state = {
            tutors: []
        }
        this.routeToProfile = this.routeToProfile.bind(this)
    }

    getString(array) {
        for (let i = 0; i < array.length; i++) {
            if (array[i] >= 4.7)
                return "bg-success"
            else if (array[i] < 4.7 && array[i] >= 4.5)
                return "bg-info"
            else
                return "bg-danger"
        }
    }

    routeToProfile(name) {
        this.props.history.push({
            pathname: '/api/user-profile',
            search: '' + name
        });
    }

    componentDidMount() {
        axios.get(TUTORS_LIST).then((response) => {
            console.log(response)
            this.setState({tutors: response.data})
        });
    }

    render() {
        return (
            <>
                <Header/>
                {/* Page content */}
                <Container className="mt--7" fluid>
                    {/* Table */}
                    <Row>
                        <div className="col">
                            <Card className="shadow">
                                <CardHeader className="border-0">
                                    <h3 className="mb-0">O'qituvchilar ro'yxati</h3>
                                </CardHeader>
                                <Table className="align-items-center table-flush" responsive>
                                    <thead className="thead-light">
                                    <tr>
                                        <th scope="col">Ismi<BiRename/></th>
                                        <th scope="col">Fan <BiSidebar/></th>
                                        <th scope="col">Manzil <BiLocationPlus/></th>
                                        <th scope="col">Vaqti <BiTimeFive/></th>
                                        <th scope="col">Reyting <BiBarChart/></th>
                                        <th scope="col">Telefon<BiPhone/></th>
                                    </tr>
                                    </thead>
                                    <tbody>
                                    {
                                        this.state.tutors.map(
                                            user =>
                                                <tr>
                                                    <th scope="row">
                                                        <Media className="align-items-center">
                                                            <a
                                                                href="#user-profile"
                                                                className="avatar rounded-circle mr-2"
                                                                onClick={() => this.routeToProfile(user.id)}>
                                                                <img alt="..."
                                                                     src={user.photo}/>
                                                            </a>
                                                            <Media>
                                                                <span className="mb-0 text-sm">
                                                                    {user.name}
                                                                </span>
                                                            </Media>
                                                        </Media>
                                                    </th>
                                                    <td>{user.subject}</td>
                                                    <td>
                                                        <Badge color="" className="badge-dot mr-4">
                                                            <i className="bg-warning"/>
                                                            {user.address}
                                                        </Badge>
                                                    </td>
                                                    <td>
                                                        {user.working_hours}
                                                    </td>
                                                    <td>
                                                        <div className="d-flex align-items-center">
                                                            <span className="mr-2">{user.ranking}</span>
                                                            <div>
                                                                <Progress
                                                                    max="50"
                                                                    value="35"
                                                                    barClassName={this.getString}
                                                                />
                                                            </div>
                                                        </div>
                                                    </td>
                                                    <td className="text-right">
                                                        <Media>
                                                            <h5>
                                                                {user.phone_number}
                                                            </h5>

                                                        </Media>
                                                    </td>
                                                </tr>)}
                                    </tbody>
                                </Table>
                                <CardFooter className="py-4">
                                    <nav aria-label="...">
                                        <Pagination
                                            className="pagination justify-content-end mb-0"
                                            listClassName="justify-content-end mb-0"
                                        >
                                            <PaginationItem className="disabled">
                                                <PaginationLink
                                                    href="#pablo"
                                                    onClick={(e) => e.preventDefault()}
                                                    tabIndex="-1"
                                                >
                                                    <i className="fas fa-angle-left"/>
                                                    <span className="sr-only">Previous</span>
                                                </PaginationLink>
                                            </PaginationItem>
                                            <PaginationItem className="active">
                                                <PaginationLink
                                                    href="#pablo"
                                                    onClick={(e) => e.preventDefault()}
                                                >
                                                    1
                                                </PaginationLink>
                                            </PaginationItem>
                                            <PaginationItem>
                                                <PaginationLink
                                                    href="#pablo"
                                                    onClick={(e) => e.preventDefault()}
                                                >
                                                    2 <span className="sr-only">(current)</span>
                                                </PaginationLink>
                                            </PaginationItem>
                                            <PaginationItem>
                                                <PaginationLink
                                                    href="#pablo"
                                                    onClick={(e) => e.preventDefault()}
                                                >
                                                    3
                                                </PaginationLink>
                                            </PaginationItem>
                                            <PaginationItem>
                                                <PaginationLink
                                                    href="#pablo"
                                                    onClick={(e) => e.preventDefault()}
                                                >
                                                    <i className="fas fa-angle-right"/>
                                                    <span className="sr-only">Next</span>
                                                </PaginationLink>
                                            </PaginationItem>
                                        </Pagination>
                                    </nav>
                                </CardFooter>
                            </Card>
                        </div>
                    </Row>
                    {/* Dark table */}
                </Container>
            </>
        );
    }
}

export default Tables;