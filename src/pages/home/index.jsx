import React,{Component} from 'react';
import Header from '../../components/header'
import Banner from '../../components/banner';
import Description from '../../components/section';
import Section from '../../components/section';

export default class Home extends Component{
    render(){
        return (
            <div>
                <Header/>
                <Banner />
                <Section />
            </div>
            
        )
    }

}