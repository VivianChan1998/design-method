import React from 'react'
import Select from './Select'
import './Sort.css'
import Data from '../Data/Index.json'
import MethodLink from './MethodLink'
import filter from '../img/filter.svg'

const Content = Data['content']
const keys = Object.keys(Data['content'])

export default class Sort extends React.Component{
    constructor(){
        super()
        this.state = {
            selected: [],
            appear: keys
        }
    }
    handleChange(evt){
        var content = Data['all']
        var sel = evt == null? [] : evt.map(el => el.value)

        for(var i=0; i<sel.length; ++i){
            content = content.filter(e => Content[e]['tag'].includes(sel[i]))
        }

        this.setState({
            selected: sel,
            appear: content
        })
    }
    render(){
        return(
            <div id='sort-wrapper'>
                <div id='select-wrapper'>
                    <img src={filter}/>
                    <div><Select onChange={e =>this.handleChange(e)} /></div>
                </div>
                <div id='filter-ML'>
                {
                    this.state.appear.map(e => <MethodLink title={e} />)
                }
                </div>
            </div>
        )
    }
}