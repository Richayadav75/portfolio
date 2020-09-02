import React,{Component} from 'react';
import Header from '../../components/header'
import Banner from '../../components/banner';

export default class Home extends Component{
    render(){
        return (
            <div>
                <Header/>
                <Banner />
            </div>
            
        )
    }

}