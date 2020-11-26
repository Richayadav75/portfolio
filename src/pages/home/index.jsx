import React,{Component} from 'react';
import Header from '../../components/header'
import Banner from '../../components/banner';
import Description from '../../components/description';
import ResumeList from '../../components/resumeList';
import Progress from '../../components/progressBar';
import TabComponent from '../../components/tab';
import CarouselComponent from '../../components/carousel';

export default class Home extends Component{
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
    render(){
        return (
            <div>
                <Header/>
                <Banner />
                <Description />
                <ResumeList name={this.state.title} list={this.state.educationData} />
                <Progress />
                <TabComponent />
                <CarouselComponent />
            </div>
            
        )
    }

}