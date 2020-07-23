import React from 'react';
import './Footer.scss';
import { Container } from 'react-bootstrap';


class FooterComponent extends React.Component {
    render() {
        return (
            <section id="footer">
                <Container fluid>© 2020 MHCI numo team. All rights reserved.</Container>
            </section>
        );
    }
}

export default FooterComponent;