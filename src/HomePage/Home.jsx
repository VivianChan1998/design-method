import React from 'react'
import TimeLine from '../Components/TimeLine'
import Sort from '../Components/Sort'
import { Tab, Tabs } from "react-bootstrap";
import NavBar from '../Components/NavBar'
import './Home.css'
import Compare from '../Components/Compare';

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