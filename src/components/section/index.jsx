import React, { Component } from 'react';
import { Row, Container } from 'react-bootstrap';
import Description from '../description';
import ResumeList from '../resumeList';
import './style.css';


export default class Section extends Component {
    constructor(props) {   //Constructor own method 
        super(props);   //override own constructor method 
        this.state = {    //state initilization
            title: "Education",   //state initization for title state
            educationData: [{
                instituteName: "UPTU",
                startYear: 2006,
                endYear: 2010,
                courseName: "b.Tech"
            },
        {
            instituteName: "S.k.d",
                startYear: 2006,
                endYear: 2010,
                courseName: "b.Tech"
        },
        {
            instituteName: "UPTU",
                startYear: 2006,
                endYear: 2010,
                courseName: "b.Tech"
        }]

        }
    }
    render() {
        return (
            <div>
                <main>
                    <section className="section">
                        <Container>
                            <Row>
                                <Description />
                            </Row>
                        </Container>
                    </section>
                    <section className="section">
                        <Container>
                            <Row>
                                <ResumeList name={this.state.title} list={this.state.educationData} />
                            </Row>
                        </Container>
                    </section>

                </main>
            </div>
        )
    }
}