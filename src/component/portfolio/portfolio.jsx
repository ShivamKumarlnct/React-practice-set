import React from 'react'
import "./portfolio.css"
import Java from "../../assets/image1.jpg";
import Image from "../../assets/image.png"
import Image2 from "../../assets/image2.png"
import Image3 from "../../assets/image3.png"


export default function portfolio() {
  return (
    <div className='portfolio section container '>
      <div className='secContainer grid'>
        <div className='leftContent'>
            <div className='secHeading'>
                <h3>Why should you choose Us</h3>
                <p>We have extensive Knowledge and experience in the Coding</p>
            </div>

            <div className='grid'>
                <div className="singleportfolio flex">
                    <div className='iconDiv'>
                        <img src={Java}alt='icon img'></img>
                    </div>
                    <div className='infor'>
                        <h4>Consistency</h4>
                        <p>Consistently setting aside time to learn new concepts, languages, or frameworks keeps your skills sharp and your knowledge up to date. Whether it's dedicating an hour every day or a few hours each week, regular practice reinforces learning and builds momentum.</p>
                    </div>
                </div>
                <div className="singleportfolio flex">
                    <div className='iconDiv'>
                        <img src={Image}alt='icon img'></img>
                    </div>
                    <div className='infor'>
                        <h4>Efficiency </h4>
                        <p>Performance: Efficient code runs faster and consumes fewer resources, leading to better performance of applications and systems.
                          Scalability: Well-structured and efficient code is easier to scale, allowing it to handle increased workload or users without significant performance degradation.</p>
                    </div>
                </div>
                <div className="singleportfolio flex">
                    <div className='iconDiv'>
                        <img src={Image2}alt='icon img'></img>
                    </div>
                    <div className='infor'>
                        <h4>Focus </h4>
                        <p>focusing in coding involves setting clear goals, prioritizing tasks, managing time effectively, eliminating distractions, engaging in deep work, single-tasking, taking regular breaks, and seeking feedback for continuous improvement.</p>
                    </div>
                </div>

            </div>
        </div>
        <div className='rightcontent'>
            <img src={Image3}alt='images'></img>
        </div>
      </div>
    </div>
  )
}
