import React, { useState, useEffect } from 'react';
import './middle.css';

export default function Middle() {
  const [counterValue, setCounterValue] = useState(0);
  const[count,setCount]=useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      if (counterValue < 1000) {
        setCounterValue(prevCounterValue => prevCounterValue + 1);
      } else {
        clearInterval(interval); 
      }
    }, 15);

    return () => clearInterval(interval); 
  }, [1k]);

useEffect(() => {
    const interval = setInterval(() => {
      if (count < 3000) {
        setCount(prevCounterValue => prevCounterValue + 1);
      } else {
        clearInterval(interval); 
      }
    }, 10);

    return () => clearInterval(interval); 
  }, [count]);

  return (
    <div className='middle'>
      <div className='seccontainer'>
        <div className='grid'>

          <span className='flex'>
            <h1><span id="counter">{counterValue}</span></h1>
            <p>JAVA language</p>
          </span>

          <span className='flex'>
       <h1><span id="counter">{count}</span></h1>
            <p>C++ language</p>
          </span>

          <span className='flex'>
            <h1>3K+</h1>
            <p>C language</p>
          </span>
           <span className='flex'>
            <h1>4K+</h1>
            <p>C# language</p>
          </span>

          <span className='flex'>
            <h1>1.2K+</h1>
            <p>PYTHON language</p>
          </span>
        </div>
      </div>
    </div>
  );
}
