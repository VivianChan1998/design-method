import React from 'react'
import Select from 'react-select'
import Data from '../Data/Index.json'
import './Compare.css'
import {Tag} from './Tags'
import { Link } from 'react-router-dom'

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
                                <th className='ColHead'>方法名稱</th>
                                {
                                    this.state.selected.map(e => 
                                        <th colspan="1">{e.label}</th>
                                    )
                                }
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td className='ColHead'>方法簡介</td>
                                {
                                    this.state.selected.map(e => 
                                    <td >{Data['content'][e.label]['summary']}</td>
                                    )
                                }
                            </tr>
                            <tr>
                                <td className='ColHead'>方法特色</td>
                                {
                                    this.state.selected.map(e => 
                                        <td >{
                                            Data['content'][e.label]['tag'].map(e => 
                                                <Tag id={e} />
                                            )
                                        }</td>
                                    )
                                }
                            </tr>
                            {/*
                            <tr>
                                <td className='ColHead'>使用時機</td>
                                {
                                    this.state.selected.map(e => 
                                    <td >{Data['content'][e.label]['usage']}</td>
                                    )
                                }
                            </tr>
                            */}
                            <tr>
                                <td className='ColHead'>優點</td>
                                {
                                    this.state.selected.map(e => 
                                    <td >{Data['content'][e.label]['good']}</td>
                                    )
                                }
                            </tr>
                            <tr>
                                <td className='ColHead'>缺點</td>
                                {
                                    this.state.selected.map(e => 
                                    <td >{Data['content'][e.label]['bad']}</td>
                                    )
                                }
                            </tr>
                            <tr>
                                <td className='ColHead'>連結</td>
                                {
                                    this.state.selected.map(e => 
                                    <td >
                                        <Link to={`/${e.label}`}>
                                            <button className='button'>
                                            詳細閱讀
                                            </button>
                                        </Link>
                                    </td>
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