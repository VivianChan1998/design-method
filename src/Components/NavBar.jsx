import React from 'react'
import Nav from 'react-bootstrap/Nav'
import {Link} from 'react-router-dom'
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
                    <Link to="/">首頁</Link>
                </Nav.Item>
                <Nav.Item as="li">
                    <Link to="/home">方法目錄</Link>
                </Nav.Item>
                <Nav.Item as="li">
                    <Link to="/about">團隊成員</Link>
                </Nav.Item>
                
            </Nav>
            </Navbar>
        )
    }
}