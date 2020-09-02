import React, { Component } from 'react';
import './style.css';


export default class ResumeList extends Component {
    render() {
        return (
            <div>
               <div className="col-12">
               <h3 className="resume-title">education</h3>
               <div className="resume-list">
                   <h3 className="text-primary h6">
                   UPTU
                   </h3>
                   <p className="resume-date">
                   2006 - 2010 
                   </p>
                   <p className="resume-discription">
                    Bachelor Of Technology
                   </p>
               </div>
               <div className="resume-list">
                   <h3 className="text-primary h6">
                   UPTU
                   </h3>
                   <p className="resume-date">
                   2006 - 2010 
                   </p>
                   <p className="resume-discription">
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptates inventore explicabo, tenetur necessitatibus earum eos quo omnis cupiditate aspernatur exercitationem. Consequuntur, blanditiis sapiente magni fugit quam delectus enim culpa dolor.
                   </p>
               </div>
               <div className="resume-list">
                   <h3 className="text-primary h6">
                   UPTU
                   </h3>
                   <p className="resume-date">
                   2006 - 2010 
                   </p>
                   <p className="resume-discription">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque voluptates quis molestiae magni id exercitationem harum, necessitatibus omnis dicta non. Optio debitis assumenda alias, similique beatae dolorem impedit magnam quaerat?
                   </p>
                   </div>
               </div>
            </div>
        )
    }
}