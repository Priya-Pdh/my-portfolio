import React from 'react';
import { Box, Typography, List, ListItem, Paper, Grid } from '@mui/material';
import {
  FaReact,
  FaJs,
  FaCss3,
  FaHtml5,
  FaNode,
  FaMobileAlt,
  FaSass,
  FaCode,
  FaToolbox,
  FaGitAlt,
  FaPalette,
  FaGlobe,
  FaRocket,
  FaUniversalAccess,
  FaServer,
  FaLayerGroup,
  FaCss3Alt,
  FaAws,
  FaDocker,
} from 'react-icons/fa';
import { SiGraphql } from 'react-icons/si';

import data from '../../data.json';

const skillIcons = {
  'React.js': <FaReact />,
  JavaScript: <FaJs />,
  CSS: <FaCss3 />,
  HTML: <FaHtml5 />,
  AWS: <FaAws />,
  Docker: <FaDocker />,
  GraphQl: <SiGraphql />,
  'Node.js': <FaNode />,
  'Responsive Web Design': <FaMobileAlt />,
  'Sass/SCSS': <FaSass />,
  'CSS-in-JS (e.g., styled-components)': <FaCode />,
  'Frontend Build Tools (Webpack, Vite)': <FaToolbox />,
  'Version Control (Git)': <FaGitAlt />,
  'UI/UX Design Principles': <FaPalette />,
  'Cross-browser Compatibility': <FaGlobe />,
  'Performance Optimization': <FaRocket />,
  'Web Accessibility (WCAG)': <FaUniversalAccess />,
  'RESTful APIs': <FaServer />,
  'State Management (Redux)': <FaLayerGroup />,
  'Responsive Frameworks (Tailwind CSS)': <FaCss3Alt />,
  // 'Material-Ui': <SiMaterialUi />,
};

function Skills() {
  const { skills } = data;

  return (
    <Box my={4}>
      <Typography variant="h4" gutterBottom>
        Skills
      </Typography>
      <Grid container spacing={3}>
        {skills.map((skill, index) => (
          <Grid item xs={12} sm={6} md={4} lg={3} key={index}>
            <Paper elevation={3} className="text-center p-4">
              {skillIcons[skill] && <span className="text-5xl mb-4">{skillIcons[skill]}</span>}
              <Typography variant="subtitle1" className="mb-2 font-semibold">
                {skill}
              </Typography>
            </Paper>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}

export default Skills;
