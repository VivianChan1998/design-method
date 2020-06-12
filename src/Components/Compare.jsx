import React from 'react'
import Select from 'react-select'
import Data from '../Data/Index.json'
import './Compare.css'

const customStyle = {
    option: (styles, { data, isDisabled, isFocused, isSelected }) => {
        return {
            ...styles,
            backgroundColor: isSelected? '#D0FBF6':'#075574',
            display: 'inline-block',
            maxWidth: '120px',
            borderRadius: '15px',
            padding: '4px',
            margin: '0.5vh',
            cursor: isDisabled ? 'not-allowed' : 'default',
            color: '#FFFFFF'
        };
    },
    multiValue: (styles, { data }) => {
        return {
          ...styles,
            backgroundColor: '#075574',
            maxWidth: '100px',
            borderRadius: '15px',
            padding: '4px',
            color: '#FFFFFF',
            margin: '0.5vh',
        };
    },
    multiValueLabel: (styles, { data }) => ({
        ...styles,
        color: '#FFFFFF',
      }),
}
export default class Compare extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            selected: []
        }
    }
    render(){
        return(
            <div id='Compare-wrapper'>
                <div id='Compare-select'>
                    <Select options={
                            Data['all'].map(e => {return {value: e, label: e}})
                        }
                        styles={customStyle}
                        isMulti
                        onChange={e => {
                            if(e == null) this.setState({selected: []})
                            else this.setState({selected: e})}
                        }
                        placeholder='選擇要比較的方法'
                    />
                </div>
                <div id='Compare-table-wrapper'>
                    <table id='Compare-table'>
                        <thead>
                            <tr>
                                {
                                    this.state.selected.map(e => 
                                        <th colspan="1">{e.label}</th>
                                    )
                                }
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                {
                                    this.state.selected.map(e => 
                                    <td >{Data['content'][e.label]['good']}</td>
                                    )
                                }
                            </tr>
                            <tr>
                                {
                                    this.state.selected.map(e => 
                                    <td >{Data['content'][e.label]['bad']}</td>
                                    )
                                }
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        )
    }
}