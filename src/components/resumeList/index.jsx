import React, { Component } from 'react';
import {Container, Row, Col } from 'react-bootstrap';
import './style.css';
export default class ResumeList extends Component {
    render() {
        return (
            <div>
                <section className="section">
                    <Container>
                        <Row>
                            <div className="col-12">
                                <h3 className="resume-title">{this.props.name}</h3>{
                                    this.props.list.map((listItem, index) =>
                                        (

                                            <div className="resume-list" key={index}>
                                                <h3 className="text-primary h6">
                                                    {listItem.instituteName}
                                                </h3>
                                                <p className="resume-date">
                                                    {listItem.startYear} - {listItem.endYear}
                                                </p>
                                                <p className="resume-discription">
                                                    {listItem.courseName}
                                                </p>
                                            </div>

                                        ))
                                }
                            </div>
                        </Row>
                    </Container>
                </section>
            </div>
        )
    }
}

/** object
 * { instituteName:"UPTU",
 * startYear:2006,
 * endYear:2010,
 * courseName:"b.Tech"
 *  }
 */

/** array of json object
 *  [{ instituteName:"UPTU",
* startYear:2006,
* endYear:2010,
* courseName:"b.Tech"
*  }]
 */