import React from 'react';
import './Carousel.scss';
import { Container, Row, Col, Carousel } from 'react-bootstrap';
import { withRouter } from "react-router";

class CarouselComponent extends React.Component {
    state = {
        title: "",      //Title of Carousel section
        subtitle: "",   //Image source
        images: null,   //Array of object {imgSrc, alt}
        bg: "",         //Background color; values can be "grey" or "white"
        forSection: ""  //Unique name for carousel section; eg- "consumerPersonaCarousel"
    };

    componentDidMount() {
        const title = this.props.title;
        const subtitle = this.props.subtitle;
        const images = this.props.images;
        const bg = this.props.bg;
        const forSection = this.props.forSection;
        this.setState({title: title, subtitle: subtitle, images: images, bg: bg, forSection: forSection});
    }

    render() {
        return (
            <section className={this.state.bg==="grey"?"carousel-section grey-bg":"carousel-section"}>
                <Container fluid>
                    <Row>
                        <Col xs={{span: 10, offset: 1}} className="carousel-title">
                            {this.state.title}
                        </Col>
                    </Row>
                    <Row>
                        <Col xs={{span: 8, offset: 2}} className="carousel-subtitle">
                            {this.state.subtitle}
                        </Col>
                    </Row>
                    <Row>
                        <Col xs={{span: 8, offset: 2}}>
                        <Carousel indicators={true}>
                            {this.state.images?this.state.images.map((imageObj, index) => 
                            (<Carousel.Item key={`${this.state.forSection}-carousel-${index}`}>
                                <img
                                className="d-block w-100"
                                src={imageObj.imgSrc}
                                alt={imageObj.alt}
                                />
                            </Carousel.Item>))
                            :
                            null
                            }
                        </Carousel>
                        </Col>
                    </Row>
                </Container>
            </section>
        )
    }
}

export default withRouter(CarouselComponent);