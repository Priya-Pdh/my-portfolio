import React from 'react';
import { Box, Card, CardContent, Typography, Divider, List, ListItem, ListItemIcon, ListItemText, Link, Grid } from '@mui/material';
import { FaMapMarkerAlt, FaEnvelope, FaLinkedin, FaGithub } from 'react-icons/fa';
import data from '../../data.json';
import Phone from '../../animations/phone.json';
import Lottie from 'lottie-react'

function Contact() {
  const { contactInfo } = data;

  return (
    <Box my={4} textAlign="center" sx={{ marginTop: { sm: "50px", md: "80px", lg: '100px'}}}>
      <Grid container justifyContent="center">
        <Grid item xs={12} sm={8} md={6} lg={4}>
          <Box
            border="0 solid #ccc"
            borderRadius="30px"
            p="30px"
            boxShadow="0px 4px 10px rgba(0, 0, 0, 0.1)"
          >
            <Card elevation={0} sx={{ backgroundColor: 'transparent' }}>
              <CardContent>
                <Typography variant="h4" mb={2} sx={{ fontSize: { xs: "20px", sm: "26px", md: "28px", lg: "30px" }, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  Contact Information 
                  <Lottie animationData={Phone} style={{ width: '80px', height: '80px', marginLeft: '10px' }} loop={1} />
                </Typography>
                <Divider />
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
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
}

export default Contact;
