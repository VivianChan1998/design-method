import React from 'react'
import Data from '../Data/Index.json'
import MethodLink from './MethodLink'
import Fade from 'react-reveal/Fade';
import './TimeLine.css'

const methodIntro = [
    "針對想要解決的問題，從自身經驗及過往觀察出發，揣摩需求找到出發點。",
    "走進實際場域，了解真實情況並加以分析。",
    "將資料歸納整理，更進一步訂定方向。",
    "對提出的題目發想各種解決方法、創意提案。",
    "將前面的步驟所得到的資訊統整，成為一份完整的研究結果。",
    "將結果實際呈現給客戶、發表對象，並將議題、價值等等清楚呈現。"
]

export default class TimeLine extends React.Component{
    constructor(){
        super()
        this.state = {
            isOpen: [false, false,false,false,false,false]
        }
    }
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
                            <h3 onClick={
                                () => {
                                    var isOpen = this.state.isOpen
                                    isOpen[idx] = !isOpen[idx]
                                    this.setState({isOpen: isOpen})
                                }
                            }>{e}<span>⋁</span></h3>
                            {
                                this.state.isOpen[idx]?
                                <Fade top>
                                    <div className='TL-state'>
                                        {methodIntro[idx]}
                                    </div>
                                    
                                </Fade> : ''
                            }
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
