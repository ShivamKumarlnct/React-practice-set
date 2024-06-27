// src/AboutUs.js

import React from 'react';
import './about.css'; 
const AboutUs = () => {
  return (
    <div className="about-us">
      <h1>About Us</h1>
      <p>
        Welcome to <strong>Sikasha Educational Website</strong>, where learning meets innovation!
      </p>

      <h2>Our Mission</h2>
      <p>
        At <strong>Sikasha Educational Website</strong>, our mission is to empower learners of all ages with the knowledge and skills needed to thrive in an ever-changing world. We believe that education is the cornerstone of personal and professional development, and we are committed to providing high-quality, accessible, and engaging educational resources to students, educators, and lifelong learners worldwide.
      </p>

      <h2>Who We Are</h2>
      <p>
        We are a passionate team of educators, technologists, and innovators dedicated to transforming the educational experience. Our diverse backgrounds and expertise converge to create a platform that caters to various learning styles and needs. From interactive lessons and comprehensive study materials to expert-led courses and hands-on activities, we strive to make learning a joyful and enriching experience.
      </p>

      <h2>What We Offer</h2>
      <ul>
        <li><strong>Interactive Courses:</strong> Explore a wide range of courses designed by experienced educators and industry professionals. Our courses cover subjects from STEM to humanities, providing a balanced and holistic education.</li>
        <li><strong>Study Resources:</strong> Access a rich library of study guides, practice exercises, and instructional videos tailored to support your academic journey.</li>
        <li><strong>Personalized Learning:</strong> Benefit from personalized learning paths that adapt to your pace and level, ensuring you master each topic before moving on.</li>
        <li><strong>Community Engagement:</strong> Join a vibrant community of learners and educators. Participate in discussions, share insights, and collaborate on projects to enhance your learning experience.</li>
        <li><strong>Expert Guidance:</strong> Get insights and guidance from experts in various fields through webinars, Q&A sessions, and mentorship programs.</li>
      </ul>

      <h2>Why Choose Us?</h2>
      <div className="why-choose-us">
        <div className="reason">
          <img src="https://img.freepik.com/free-vector/tiny-cute-children-learning-coding_74855-14175.jpg?t=st=1716149936~exp=1716153536~hmac=cf3e9c649491a73983f81e4b99d56668d7a0137e3709bca64b686f06a0f6f6e0&w=740" alt="Quality Content" />
          <p><strong>Quality Content:</strong> Our educational materials are meticulously crafted to ensure accuracy, relevance, and comprehensibility.</p>
        </div>
        <div className="reason">
          <img src="https://img.freepik.com/free-vector/web-accessibility-program-abstract-concept-illustration_335657-3885.jpg?t=st=1716149798~exp=1716153398~hmac=bd4092f36577dc1b20d0bbcbdc8b9c932183edb258b18b41bd42e36d3b14e33c&w=740" alt="Accessibility" />
          <p><strong>Accessibility:</strong> We believe education should be accessible to all. Our platform is designed to be user-friendly and inclusive, accommodating learners with diverse needs and backgrounds.</p>
        </div>
        <div className="reason">
          <img src="https://img.freepik.com/free-vector/programmers-concept-with-flat-design_23-2147860985.jpg?t=st=1716149862~exp=1716153462~hmac=7c2ce00043ba14e1716e38cc1e3d29af9359b435170a7221b8033bb6936e7e9b&w=740" alt="Innovation" />
          <p><strong>Innovation:</strong> We leverage the latest technology to create dynamic and interactive learning experiences that keep you engaged and motivated.</p>
        </div>
        <div className="reason">
          <img src="https://img.freepik.com/premium-vector/vector-illustration-concept-copywriter-business-landing-page-template_181313-1354.jpg?size=626&ext=jpg&ga=GA1.1.912945784.1708694498&semt=ais_user_b" alt="Supportive Environment" />
          <p><strong>Supportive Environment:</strong> Our supportive community and responsive support team are here to help you overcome challenges and achieve your learning goals.</p>
        </div>
      </div>

      <h2>Join Us Today</h2>
      <p>
        Whether you are a student looking to excel in your studies, a teacher seeking innovative resources, or a lifelong learner eager to explore new topics, <strong>Sikasha Educational Website</strong> is here to support your educational journey. Together, let's build a brighter future through the power of education.
      </p>
      <p>
        Discover more and start learning today at <a href="http://www.sikasha.com">www.sikasha.com</a>.
      </p>
    </div>
  );
};

export default AboutUs;
