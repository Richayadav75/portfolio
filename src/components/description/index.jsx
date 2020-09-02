import React, { Component } from 'react';
import {Col} from 'react-bootstrap';
import './index.css';
// import PrimaryBtn from '../../components/primaryBtn';


export default class Description extends Component {
    render() {
        return (
            <div>
                <Col>
                    <h1 className="text-lg">
                        Hi_
                    </h1>
                    <p className="py-5 person-description">
                        I am Richa Web developer able to build a Web presence from the ground up - from concept, navigation, layout and programming to UX and SEO. Skilled at writing well-designed, testable and efficient code using current best practices in Web development. Fast learner, hard worker and team player who is proficient in an array of scripting languages and multimedia Web tools.
                    </p>
                    {/* <PrimaryBtn /> */}
                </Col>
            </div>
        )
    }
}