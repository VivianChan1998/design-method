import React from 'react'
import marked from "marked"
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
      <div className='MD-container'>
        <section className="MD">
          <article dangerouslySetInnerHTML={{__html: markdown}}></article>
        </section>
      </div>
      
    )
  }
}