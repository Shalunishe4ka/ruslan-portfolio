import React from 'react';
import { MySkills } from './SkillsList';
import "./Skills.css";

export const SkillsCards = () => {
  return (
    <div className='skills-card'>
      {MySkills.map((skill) => (
        <div key={skill.id} className='skills-card-div'>
            <div className='skill-card-subdiv'>
          <h1>{skill.name}</h1>
          <p>{skill.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
};