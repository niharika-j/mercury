import React from 'react';
import './TwoImage.scss';
import { Container, Row, Col } from 'react-bootstrap';
import { withRouter } from "react-router";

class TwoImageComponent extends React.Component {
    state = {
        img1: null, // Source of first image
        alt1: "",   // Alternate text of img1 for accessibility
        img2: null, // Source of second image
        alt2: "",   // Alternate text of img2 for accessibility
        bg: ""
    };

    componentDidMount() {
        const img1 = this.props.img1;
        const alt1 = this.props.alt1;
        const img2 = this.props.img2;
        const alt2 = this.props.alt2;
        const bg = this.props.bg;
        this.setState({img1: img1, alt1: alt1, img2: img2, alt2: alt2, bg: bg});
    }

    render() {
        return (
            <section className={this.state.bg==="green"?"two-image-section green-bg":(this.state.bg==="grey"?"two-image-section grey-bg":"two-image-section")}>
                <Container fluid>
                    <Row>
                        <Col sm={6}>
                            <img className="two-img" src={this.state.img1} alt={this.state.alt1} />
                        </Col>
                        <Col sm={6}>
                            <img className="two-img" src={this.state.img2} alt={this.state.alt2} />
                        </Col>
                    </Row>
                </Container>
            </section>
        )
    }
}

export default withRouter(TwoImageComponent);