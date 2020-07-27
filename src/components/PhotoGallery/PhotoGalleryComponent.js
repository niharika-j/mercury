import React from 'react';
import './PhotoGallery.scss';
import { Container, Row, Col } from 'react-bootstrap';
import Modal from 'react-bootstrap/Modal'
import { withRouter } from "react-router";

import linkedIn from '../../assets/images/team/linkedin.png';
import email from '../../assets/images/team/email.png';

class PhotoGalleryComponent extends React.Component {
    state = {
        members: null,      // Array of object {name: string, title: string, imgSrcGreyscale, imgSrcColor}
        modalStates: null   // No need to assign; it is set automatically in componentDidMount()
    };

    componentDidMount() {
        const members = this.props.members;
        let modalStates = {};
        for(var i=0;i<members.length;i++) {
            modalStates[members[i].key] = false;
        }
        this.setState({members: members, modalStates: modalStates});
    }

    toggleModal(memberObj, toggleAction="open") {
        let stateCopy = JSON.parse(JSON.stringify(this.state));
        let modalStatesCopy = JSON.parse(JSON.stringify(stateCopy.modalStates));
        modalStatesCopy[memberObj.key] = toggleAction==="open"?true:false;
        stateCopy.modalStates = modalStatesCopy;
        this.setState(stateCopy);
    }

    createModal(memberObj) {
        return (
            <Modal dialogClassName="custom-modal-size" key={`modal-${memberObj.key}`} show={this.state.modalStates[memberObj.key]} onHide={() => this.toggleModal(memberObj, "close")} centered>
                <Modal.Header closeButton>
                </Modal.Header>
                <Modal.Body>
                    <Container>
                        <Row className="justify-content-center">
                            <Col className="modal-profile-img" md={4} xs={10}>
                                <img src={memberObj.imgSrcColor} alt={memberObj.name} />
                            </Col>
                            <Col xs={10} className="modal-member-content">
                                <div className="modal-member-name">
                                    {memberObj.name}
                                </div>
                                <div className="modal-member-title">
                                    {memberObj.title}
                                </div>
                                <div className="modal-member-description">
                                    {memberObj.description}
                                </div>
                                <div>
                                    <a href={memberObj.linkedin} target="_blank" rel="noopener noreferrer" className="member-contact-link"><img src={linkedIn} alt="Link to linkedIn profile" /></a>
                                    <a href={memberObj.email} target="_blank" rel="noopener noreferrer" className="member-contact-link"><img src={email} alt={`Email ${memberObj.name}`} /></a>
                                </div>
                            </Col>
                        </Row>
                    </Container>
                </Modal.Body>
            </Modal>
        );
    }

    render() {
        return (
            <section id="photo-gallery-section">
                <Container fluid>
                    <Row className="justify-content-center">
                        {this.state.members?this.state.members.map((member, index) => 
                            (<Col key={`teamMember${index}`} sm={2} onClick={() => this.toggleModal(member)}>
                                <div className="team-member">
                                    <img src={member.imgSrcGreyscale} alt={member.name} className="member-image" onMouseOver={e => (e.currentTarget.src = member.imgSrcColor)} onMouseOut={e => (e.currentTarget.src = member.imgSrcGreyscale)} />
                                    <div className="member-name">{member.name}</div>
                                    <div className="member-title">{member.title}</div>
                                </div>
                            </Col>)
                        )
                        :
                        null
                        }
                    </Row>
                </Container>
                {this.state.members?this.state.members.map((member, index) => {
                    return this.createModal(member)
                }):null}
            </section>
        )
    }
}

export default withRouter(PhotoGalleryComponent);