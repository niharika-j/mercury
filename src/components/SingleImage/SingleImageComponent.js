import React from 'react';
import './SingleImage.scss';
import { Container, Row, Col } from 'react-bootstrap';
import { withRouter } from "react-router";

class SingleImageComponent extends React.Component {
    state = {
        title: "",      //Title of SingleImage section
        imgSrc: null,   //Image source
        alt: "",        //Alternate text of image for accessibility
        bg: ""          //Background color. Value can be "grey" or "white"
    };

    componentDidMount() {
        const title = this.props.title;
        const imgSrc = this.props.imgSrc;
        const alt = this.props.alt;
        const bg = this.props.bg;
        this.setState({title: title, imgSrc: imgSrc, alt: alt, bg: bg});
    }

    render() {
        return (
            <section className={this.state.bg==="grey"?"single-image-section grey-bg":"single-image-section"}>
                <Container fluid>
                    <Row>
                        <Col sm={{span: 6, offset: 3}} className="single-image-title">
                            {this.state.title}
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <img src={this.state.imgSrc} alt={this.state.alt} className="single-image" />
                        </Col>
                    </Row>
                </Container>
            </section>
        )
    }
}

export default withRouter(SingleImageComponent);