import React from 'react';
import data from '../../data.json';

function Skills() {
   const { skills } = data;
  return (
    <section className="my-8">
      <h2 className="text-2xl font-bold">Skills</h2>
      <ul className="list-disc list-inside">
        {skills.map((skill, index) => (
          <li key={index} className="text-gray-600">
            {skill}
          </li>
        ))}
      </ul>
    </section>
  );
}

export default Skills;