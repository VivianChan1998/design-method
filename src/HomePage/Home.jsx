import React from 'react'
import TimeLine from '../Components/TimeLine'
import Sort from '../Components/Sort'
import { Tab, Tabs } from "react-bootstrap";

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
                <Tabs defaultActiveKey="timeline" id="uncontrolled-tab-example">
                    <Tab eventKey="timeline" title="依照設計歷程">
                        <TimeLine />
                    </Tab>
                    <Tab eventKey="sort" title="依照屬性分類">
                        <Sort />
                    </Tab>
                </Tabs>
            </div>
        )
    }
}