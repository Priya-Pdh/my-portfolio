import React from 'react';
import { Box, Typography, List, ListItem, ListItemIcon, ListItemText, Link } from '@mui/material';
import { FaMapMarkerAlt, FaEnvelope, FaLinkedin, FaGithub } from 'react-icons/fa';
import data from '../../data.json';

function Contact() {
  const { contactInfo } = data;

  return (
    <Box my={4} textAlign={"center"}>
      <Typography variant="h4" mb={2}>
        Contact Information 📞
      </Typography>
      <Box  sx={{display: "flex", justifyContent: "center"}}>
      <List>
        <ListItem>
          <ListItemIcon>
            <FaMapMarkerAlt />
          </ListItemIcon>
          <ListItemText primary={`Location: ${contactInfo.location}`} />
        </ListItem>
        <ListItem>
          <ListItemIcon>
            <FaEnvelope />
          </ListItemIcon>
          <ListItemText primary={`Email: ${contactInfo.email}`} />
        </ListItem>
        <ListItem>
          <ListItemIcon>
            <FaLinkedin />
          </ListItemIcon>
          <ListItemText>
            <Link
              href={contactInfo.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              color="primary"
              underline="hover"
            >
              LinkedIn
            </Link>
          </ListItemText>
        </ListItem>
        <ListItem>
          <ListItemIcon>
            <FaGithub />
          </ListItemIcon>
          <ListItemText>
            <Link
              href={contactInfo.github}
              target="_blank"
              rel="noopener noreferrer"
              color="black"
              underline="hover"
            >
              Github
            </Link>
          </ListItemText>
        </ListItem>
      </List>
      </Box>
    </Box>
  );
}

export default Contact;
