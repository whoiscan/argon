import React from "react";
import {
    MDBCarousel,
    MDBCarouselCaption,
    MDBCarouselInner,
    MDBCarouselItem,
    MDBContainer,
    MDBMask,
    MDBView
} from "mdbreact";

const Landing = () => {
    return (
        <MDBContainer>
            <MDBCarousel
                activeItem={1}
                length={3}
                showControls={true}
                showIndicators={true}
                className="z-depth-1"
            >
                <MDBCarouselInner style={{height:"500px"}}>
                    <MDBCarouselItem itemId="1">
                        <MDBView >
                            <img
                                className="d-block w-100"
                                src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzV8fG5ldHdvcmt8ZW58MHx8MHx8&w=1000&q=80"
                                alt="First slide"
                            />
                            <MDBMask overlay="black-light"/>
                        </MDBView>
                        <MDBCarouselCaption>
                            <h1 style={{color:"#FFFFFF"}}>Fanlar bo'yicha kurslar</h1>
                        </MDBCarouselCaption>
                    </MDBCarouselItem>
                    <MDBCarouselItem itemId="2">
                        <MDBView>
                            <img
                                className="d-block w-100"
                                src="https://www.commonsense.org/education/sites/default/files/styles/16_9_medium/public/blog-share/teachers-essential-guide-to-zoom-article.png?itok=4jkfh--N"
                                alt="Second slide"
                            />
                            <MDBMask overlay="black-strong"/>
                        </MDBView>
                        <MDBCarouselCaption>
                            <h1 style={{color:"#FFFFFF"}}>Videodarslar to'plami</h1>
                        </MDBCarouselCaption>
                    </MDBCarouselItem>
                    <MDBCarouselItem itemId="3">
                        <MDBView>
                            <img
                                className="d-block w-100"
                                src="https://assets.tes.com/content-attachments/s3fs-public/styles/news_article_ml_x2/public/media/image/2021-01/iStock-1213470247.jpg?h=140710cd&itok=_ZLANDhx"
                                alt="Third slide"
                            />
                            <MDBMask overlay="black-slight"/>
                        </MDBView>
                        <MDBCarouselCaption>
                            <h1 style={{color:"#FFFFFF"}}>Ustoz qidirish imkoniyati</h1>
                        </MDBCarouselCaption>
                    </MDBCarouselItem>
                </MDBCarouselInner>
            </MDBCarousel>
        </MDBContainer>
    );
}

export default Landing;