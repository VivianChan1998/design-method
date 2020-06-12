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
    handleChange(e){
        var content = Data['all']
        var sel = e==null? [] : e.map(e => e.value)
        console.log(sel)

        for(var i=0; i<sel.length; ++i){
            content = content.filter(e => Content[e]['tag'].includes(sel[i]))
        }

        console.log(content)
        this.setState({
            selected: sel,
            appear: content
        })
    }
    render(){
        console.log(this.state.appear)
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