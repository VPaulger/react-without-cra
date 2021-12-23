import React from 'react'

const About = ({ name } : { name: string }) => {
  return (
    <div>
      <h2>About</h2>
      <p>{name}</p>
    </div>
  );
};

export default About;