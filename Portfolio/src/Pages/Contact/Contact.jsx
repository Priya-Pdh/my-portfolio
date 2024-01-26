import React from 'react';
import { Box, Card, CardContent, Typography, Divider, List, ListItem, ListItemIcon, ListItemText, Link, Grid } from '@mui/material';
import { FaMapMarkerAlt, FaEnvelope, FaLinkedin, FaGithub } from 'react-icons/fa';
import data from '../../data.json';

function Contact() {
  const { contactInfo } = data;

  return (
    <Box my={4} textAlign="center" sx={{ marginTop: '100px' }}>
      <Grid container justifyContent="center">
        <Grid item xs={12} sm={8} md={6} lg={4}>
          <Card elevation={3} sx={{ margin: 'auto', width: '100%' }}>
            <CardContent>
              <Typography variant="h4" mb={2}>
                Contact Information 📞
                <Divider />
              </Typography>
              <List>
                <ListItem>
                  <ListItemIcon>
                    <FaMapMarkerAlt />
                  </ListItemIcon>
                  <ListItemText primary={`Location: ${contactInfo.location}`} primaryTypographyProps={{ color: 'primary' }} />
                </ListItem>
                <ListItem>
                  <ListItemIcon>
                    <FaEnvelope />
                  </ListItemIcon>
                  <ListItemText primary={`Email: ${contactInfo.email}`} primaryTypographyProps={{ color: 'primary' }} />
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
                      color="primary"
                      underline="hover"
                    >
                      Github
                    </Link>
                  </ListItemText>
                </ListItem>
              </List>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Box>
  );
}

export default Contact;
