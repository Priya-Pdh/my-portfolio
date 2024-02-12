import React, { useState } from 'react';
import { Box, Typography, Paper, Grid, Accordion, AccordionSummary, AccordionDetails } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
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
};

const softSkillIcons = {
  Communication: "🗣️",
  Teamwork: "🤝",
  Collaboration: "👫👫",
  Enthusiasm: "🙌",
  'Quick Learner': "🧠",
  'Problem Solving': "🕵🏼‍♀️",
};

const Skills = () => {
  const { skills } = data;
  const [techExpanded, setTechExpanded] = useState(false);
  const [softExpanded, setSoftExpanded] = useState(false);

  const handleTechToggle = () => {
    setTechExpanded((prevExpanded) => !prevExpanded);
  };

  const handleSoftToggle = () => {
    setSoftExpanded((prevExpanded) => !prevExpanded);
  };

  return (
    <Box my={4}>
      <Typography variant="h4" sx={{ textAlign: 'center', marginBottom: '2rem', fontSize: { xs: "20px", sm: "26px", md: "28px", lg: "30px" } }}>
        Skills 🪄
      </Typography>
      <Accordion expanded={techExpanded} onChange={handleTechToggle}  sx={{ backgroundColor: '#f8f8f8' }}>
        <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="tech-skills-content" id="tech-skills-header">
          <Typography variant="h6">Techical Skills</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Grid container spacing={3}>
            {skills.techSkills.map((skill, index) => (
              <Grid item xs={12} sm={6} md={4} lg={3} key={index}>
                <Paper>
                  {skillIcons[skill] && <span>{skillIcons[skill]}</span>}
                  <Typography variant="subtitle1" mb={2} fontWeight="bold" color="primary">
                    {skill}
                  </Typography>
                </Paper>
              </Grid>
            ))}
          </Grid>
        </AccordionDetails>
      </Accordion>

      <Accordion expanded={softExpanded} onChange={handleSoftToggle}  sx={{ backgroundColor: '#f8f8f8' }}>
        <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="soft-skills-content" id="soft-skills-header">
          <Typography variant="h6">Soft Skills</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Grid container spacing={3}>
            {skills.softSkills.map((skill, index) => (
              <Grid item xs={12} sm={6} md={4} lg={3} key={index}>
                <Paper>
                  {softSkillIcons[skill] && <span>{softSkillIcons[skill]}</span>}
                  <Typography variant="subtitle1" mb={2} fontWeight="bold" color="primary">
                    {skill}
                  </Typography>
                </Paper>
              </Grid>
            ))}
          </Grid>
        </AccordionDetails>
      </Accordion>
    </Box>
  );
}

export default Skills;
