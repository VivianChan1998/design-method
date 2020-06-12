import React from 'react'
import Select from 'react-select'
import Options from '../Data/Options.json'
import './Sort.css'
import { white } from 'color-name'

const colorSet = [
'#F1948A','#BB8FCE','#85C1E9','#73C6B6',
'#82E0AA','#F8C471','#E59866',
'#D7DBDD','#B2BABB','#808B96']

const customStyles = {
    control: styles => ({ ...styles, backgroundColor: 'white' }),
    option: (styles, { data, isDisabled, isFocused, isSelected }) => {
        return {
            ...styles,
            backgroundColor: colorSet[data['value'][0]],
            display: 'inline-block',
            maxWidth: '80px',
            borderRadius: '15px',
            padding: '4px',
            color: white,
            margin: '0.5vh',
            cursor: isDisabled ? 'not-allowed' : 'default',
            color: '#FFFFFF'
        };
    },
    multiValue: (styles, { data }) => {
        return {
          ...styles,
          backgroundColor: colorSet[data['value'][0]],
            maxWidth: '100px',
            borderRadius: '15px',
            padding: '4px',
            color: white,
            margin: '0.5vh',
        };
    },
    multiValueLabel: (styles, { data }) => ({
        ...styles,
        color: '#FFFFFF',
      }),

}

export default class Sort extends React.Component{
    constructor(){
        super()
        this.state = {
            selected: []
        }
    }
    render(){
        var options = Options['options']
        return(
            <Select options={options}
                styles={customStyles}
                isMulti
                isClearable
                onChange={this.props.onChange}
                placeholder='選擇方法特點'
            />
        )
    }
}