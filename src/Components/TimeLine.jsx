import React from 'react'
import Data from '../Data/Index.json'
import MethodLink from './MethodLink'
import './TimeLine.css'

export default class TimeLine extends React.Component{
    render(){
        var TimeLineTitles = Object.keys(Data['time-line'])
        console.log(TimeLineTitles)
        return(
            <div className='TL-wrapper'>
                <h2 className='home-title'>依照設計流程列出全部方法</h2>
                <div className='TL-line'></div>
                {
                    TimeLineTitles.map((e, idx) =>
                        <div className='TL-level'>
                            <div className={`TL-icon url-${idx+1}`}></div>
                            <h3>{e}{/*<span>⋁</span>*/}</h3>
                            <div className='TL-method-wrapper'>
                                
                                {
                                    Data['time-line'][e].map(e => 
                                        <MethodLink title={e} />
                                    )
                                }
                            </div>
                        </div>
                    )
                }
            </div>
        )
    }
}
