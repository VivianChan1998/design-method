import React from 'react'
import Option from '../Data/Options.json'

const colorSet = [
    '#F1948A','#BB8FCE','#85C1E9','#73C6B6',
    '#82E0AA','#F8C471','#E59866',
    '#D7DBDD','#B2BABB','#808B96']

const TagStyle = id => {
    return(
        {
            position: 'relative',
            zIndex: 10,
            backgroundColor: colorSet[id[0]],
            display: 'inline-block',
            minWidth: '80px',
            minHeight: '30px',
            borderRadius: '15px',
            padding: '1px 2px 1px 2px',
            margin: '0.3vh',
            color: '#FFFFFF'
        }
    )
}

const TagValStyle = id => {
    return(
        {
            backgroundColor: colorSet[id[0]],
            maxWidth: '100px',
            borderRadius: '15px',
            padding: '4px',
            color: '#FFFFFF',
        }
    )
}

class Tag extends React.Component{
    render(){
        var id = this.props.id
        console.log(id)
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