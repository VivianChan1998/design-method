import React from 'react'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import './Nav.css'

export default class NavBar extends React.Component{
    render(){
        var navClass = this.props.white? 'Nav Nav-white':'Nav Nav-blue'
        console.log(navClass)
        return(
            <Navbar>
            <Nav defaultActiveKey="/home" as="ul" className={navClass}>
                <Nav.Item as="li">
                    <a href="/">首頁</a>
                </Nav.Item>
                <Nav.Item as="li">
                    <a href="/home">方法目錄</a>
                </Nav.Item>
                <Nav.Item as="li">
                    <a href="/about">團隊成員</a>
                </Nav.Item>
                
            </Nav>
            </Navbar>
        )
    }
}