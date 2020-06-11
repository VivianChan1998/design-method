import React from 'react'
import './MethodLink.css'
import ReactCardFlip from 'react-card-flip';

export default class MethodLink extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            isFlipped: false,
            content: <h1>{this.props.title}</h1>
        };
    }
    handleHover(e) {
        this.setState({content: <h1>:)</h1>})
    }
    leaveHover(e) {
        this.setState({content: <h1>{this.props.title}</h1>})
    }
    render(){
        return(
            <a href={`/${this.props.title}`} className='ML-link' >
                <div className='ML-wrapper' onMouseEnter={() => this.handleHover()} onMouseLeave={() => this.leaveHover()}>
                    {this.state.content}
                </div>

                
            </a>
        )
    }
}
