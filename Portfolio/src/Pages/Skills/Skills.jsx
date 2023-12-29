import { Box, Typography, Paper, Grid } from '@mui/material';
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

const useStyles = {
  paper: {
    textAlign: 'center',
    padding: '5px',
    elevation: 3,
  },
  icon: {
    fontSize: '5rem',
    marginBottom: '1rem',
  },
};

function Skills() {
  const { skills } = data;

  return (
    <Box my={4}>
      <Typography variant="h4"  sx= {{ textAlign: 'center'}}>
        Skills 🪄
      </Typography>
      <Grid container spacing={3}>
        {skills.map((skill, index) => (
          <Grid item xs={12} sm={6} md={4} lg={3} key={index}>
            <Paper sx={useStyles.paper}>
              {skillIcons[skill] && (
                <span sx={useStyles.icon}>{skillIcons[skill]}</span>
              )}
              <Typography variant="subtitle1" mb={2} fontWeight="bold">
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
