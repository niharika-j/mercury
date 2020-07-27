import React from 'react';
import './Subsection.scss';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { withRouter } from "react-router";
import { Link } from 'react-router-dom';

class SubsectionComponent extends React.Component {
    state = {
        title: "",          // Title of subsection component
        imgSrc: null,       // Source of image to be shown in subsection
        bg: "",             // Background color of subsection; value can be "grey" or "white"
        isButton: false,    // Boolean value (true/false); true if we need to show a button in subsection, else false
        buttonText: "",     // If isButton={true}, buttonText is string to show as text in button; eg- "Learn More"; if isButton={false}, buttonText=""
        url: "",            // URL path to go to when user clicks button; if isButton={false}, url=""
        textType: "",       // textType refers to format of text; value can be "paragraph" or "list"
        content: null,      // Array of string text; each string represents one paragraph or one list item; eg- ["paragraph1", "paragraph2"]
        alignImg: "right"   // The side on which image should be aligned; value can be "left" or  "right"
    };

    componentDidMount() {
        const title = this.props.title;
        const imgSrc = this.props.imgSrc;
        const bg = this.props.bg;
        const isButton = this.props.isButton;
        const buttonText = this.props.buttonText;
        const url = this.props.url;
        const textType = this.props.textType;
        const content = this.props.content;
        const alignImg = this.props.alignImg;
        this.setState({title: title, imgSrc: imgSrc, bg: bg, isButton: isButton, buttonText: buttonText, url: url, textType: textType, content: content, alignImg: alignImg});
    }

    formatParagraph(text, index) {
        return (
            <Col key={`${this.state.title}-${index}`} sm={8} className="subsection-header-content">{text}</Col>
        )
    }

    formatList(text, index) {
        return (
            <li key={`${this.state.title}-${index}`}>{text}</li>
        )
    }

    render() {
        return (
            <section className={this.state.bg==="grey"?"subsection-header-section grey-bg":"subsection-header-section"}>
                <Container fluid>
                    <Row>
                        {this.state.alignImg==="left"&&window.screen.width>575.98?
                            (<Col sm={6} className="subsection-header-img">
                                <img src={this.state.imgSrc} alt="subsection header" />
                            </Col>)
                        :null
                        }
                        <Col sm={{span: this.state.alignImg==="right"?5:4, offset: 1}} className="subsection-header-text align-self-center">
                            <Row>
                                <Col sm={this.state.alignImg==="right"?8:12} className="subsection-header-title">{this.state.title}</Col>
                            </Row>
                            <Row>
                                {this.state.textType==="paragraph"&&this.state.content?
                                    this.state.content.map((pText, index) => this.formatParagraph(pText, index)):
                                    null
                                }
                                {this.state.textType==="list"&&this.state.content?
                                    (
                                        <Col sm={this.state.alignImg==="right"?8:12} className="subsection-header-content">
                                            <ul>
                                                {this.state.content.map((lText, index) => this.formatList(lText, index))}
                                            </ul>
                                        </Col>
                                    )
                                    :
                                    null
                                }
                            </Row>
                            {this.state.isButton?(
                            <Row className="subsection-button-row">
                                <Col>
                                    <Button variant="outline-primary" className="learn-more-btn">
                                        <Link to={this.state.url}>{this.state.buttonText}</Link>
                                    </Button>
                                </Col>
                            </Row>
                            ):null}
                        </Col>
                        {this.state.alignImg==="right"||window.screen.width<=575.98?
                            (<Col sm={6} className="subsection-header-img">
                                <img src={this.state.imgSrc} alt="subsection header" />
                            </Col>)
                        :null
                        }
                    </Row>
                </Container>
            </section>
        )
    }
}

export default withRouter(SubsectionComponent);
