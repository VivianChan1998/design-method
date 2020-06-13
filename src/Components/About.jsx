import React from 'react'
import img1 from '../img/team/01.jpg'
import img2 from '../img/team/02.jpg'
import img3 from '../img/team/03.jpg'
import img4 from '../img/team/04.jpg'
import img5 from '../img/team/05.jpg'
import img6 from '../img/team/06.jpg'
import MemberData from '../Data/Member.json'
import NavBar from './NavBar'
import './About.css'
const imgList = [img1, img2, img3, img4, img5, img6]

export default class Aboute extends React.Component{
    render(){
        return(
            <div>
                <NavBar />
                <h1>團隊成員</h1>
                {
                    MemberData['member'].map(e => 
                        <Member data={e} />
                    )
                }
            </div>
        )
    }
}

function Member(props){
    var data = props.data
    return(
        <div className='member-wrapper'>
            <div className='member-img-wrapper-outer'>
                <div className='member-img-wrapper'>
                    <img src={imgList[data.id]} />
                </div>
            </div>
            <div className='member-content'>
                <h3>{data['name']}</h3>
                <h6>{data['quote']}</h6>
                <p>{data['content']}</p>
            </div>
        </div>
    )
}