import React from 'react';
import './TextOnImage.scss';
import { Container, Row, Col } from 'react-bootstrap';
import { withRouter } from "react-router";

class TextOnImageComponent extends React.Component {
    state = {
        title: "",      // Title of this section; value is a string
        content: "",    // Content of the section; value is a string
        imgUrl: null    // Source of image
    };

    componentDidMount() {
        const title = this.props.title;
        const content = this.props.content;
        const imgUrl = this.props.imgUrl;
        this.setState({title: title, content: content, imgUrl: imgUrl});
    }

    getBackgroundStyle() {
        return {
            backgroundImage: `url('${this.state.imgUrl}')`,
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center center",
            backgroundSize: "cover"
        }
    }

    render() {
        return (
            <section className="text-on-image-section">
                <Container fluid className="text-align-center text-on-image-container" style={this.getBackgroundStyle()}>
                    <Row>
                        <Col className="text-on-image-title">{this.state.title}</Col>
                    </Row>
                    <Row>
                        <Col md={{span: 6, offset: 3}} sm={{span: 10, offset: 1}} xs={{span: 10, offset: 1}} className="text-on-image-content">{this.state.content}</Col>
                    </Row>
                </Container>
            </section>
        )
    }
}

export default withRouter(TextOnImageComponent);