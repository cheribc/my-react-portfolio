import React from 'react';

function About() {
  return (
    <section className="my-5">
      <div className="my-2">
        <div className="profile-img my-5">
        <i className="fas fa-user-circle" style={{ fontSize: "96px" }}></i>
        </div>
        <p>
        Hello! My name is Heather Cooper and I am a full-stack web developer in Atlanta, Georgia.
        </p>
        <p>
        I was born and raised near Pittsburgh, Pennsylvania.
        </p>
        <p>
        I am a pharmacist with several years of experience in different areas of patient healthcare, medical claims auditing, healthcare compliance, fraud control and prevention, and public health policy. I am completing a MERN full-stack bootcamp and I plan to use the web development skills that I have learned to transition to a more technology-focused career.
        </p>
        <p>
        I have always enjoyed creative writing, learning new technology, and traveling. I am completing my certification as a MERN full-stack web developer at Georgia Institute of Technology in Atlanta, Georgia and I am excited to apply the things that I have learned to teach other people that might be interested in changing careers or adding new skills to their current roles. 
        </p>
      </div>
    </section>
  );
}

export default About;