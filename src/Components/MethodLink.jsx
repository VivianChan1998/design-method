import React from 'react'
import './MethodLink.css'
import {Tag} from './Tags'
import Options from '../Data/Options.json'
import Data from '../Data/Index.json'

export default class MethodLink extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            isFlipped: false,
            content: <FrontContent title={this.props.title} />
        };
    }
    handleHover(e) {
        this.setState({content: <BackContent title={this.props.title}/>})
    }
    leaveHover(e) {
        this.setState({content: <FrontContent title={this.props.title} /> })
    }
    render(){
        return(
            <a className='ML-link' >
                <div className='ML-wrapper' onMouseEnter={() => this.handleHover()} onMouseLeave={() => this.leaveHover()}>
                    {this.state.content}
                </div>
            </a>
        )
    }
}

function FrontContent(props){
    const name = props.title
    return(
        <div className='ML-front'>
            <h5>{name}</h5>
            <div>
                {
                    Data['content'][name]['tag'].map(e => 
                        <Tag id={e} small/>
                    )
                }
            </div>
        </div>
    )
}

function BackContent(props){
    const name = props.title
    console.log(Data['content'][name]['tag'])
    return(
        <div className='ML-back'>
            <p>
                {Data['content'][name]['summary']}
            </p>
            <a href={`/${name}`}>
            <button>
                詳細介紹
            </button>
            </a>
        </div>
    )
}