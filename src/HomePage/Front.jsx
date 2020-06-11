import React from 'react'
import ReactPageScroller from 'react-page-scroller'
import './Front.css'
import NavBar from '../Components/NavBar'

export default class Front extends React.Component{
    constructor(){
        super()
        this.state = {
            currentPage: null
        }
    }
    handlePageChange = num => {
        this.setState({currentPage: num})
    }
    render(){
        return(
            <ReactPageScroller
                pageOnChange={this.handlePageChange}
                customPageNumber={this.state.currentPage}
            >
                <P1 />
                <P2 />
                <P3 />
            </ReactPageScroller>
        )
    }
}

class P1 extends React.Component{
    render(){
        return(
            <div id='P1-wrapper'>
                <NavBar white/>
            </div>
        )
    }
}

class P2 extends React.Component{
    render(){
        return(
            <div id='P2-wrapper'>

            </div>
        )
    }
}

class P3 extends React.Component{
    render(){
        return(
            <div id='P3-wrapper'>

            </div>
        )
    }
}