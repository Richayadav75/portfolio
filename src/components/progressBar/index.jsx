import React, { Component } from 'react';
import ProgressBar from 'react-bootstrap/ProgressBar';
import {Container, Row, Col } from 'react-bootstrap';
import './style.css';


export default class Progress extends Component {
    render() {
        return (
            <div>
                <section className="section">
                    <Container>
                        <Row>
                            <Col>
                                <ProgressBar className="" variant="success" now={60} max={100} min={0} key={1} />
                            </Col>
                        </Row>
                    </Container>
                </section>
            </div>
        )
    }
}