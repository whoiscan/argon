import React, {Component} from "react";
import {Card, CardDeck,Button} from "react-bootstrap";
import Header from "../../components/Headers/Header";
import {CardFooter, Pagination, PaginationItem, PaginationLink} from "reactstrap";

class Cards extends Component {
    render() {
        return (
            <>
                <Header/>
                <CardDeck>
                    <Card>
                        <Card.Img variant="top" src="https://image.freepik.com/free-vector/maths-chalkboard_23-2148178220.jpg"/>
                        <Card.Body>
                            <Card.Title>Matematika</Card.Title>
                            <h3>
                                Algebra, Geometriya, Trigonometriya, Matematik analiz asoslari, Chiziqli algebra, Arifmetika bo'yicha kurslar.
                            </h3>
                        </Card.Body>
                        <Card.Footer>
                            <small className="text-muted">13k marta ko'rilgan</small>
                        </Card.Footer>
                        <Button>Batafsil</Button>
                    </Card>
                    <Card>
                        <Card.Img variant="top" src="https://www.cmuse.org/wp-content/uploads/2020/05/learn-chemistry-lessons-online.jpg"/>
                        <Card.Body>
                            <Card.Title>Kimyo</Card.Title>
                            <h3>
                                Atomlar, Kimyoviy reaksiyalar, Kislotalar, Eruvchanlik muvozanati, Yadro kimyosi bo'yicha kurslar.
                            </h3>
                        </Card.Body>
                        <Card.Footer>
                            <small className="text-muted">4k marta ko'rilgan</small>
                        </Card.Footer>
                        <Button>Batafsil</Button>
                    </Card>
                    <Card>
                        <Card.Img variant="top" src="https://www.iceducation.ca/wp-content/uploads/2014/02/1073-x-644_-Physics.png"/>
                        <Card.Body>
                            <Card.Title>Fizika</Card.Title>
                            <h3>
                                Kinematika, Dinamika, Termodinamika, Statika, Zaryadlar, Kuch va impuls momentlari bo'yicha kurslar
                            </h3>
                        </Card.Body>
                        <Card.Footer>
                            <small className="text-muted">8.5k marta ko'rilgan</small>
                        </Card.Footer>
                        <Button>Batafsil</Button>
                    </Card>
                </CardDeck>
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
            </>);
    }
}

export default Cards;