import React, { Component } from 'react';
import {Row, Container } from 'react-bootstrap';
import Description from '../../components/description'; 
import './style.css';


export default class Section extends Component {
    render(){
        return(
            <div>
                <main>
                    <section class="section">
                        <Container>
                            <Row>
                            <Description />
                            </Row>
                        </Container>
                    </section>
                </main>
            </div>
        )
    }
}