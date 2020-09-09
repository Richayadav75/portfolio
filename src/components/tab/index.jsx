import React, { Component } from 'react';
import { Tabs, Tab, Container, Row, Col } from 'react-bootstrap';
import ImageCard from '../imageCard';
import './style.css';

export default class TabComponent extends Component {
    render() {
        return (
            <div>
                <section className="section">
                    <Container>
                        <Row>
                            <Col>
                                <Tabs defaultActiveKey="profile" id="uncontrolled-tab-example">
                                    <Tab eventKey="home" title="Home">
                                        <ImageCard />
                                    </Tab>
                                    <Tab eventKey="profile" title="Profile">
                                        <ImageCard />

                                    </Tab>
                                    <Tab eventKey="contact" title="Contact">
                                        <ImageCard />
                                    </Tab>
                                </Tabs>
                            </Col>
                        </Row>
                    </Container>
                </section>
            </div >
        )
    }
}