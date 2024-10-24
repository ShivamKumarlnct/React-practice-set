import React from 'react';
import "./destination.css";
import { SiSkillshare } from "react-icons/si";
import { FaReact } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io";
import { CiSearch } from "react-icons/ci";
import { GrDocumentNotes } from "react-icons/gr";

import Html from "../../assets/html.jpg";
import Java from "../../assets/java.jpg";
import Node from "../../assets/node.jpg";
import Reacts from "../../assets/reacts.jpg";
import Python from "../../assets/python.jpg";

const destinations = [
  { id: 1, img: Html, name: 'HTML', rating: 6 },
  { id: 2, img: Java, name: 'Java', rating: 6.5 },
  { id: 3, img: Node, name: 'Node', rating: 7 },
  { id: 4, img: Reacts, name: 'React', rating: 6.5 },
  { id: 5, img: Python, name: 'Python', rating: 9.5 },
];

export default function Destination() {
  return (
    <div className="destination">
      <div className="seccontainer">
        <div className="header">
          <span className="redtext">EXPLORE NOW</span>
          <h3>Find Your Dream Code</h3>
          <p>Fill in the field below to find the best code for your next skill</p>
        </div>
        <div className="searchfield grid">
          <div className="inputfield flex">
            <SiSkillshare className='icon' />
            <input type='text' placeholder='Skill' />
          </div>
          <div className="inputfield flex">
            <FaReact className='icon' />
            <input type='text' placeholder='Skill' />
          </div>
          <div className="inputfield flex">
            <IoLogoJavascript className='icon' />
            <input type='text' placeholder='Skill' />
          </div>
          <button className='btn flex'>
            <CiSearch className='icon' />
            Search
          </button>
        </div>
        <div className='secmenu'>
  <ul className='flex'>
    <li className='active'>
      <a href="/path-to-all-skills.pdf" download="All_Skills.pdf">ALL</a>
    </li>
    <li>
      <a href="/path-to-c.pdf" download="C_Programming.pdf">C</a>
    </li>
    <li>
      <a href="/path-to-cpp.pdf" download="C++_Programming.pdf">C++</a>
    </li>
    <li>
      <a href="/SQL.pdf" download="SQL_Programming.pdf">SQL</a>
    </li>
    <li>
      <a href="/Java Important Notes.pdf" download="JAVA_Programming.pdf">JAVA</a>
    </li>
    <li>
      <a href="/path-to-html.pdf" download="HTML.pdf">HTML</a>
    </li>
    <li>
      <a href="/CSS.pdf" download="CSS.pdf">CSS</a>
    </li>
    <li>
      <a href="/jspro.pdf" download="JavaScript.pdf">JAVASCRIPT</a>
    </li>
    <li>
      <a href="/React.pdf" download="ReactJS.pdf">REACT.JS</a>
    </li>
    <li>
      <a href="/Node Questions.pdf" download="NodeJS.pdf">NODE.JS</a>
    </li>
    <li>
      <a href="/express.pdf" download="Express.pdf">EXPRESS</a>
    </li>
  </ul>
</div>


        <div className='destinationcontainer grid'>
          {destinations.map(destination => (
            <div className='singledestination' key={destination.id}>
              <div className='imgdiv'>
                <img src={destination.img} alt={destination.name} />
                <div className='descinfo flex'>
                  <div className="text">
                    <span className="name">{destination.name}</span>
                    <p className="flex">
                      <GrDocumentNotes className='icon' />
                      {destination.name}
                    </p>
                  </div>
                  <span className='rating'>{destination.rating}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
