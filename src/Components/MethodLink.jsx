import React from 'react'
import './MethodLink.css'
import {Tag} from './Tags'
import Options from '../Data/Options.json'
import Data from '../Data/Index.json'
import { Link } from 'react-router-dom'

export default class MethodLink extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            isFlipped: false,
        };
    }
    
    handleHover(e) {
        this.setState({isFlipped: true})
    }
    leaveHover(e) {
        this.setState({isFlipped: false })
    }
    render(){
        return(
            <div>
                <div className='ML-wrapper' onMouseEnter={() => this.handleHover()} onMouseLeave={() => this.leaveHover()}>
                    {
                        this.state.isFlipped?
                        <BackContent title={this.props.title} />
                        :
                        <FrontContent title={this.props.title} />
                    }
                </div>
            </div>
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
                        <Tag id={e} small dot/>
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
            <Link to={`/${name}`}>
            <button>
                詳細介紹
            </button>
            </Link>
        </div>
    )
}