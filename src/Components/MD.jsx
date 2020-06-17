import React from 'react'
import marked from "marked"
import {Link} from 'react-router-dom'
import {Tag} from './Tags'
import NavBar from './NavBar'
import Data from '../Data/Index.json'
import './MD.css'

export default class MD extends React.Component{
  constructor(props){
    super(props)
    this.state = {}
  }
  componentDidMount() {
      console.log(`../Data/md/${this.props.mdURL}`)
    const readmePath = require(`../Data/md/${this.props.mdURL}.md`);
    fetch(readmePath)
      .then(response => {
        return response.text()
      })
      .then(text => {
        this.setState({
          markdown: marked(text)
        })
      })
  }
  render(){
    const { markdown } = this.state;
    return (
      <div>
        <NavBar />
        <div className='MD-container'>
          <div>
            {
              Data['content'][this.props.mdURL]['tag'].map(e => 
                <Tag id={e}/>
            )
            }
          </div>
          <section className="MD">
            <article dangerouslySetInnerHTML={{__html: markdown}}></article>
          </section>
        </div>
        <Link to='/home' className='button back'>
            回到上頁
        </Link>
      </div>
      
    )
  }
}