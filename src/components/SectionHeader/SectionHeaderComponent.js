import React from 'react';
import './SectionHeader.scss';
import { Container, Row, Col } from 'react-bootstrap';
import { withRouter } from "react-router";

class SectionHeaderComponent extends React.Component {
    state = {
        title: "",      // Title shown in Section Header; value is a string
        content: "",    // Content of Section Header; value is string; If there is no content, pass empty string ""
        imgSrc: null,   // Source of image shown in Section Header
        alt: "",        // Alternate text for image for accessibility
        bg: ""          // Background color of Section Header; value can be "grey" or "white"
    };

    componentDidMount() {
        const title = this.props.title;
        const content = this.props.content;
        const imgSrc = this.props.imgSrc;
        const bg = this.props.bg;
        this.setState({title: title, content: content, imgSrc: imgSrc, bg: bg});
    }

    render() {
        return (
            <section className={this.state.bg==="grey"?"section-header-section grey-bg":"section-header-section"}>
                <Container fluid>
                    <Row>
                        <Col sm={{span: 5, offset: 1}} className="section-header-text align-self-center">
                            <Row>
                                <Col className="section-header-title">{this.state.title}</Col>
                            </Row>
                            <Row>
                                <Col sm={8} className="section-header-content">{this.state.content}</Col>
                            </Row>
                        </Col>
                        <Col sm={6} className="section-header-img">
                            <img src={this.state.imgSrc} alt={this.state.alt} />
                        </Col>
                    </Row>
                </Container>
            </section>
        )
    }
}

export default withRouter(SectionHeaderComponent);