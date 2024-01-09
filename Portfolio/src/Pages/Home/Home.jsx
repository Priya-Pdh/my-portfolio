import React, { useState } from 'react';
import { Box, Typography, Paper, Divider, CircularProgress } from '@mui/material';
import { styled } from '@mui/system';
import myImage from '../../assets/image-priya.jpg';
import data from '../../data.json';

const HomeContainer = styled('div')({
  textAlign: 'center',
  padding: '20px',
});

const ProfileImage = styled('img')({
  width: '200px',
  borderRadius: '5%',
});

const Title = styled('h1')({
  marginTop: '10px',
  fontSize: '24px',
  color: '#333',
});

const DescriptionContainer = styled(Paper)({
  marginTop: '20px',
  padding: '15px',
  maxWidth: '850px',
  marginLeft: 'auto',
  marginRight: 'auto',
});

const SpinnerContainer = styled(Box)({
  marginTop: '20px',
});

const Home = () => {
  const [imageLoaded, setImageLoaded] = useState(false);
  const { personalInfo } = data;

  const handleImageLoad = () => {
    setImageLoaded(true);
  };

  return (
    <HomeContainer>
      <ProfileImage
        src={myImage}
        alt="my Name"
        onLoad={handleImageLoad}
      />
      {!imageLoaded && (
        <SpinnerContainer>
          <CircularProgress />
        </SpinnerContainer>
      )}
      <Title>{personalInfo.title}</Title>

      <Box mt={2}>
        <DescriptionContainer elevation={3}>
          <Typography variant="h6">{personalInfo.summary}</Typography>
          <Divider />
          <Typography>{personalInfo.des01}</Typography>
          <Typography>{personalInfo.des02}</Typography>
        </DescriptionContainer>
      </Box>
    </HomeContainer>
  );
};

export default Home;
