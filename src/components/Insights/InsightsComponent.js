import React from 'react';
import './Insights.scss';
import { Container, Row, Col } from 'react-bootstrap';
import { withRouter } from "react-router";

class InsightsComponent extends React.Component {
    state = {
        title: "",          //Title of insights section- string
        subtitle: "",       //Subtitle- string
        insights: null,     //Array of string; eg- ["first string1", "second string2"]
        forSection: ""      //Unique name for insights section to be used in key; eg- "researchConsumerInsights"
    };

    componentDidMount() {
        const title = this.props.title;
        const subtitle = this.props.subtitle;
        const insights = this.props.insights;
        const forSection = this.props.forSection;
        this.setState({title: title, subtitle: subtitle, insights: insights, forSection: forSection});
    }

    render() {
        return (
            <section className="insights-section">
                <Container fluid>
                    <Row>
                        <Col className="insights-title">
                            {this.state.title}
                        </Col>
                    </Row>
                    <Row>
                        <Col className="insights-subtitle" xs={{span: 8,  offset: 2}} >
                            {this.state.subtitle}
                        </Col>
                    </Row>
                    <Row>
                        {this.state.insights?this.state.insights.map((insight, index) => 
                            (
                                <Col key={`${this.state.forSection}-${index}`} xs={{span: 10, offset: 1}} sm={index%2===0?{span: 4, offset: 2}:{span: 4,  offset: 0}} className="insight-col">
                                    <div className="insight">{insight}</div>
                                </Col>
                            )
                        )
                        :
                        null}
                    </Row>
                </Container>
            </section>
        )
    }
}

export default withRouter(InsightsComponent);