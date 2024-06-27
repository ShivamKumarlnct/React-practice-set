import React, { useState } from 'react';
import './question.css';
import Accordion from './accordion';

export default function Question() {
  const [active, setActive] = useState('How do I choose the right coding for me?');

  return (
    <div className='question section container'>
      <div className='secHeading'>
        <h3>Frequently Asked Questions</h3>
      </div>
      <div className='seccontainer grid'>
        <div className='accordion grid'> 
          <Accordion
            title="How do I choose the right coding for me?"
            desc="Programming Code: This is the most common meaning of 'code'. It refers to a set of instructions written in a programming language that tells a computer what to do. These instructions can range from simple tasks like adding numbers to complex operations like running an entire application or website.
    Source Code: This is the human-readable form of code written by programmers. 
    "  active={active}
            setActive={setActive} // Corrected prop name
          />
          <Accordion
            title="How do I choose the right coding for me?"
            desc="Programming Code: This is the most common meaning of 'code'. It refers to a set of instructions written in a programming language that tells a computer what to do. These instructions can range from simple tasks like adding numbers to complex operations like running an entire application or website.
    Source Code: This is the human-readable form of code written by programmers. 
    "  active={active}
            setActive={setActive} 
          />
        </div>
        <div className='form'>
          <div className='secHeading'>
            <h4>Do you have any specific questions?</h4>
            <p>Please fill out the form below, and our dedicated team will get in touch with you as soon as possible.</p>
          </div>
          <div className='formContent grid'>
            <input type='email' placeholder='Enter email address' />
            <textarea placeholder='Enter your question'></textarea>
            <button className='btn'>Submit Inquiry</button>
          </div>
        </div>
      </div>
    </div>
  );
}
