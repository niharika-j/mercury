import React from 'react';
import './TextSection.scss';
import { Container, Row, Col } from 'react-bootstrap';
import { withRouter } from "react-router";

class SubsectionComponent extends React.Component {
    state = {
        title: "",          // Title of text section component
        bg: "",             // Background color; value can be "grey" or "white"
        content: null,      // Text string- Represents content on the right side of text section component
    };

    componentDidMount() {
        const title = this.props.title;
        const bg = this.props.bg;
        const content = this.props.content;
        this.setState({title: title, bg: bg, content: content});
    }  

    render() {
        return (
            <section className={this.state.bg==="grey"?"text-section grey-bg":"text-section"}>
                <Container fluid>
                    <Row>
                        <Col sm={{span: 6, offset: 1}} className="text-section-title align-self-center">
                            {this.state.title}
                        </Col>
                        <Col sm={{span:4}} className="text-section-content align-self-center">
                            {this.state.content}
                        </Col>
                    </Row>
                </Container>
            </section>
        )
    }
}

export default withRouter(SubsectionComponent);