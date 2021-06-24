import React, {Component} from "react";
import UserHeader from "../../components/Headers/UserHeader";
import {
    Card,
    CardBody, CardFooter,
    CardHeader,
    Col,
    Container,
    FormGroup,
    Input,
    Pagination,
    PaginationItem, PaginationLink,
    Row
} from "reactstrap";

class Youtube extends Component {
    render() {
        return (
            <>
                <UserHeader/>
                <Container className="mt--7" fluid>
                    {/* Table */}
                    <Row>
                        <div className="col">
                            <Card className="shadow">
                                <CardHeader className="bg-transparent">
                                    <h3 className="mb-0">Darsliklar</h3>
                                </CardHeader>
                                <CardBody>
                                    <h1 className="text-center"> Video darslar ro'yxati</h1>
                                </CardBody>
                            </Card>
                        </div>
                    </Row>
                </Container>
                <CardHeader className="bg-transparent">
                        <FormGroup>
                            <h3>
                                1. Video dars
                            </h3>
                            <Input
                                className="form-control-alternative"
                                placeholder="A few words about you ..."
                                rows="5"
                                defaultValue="Algebra 1 dagi darslar chiziqli tenglamalar, tengsizliklar va funksiyalarni oʻrganishingiz uchun mustahkam poydevor yaratdi. Algebra 2 da biz ushbu poydevorga tayanamiz va algebra 1 dan olgan bilimimizni shunchaki kengaytirmasdan, asta-sekin koinotning KATTA jumboqlariga javob topishga urinib koʻramiz. Biz yana bir bor tenglamalar sistemasi, tengsizliklar va funksiyalarga murojaat qilamiz... Lekin bundan tashqari koʻrsatkichli va logarifmik funksiyalarni, logarifmlarni, kompleks va murakkab sonlarni, konus kesimlari va matritsalarni ham koʻrib chiqamiz. Bunday qiyin va tushunarsiz soʻzlar sizni qoʻrqitishiga aslo yoʻl qoʻymang. Bu sayohatda biz siz bilan birgamiz!"
                                type="textarea"
                            />
                        </FormGroup>

                        <div style={{
                            left: "15%",
                            top: "0", height: "100%",
                            width: "100%", overflow: "hidden", position: "relative"
                        }}>
                            <iframe
                                width="800"
                                height="250"
                                src={`https://www.youtube.com/embed/g8ATEzSbSbk`}
                                frameBorder="10"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen
                                title="Embedded youtube"
                            />
                        </div>
                </CardHeader>
                <CardHeader className="bg-transparent">
                    <Col>
                        <FormGroup>
                            <h3>
                                2. Video dars
                            </h3>
                            <Input
                                className="form-control-alternative"
                                placeholder="A few words about you ..."
                                rows="5"
                                defaultValue="Sizda hech bir ehtimollikni hisobga olmaydigan yoki undan foydalanmaydigan kun yoʻq ekanligiga bizning ishonchimiz komil. Bugun ob-havo maʼlumotlarini tekshirib koʻrdingizmi? Xaridingizni avtomobildan tushmasdan qilishga yoki ichkariga kirishga qaror qildingizmi? Biz doimo gipotezalar yaratamiz, bashorat qilamiz, taxminlarimizni sinab koʻramiz va ularni tahlil qilamiz. Bizning hayotimiz ehtimolliklarga toʻla! Statistika esa ehtimolliklar bilan bogʻliq, chunki ehtimol natijalarni aniqlash uchun foydalanadigan maʼlumotning katta qismi statistika haqidagi tushunchalarimizdan kelib chiqadi. "
                                type="textarea"
                            />
                        </FormGroup>
                        <div style={{
                            left: "15%",
                            top: "0", height: "100%",
                            width: "100%", overflow: "hidden", position: "relative"
                        }}>
                            <iframe
                                width="800"
                                height="250"
                                src={`https://www.youtube.com/embed/sf8bU37aiEo`}
                                frameBorder="10"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen
                                title="Embedded youtube"
                            />
                        </div>
                    </Col>
                </CardHeader>
                <CardHeader className="bg-transparent">
                    <Col>
                        <FormGroup>
                            <h3>
                                3. Video dars
                            </h3>
                            <Input
                                className="form-control-alternative"
                                placeholder="A few words about you ..."
                                rows="5"
                                defaultValue="Algoritmlar (informatika fanidagi odatiy muammolarni biz qanday hal qilishimiz va yechimlarimizning samaradorligini qanday oʻlchashimiz haqida), kriptografiya (biz maxfiy axborotni qanday himoya qilishimiz toʻgʻrisida) va axborot nazariyasi (biz axborotni qanday shifrlashimiz va uning hajmini qanday qisqartirishimiz haqida) dunyosiga sayohatimizni boshlaymiz. "
                                type="textarea"
                            />
                        </FormGroup>
                        <div style={{
                            left: "15%",
                            top: "0", height: "100%",
                            width: "100%", overflow: "hidden", position: "relative"
                        }}>
                            <iframe
                                width="800"
                                height="250"
                                src={`https://www.youtube.com/embed/d_BUk3vEa8o`}
                                frameBorder="10"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen
                                title="Embedded youtube"
                            />
                        </div>
                    </Col>
                </CardHeader>
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

export default Youtube;