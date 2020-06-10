import React from 'react'
import Data from '../Data/Index.json'
import { Card } from "@blueprintjs/core";

export default class MethodLink extends React.Component{
    constructor(props){
        super(props)
    }
    render(){
        return(
            <a href={`/${this.props.title}`}>
                <Card className='TL-methodLink'>
                    {this.props.title}
                </Card>
            </a>
        )
    }
}
