import React, { Component } from 'react';
import './index.css';
import Person from "../../assets/images/Richa.jpg"

export default class Banner extends Component {
    render() {
        return (
            <div>
                <section className="person-profile">
                    <div className="container">
                        <div className="row profile">
                            <div className="col-4">
                                <div className="person-image">
                                    <img src={Person} alt="" />
                                </div>
                            </div>
                            <div className="col-8">
                                <div className="">
                                    <p className="person-name">Richa Yadav</p>
                                    <p className="person-work">Frontend developer</p>
                                    <div className="d-flex person-bio">
                                        <ul className="list-unstyled w-25">
                                            <li className="bio-list-left">
                                                <p>Age</p>
                                            </li>
                                            <li className="bio-list-left">
                                                <p>Phone</p>
                                            </li>
                                            <li className="bio-list-left">
                                                <p>Email</p>
                                            </li>
                                            <li className="bio-list-left">
                                                Address
                                            </li>
                                        </ul>
                                        <ul className="list-unstyled w-75">
                                            <li className="bio-list-right">
                                                23
                                            </li>
                                            <li className="bio-list-right">
                                                1234567891
                                            </li>
                                            <li className="bio-list-right">
                                                mail2gmail.com
                                            </li>
                                            <li className="bio-list-right">
                                                xyz
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        );
    }
};