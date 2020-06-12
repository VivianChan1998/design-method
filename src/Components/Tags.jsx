import React from 'react'
import Option from '../Data/Options.json'
import './Tags.css'

const colorSet = [
    '#F1948A','#BB8FCE','#85C1E9','#73C6B6',
    '#82E0AA','#F8C471','#E59866',
    '#D7DBDD','#B2BABB','#808B96']

const TagStyle = id => {
    return(
        {
            backgroundColor: colorSet[id[0]],
            display: 'inline-block',
            maxWidth: '80px',
            borderRadius: '15px',
            padding: '4px',
            margin: '0.5vh',
            color: '#FFFFFF'
        }
    )
}

const TagValStyle = id => {
    return({
    backgroundColor: colorSet[id[0]],
    maxWidth: '100px',
    borderRadius: '15px',
    padding: '4px',
    color: '#FFFFFF',
    })
}

class Tag extends React.Component{
    render(){
        var id = this.props.id
        return(
            <div style={TagStyle(id)}>
                <div style={TagValStyle(id)}>
                    {Option['option_map'][id]}
                </div>
            </div>
        )
    }
}

export {Tag}