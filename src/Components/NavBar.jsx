import React from 'react'
import Nav from 'react-bootstrap/Nav'

export default class NavBar extends React.Component{
    render(){
        return(
            <Nav defaultActiveKey="/home" as="ul">
                <Nav.Item as="li">
                    <Nav.Link href="/">首頁</Nav.Link>
                </Nav.Item>
            </Nav>
        )
    }
}