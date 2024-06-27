import React from 'react';
import "./question.css";
import { FaRegArrowAltCircleDown } from "react-icons/fa";

export default function Accordion({ title, desc, active, setActive }) {
  const isActive = active === title;

  const toggleAccordion = () => {
    setActive(isActive ? null : title);
  };

  return (
    <div className='accordionContainer'>
      <div className={`title flex ${isActive ? 'activeTitle' : ''}`}>
        {title}
        <span onClick={toggleAccordion}>
          <FaRegArrowAltCircleDown className='icon'/>
        </span>
      </div>

      <p className={`description ${isActive ? 'show' : ''}`}>
        {desc}
      </p>
    </div>
  );
}
