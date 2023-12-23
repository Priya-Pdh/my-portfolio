import React from 'react';
import { Box, Typography, Link } from '@mui/material';
import { FaMapMarkerAlt, FaEnvelope, FaLinkedin, FaGithub } from 'react-icons/fa';
import data from '../../data.json';

function Contact() {
  const { contactInfo } = data;

  return (
    <Box my={4}>
      <Typography variant="h4" gutterBottom>
        Contact Information
      </Typography>
      <Box>
        <Typography variant="body1" color="text.secondary" paragraph>
          <FaMapMarkerAlt style={{ marginRight: '8px' }} />
          Location: <strong>{contactInfo.location}</strong>
        </Typography>
        <Typography variant="body1" color="text.secondary" paragraph>
          <FaEnvelope style={{ marginRight: '8px' }} />
          Email: <strong>{contactInfo.email}</strong>
        </Typography>
        <Link
          href={contactInfo.linkedin}
          target="_blank"
          rel="noopener noreferrer"
          color="primary"
          underline="hover"
          paragraph
        >
          <FaLinkedin style={{ marginRight: '8px' }} />
          LinkedIn
        </Link>
        <Typography variant="body1" color="text.secondary" paragraph>
          <FaGithub style={{ marginRight: '8px' }} />
          GitHub: <strong>{contactInfo.github}</strong>
        </Typography>
      </Box>
    </Box>
  );
}

export default Contact;
