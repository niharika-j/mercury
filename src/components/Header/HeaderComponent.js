import React from 'react';
import './Header.scss';
import { Container, Row, Col } from 'react-bootstrap';
import { withRouter } from "react-router";

class HeaderComponent extends React.Component {
    state = {
        bg: "",         //Background color; value can be "grey" or "green"
        color: "",      //Font color; value can be "white" or "black"
        imgSrc: null,   //Source of image
        title: "",      //title in header; value is a string; eg- "Less Transactional, More relationship-building"
        subtitle: ""    //Subtitle; value is a string
    };

    componentDidMount() {
        const bg = this.props.bg;
        const color = this.props.color;
        const imgSrc = this.props.imgSrc;
        const title = this.props.title;
        const subtitle = this.props.subtitle;
        this.setState({bg: bg, color: color, imgSrc: imgSrc, title: title, subtitle: subtitle});
    }

    render() {
        return (
            <section className={this.state.bg==="green"?"header green-bg":"header grey-bg"}>
                <Container fluid>
                    <Row>
                        <Col sm={{span: 5, offset: 1}} className={this.state.color==="white"?"white align-self-center header-text":"black align-self-center header-text"}>
                            <div className="header-title">
                                {this.state.title}
                            </div>
                            <div className="header-subtitle">
                                {this.state.subtitle}
                            </div>
                        </Col>
                        <Col sm="6">
                            <img src={this.state.imgSrc} className="header-img" alt="prototype" />
                        </Col>
                    </Row>
                </Container>
            </section>
        )
    }
}

export default withRouter(HeaderComponent);