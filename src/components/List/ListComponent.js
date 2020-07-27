import React from 'react';
import './List.scss';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { withRouter } from "react-router";
import { Link } from 'react-router-dom';

class ListComponent extends React.Component {
    state = {
        title: "",          // Title of list; value is a string
        subtitle: "",       // Subtitle of list; value is a string
        list: null,         // Array of object 
                            // {    text: string, 
                            //      imgSrc: img object, 
                            //      alt: alternate text string for image for accessibility, link: boolean value (true/false)- 
                            //           true if 'Learn more' link is present, else false,
                            //      url: URL path for link,
                            //      linkText: String- text of the link
                            // }
        forSection: "",     // Unique name of list section; eg- "homePageApproach"
        bg: "",             //  Background color; value cann be "grey" or "white"
        nCol: null          // DO NOT PASS as prop- it is internally calculated in componentDidMount() method
    };

    componentDidMount() {
        const title = this.props.title;
        const subtitle = this.props.subtitle;
        const list = this.props.list;
        const forSection = this.props.forSection;
        const bg = this.props.bg;
        const nCol = this.props.list.length;
        this.setState({title: title, subtitle: subtitle, list: list, forSection: forSection, bg: bg, nCol: nCol});
    }   

    render() {
        let colWidthMd = 10;
        let colWidthSm = 10;
        let colWidthXs = 10;
        
        if(this.state.nCol){
            switch(this.state.nCol) {
                case 4: colWidthMd = 2; colWidthSm = 5; colWidthXs = 10; break;
                case 3: colWidthMd = 3; colWidthSm = 5; colWidthXs = 10; break;
                case 2: colWidthMd = 4; colWidthSm = 4; colWidthXs = 10; break;
                default: colWidthMd = 5; colWidthSm = 5; colWidthXs = 10; break;
            }
        }
        return (
            <section className={this.state.bg==="grey"?"list-section grey-bg":"list-section"}>
                <Container fluid>
                    <Row className="list-header-text">
                        <Col xs={{span: 10, offset: 1}} className="list-header-title">{this.state.title}</Col>
                        <Col xs={{span: 10, offset: 1}} className="list-header-subtitle">{this.state.subtitle}</Col>
                    </Row>
                    <Row className="justify-content-center">
                        {this.state.list?
                            this.state.list.map((listObj, index) => 
                                (<Col key={`list-${this.state.forSection}-${index}`} md={colWidthMd} sm={colWidthSm} xs={colWidthXs} className="list-col">
                                    <div className="list-image">
                                        <img src={listObj.imgSrc} alt={listObj.alt} />
                                    </div>
                                    <div className="list-text">
                                        {listObj.text}
                                    </div>
                                    <div className="list-description">
                                        {listObj.description?listObj.description:""}
                                    </div>
                                    {listObj.link?(<div className="list-link">
                                        <Button variant="outline-primary" className="learn-more-btn">
                                            <Link to={listObj.url}>{listObj.linkText}</Link>
                                        </Button></div>):null}
                                </Col>)
                            )
                            :
                            null
                        }
                    </Row>
                </Container>
            </section>
        )
    }
}
export default withRouter(ListComponent);