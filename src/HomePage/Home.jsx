import React from 'react'
import TimeLine from '../Components/TimeLine'
import Sort from '../Components/Sort'
import { Tab, Tabs } from "react-bootstrap";
import NavBar from '../Components/NavBar'
import './Home.css'
import Compare from '../Components/Compare';
import {Link} from 'react-router-dom'

export default class Home extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            selectedTabId: 'temp',
        }
    }
    handleTabChange(e){
        this.setState({selectedTabId: e})
    }
    render(){
        return(
            <div>
                <NavBar />
                <Banner />
                <>
                <style type="text/css">
                    {`
                    .nav-tabs .nav-item.show .nav-link, .nav-tabs .nav-link.active{
                        background: #F9B0A9;
                        color: var(--color-white);
                        border: none;
                        
                    }
                    .nav-tabs .nav-item.show .nav-link, .nav-tabs{
                        margin-left: 5vw;
                    }
                    .tab-content{
                        border-top: 3px solid #F9B0A9;
                        /*
                        background: -moz-linear-gradient(top, #F9B0A9 0%, rgba(54,112,173,0) 3%, rgba(125,185,232,0) 100%);
                        background: -webkit-linear-gradient(top, #F9B0A9 0%,rgba(54,112,173,0) 3%,rgba(125,185,232,0) 100%);
                        background: linear-gradient(to bottom, #F9B0A9 0%,rgba(54,112,173,0) 3%,rgba(125,185,232,0) 100%);
                        */
                    }
                    `}
                </style>
                <Tabs defaultActiveKey="timeline" id="uncontrolled-tab-example">
                    <Tab eventKey="timeline" title="依照設計歷程">
                        <TimeLine />
                    </Tab>
                    <Tab eventKey="sort" title="依照屬性分類">
                        <Sort />
                    </Tab>
                    <Tab eventKey="compare" title="方法比較">
                        <Compare />
                    </Tab>
                </Tabs>
                </>
            </div>
        )
    }
}


function Banner(props){
    return(
        <div className='Banner'>
            <h1>設計方法總覽</h1>
        </div>
    )
}