import React, { Component } from 'react';
import './index.css';
import Person from "../../assets/images/Richa.jpg"

export default class Banner extends Component {
    render() {
        return (
            <div>
                <section class="person-profile">
                    <div class="container">
                        <div class="row profile">
                            <div class="col-4">
                                <div class="person-image">
                                    <img src={Person} alt="" />
                                </div>
                            </div>
                            <div class="col-8">
                                <div class="">
                                    <p class="person-name">Richa Yadav</p>
                                    <p class="person-work">Frontend developer</p>
                                    <div class="d-flex person-bio">
                                        <ul class="list-unstyled w-25">
                                            <li class="bio-list-left">
                                                <p>Age</p>
                                            </li>
                                            <li class="bio-list-left">
                                                <p>Phone</p>
                                            </li>
                                            <li class="bio-list-left">
                                                <p>Email</p>
                                            </li>
                                            <li class="bio-list-left">
                                                Address
                                            </li>
                                        </ul>
                                        <ul class="list-unstyled w-75">
                                            <li class="bio-list-right">
                                                23
                                            </li>
                                            <li class="bio-list-right">
                                                1234567891
                                            </li>
                                            <li class="bio-list-right">
                                                mail2gmail.com
                                            </li>
                                            <li class="bio-list-right">
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