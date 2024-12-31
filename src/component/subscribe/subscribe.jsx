import React from 'react'
import "./subscribe.css"
import Hacker from "../../assets/hacker.png"

export default function subscribe() {
  return (
    <div className='subscribe section container'>
      <div className='secContainer grid'>
        <img src={Hacker}alt='Div Image'></img>

      <div className='textDiv'>
        <h4>BEST WAY TO START YOUR CODING JOURNEY</h4>
        <p>Choose a Language,Set Goals,Start with Fundamentals,Hands-On Practice,Utilize Online Resources,Join Coding Communities,Build Projects,Seek Help When Needed,Stay Persistent and Patient,Celebrate Your Progress!</p>
        <button className='btn'><a href='https://mega.nz/folder/hv0QzCxb#fKq4aFktSpcdN_oelWgWNg'>start hear</a></button>

      </div>
      </div>
    </div>
  )
}
