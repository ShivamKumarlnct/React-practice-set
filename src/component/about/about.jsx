import React from 'react';
import './about.css';

const courses = [
  { id: 1, name: 'Java', price: '$100', duration: '3 months' },
  { id: 2, name: 'SQL', price: '$80', duration: '2 months' },
  { id: 3, name: 'React JS', price: '$120', duration: '4 months' },
  { id: 4, name: 'Node.js', price: '$90', duration: '3 months' },
  { id: 5, name: 'Python', price: '$110', duration: '3 months' },
  { id: 6, name: 'HTML', price: '$10', duration: '1 months' },
  { id: 7, name: 'CSS', price: '$140', duration: '1 months' },
  { id: 8, name: 'JAVA-SCRIPT', price: '$210', duration: '3 months' },
  { id: 9, name: 'EXPRESS', price: '$90', duration: '1 months' },
  { id: 10, name: 'Mongoose', price: '$210', duration: '2 months' },
  { id: 11, name: 'DSA', price: '$400', duration: '6months' },

];

const AboutUs = () => {
  return (
    <div className="about-us">
      <h1 className="animated-title">About Us</h1>
      <p className="animated-text">
        Welcome to <strong>Sikasha Educational Website</strong>, where learning meets innovation!
      </p>

      <h2 className="animated-title">Our Courses</h2>
      <div className="courses-container">
        {courses.map(course => (
          <div className="course-card" key={course.id}>
           <a href="https://razorpay.me/@shivamkumar2807"><h3>{course.name}</h3></a>
            <p><strong>Price:</strong> {course.price}</p>
            <p><strong>Duration:</strong> {course.duration}</p>
          </div>
        ))}
      </div>

      <h2 className="animated-title">Our Mission</h2>
      <p className="animated-text">
        At <strong>Sikasha Educational Website</strong>, our mission is free education <strong>password:12345</strong> to empower learners of all ages with the knowledge and skills needed to thrive in an ever-changing world.
      </p>

    </div>
  );
};

export default AboutUs;
