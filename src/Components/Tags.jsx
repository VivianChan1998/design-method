import React from 'react'
import Option from '../Data/Options.json'

const colorSet = [
    '#F1948A','#BB8FCE','#85C1E9','#73C6B6',
    '#82E0AA','#F8C471','#E59866',
    '#D7DBDD','#B2BABB','#808B96']

const TagStyle = (id, small) => {
    return(
        {
            position: 'relative',
            zIndex: 10,
            backgroundColor: colorSet[id[0]],
            display: 'inline-block',
            minWidth: small? 'auto':'80px',
            minHeight: small? 'auto':'30px',
            borderRadius: '15px',
            padding: '1px 2px 1px 2px',
            margin: small? '0.1vh' : '0.3vh',
            color: '#FFFFFF',
            fontSize: small? '0.8rem': '1rem'
        }
    )
}

const TagValStyle = (id, small) => {
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
            <div style={TagStyle(id, this.props.small)}>
                <div style={TagValStyle(id, this.props.small)}>
                    {Option['option_map'][id]}
                </div>
            </div>
        )
    }
}

export {Tag}