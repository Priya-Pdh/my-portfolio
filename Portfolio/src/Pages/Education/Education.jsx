import React, { useState, useEffect, useRef } from 'react';
import { Box, Typography, Paper, Link, CircularProgress } from '@mui/material';
import Slider from 'react-slick';
import { ArrowBack, ArrowForward } from '@mui/icons-material'; // Import Material-UI icons
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import data from '../../data.json';
import { getImagePath } from '../../assets/getImagePath';

function Education() {
  const { education } = data;
  const [imagesLoaded, setImagesLoaded] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);
  const sliderRef = useRef(null);

  useEffect(() => {
    const imagePromises = education.map((edu) => {
      const img = new Image();
      return new Promise((resolve) => {
        img.onload = resolve;
        img.src = getImagePath(edu.logo);
      });
    });

    Promise.all(imagePromises).then(() => {
      setImagesLoaded(true);
    });
  }, [education]);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <ArrowForward />,
    prevArrow: <ArrowBack />, 
    customPaging: (i) => (
      <div style={{ width: '10px', height: '10px', background: i === currentSlide ? '#007bff' : '#888', borderRadius: '50%', margin: '0 5px' }}></div>
    ),
    beforeChange: (current, next) => setCurrentSlide(next),
  };

  const handleNext = () => {
    sliderRef.current.slickNext();
  };

  const handlePrev = () => {
    sliderRef.current.slickPrev();
  };

  return (
    <Box my={4} position="relative" sx={{width:{ xs: "290px", sm: "540px", md: "600px", lg:"700px"}, height: "150px", margin: "auto"  }} >
      <Typography variant="h4" sx={{ textAlign: 'center', marginBottom: '5rem', marginTop: "2rem", fontSize: {xs: "20px", sm:" 26px", md: "28px", lg: "30px"}}}>
        Education 🎓
      </Typography>
      {imagesLoaded ? (
        <>
          <Slider ref={sliderRef} {...settings}>
            {education.map((edu, index) => (
              <Paper key={index} elevation={3} sx={{ marginBottom: 2, boxShadow: '1px 2px 4px rgba(0, 0, 0, 0.1)', backgroundColor: '#f8f8f8' }}>
                <Box display="flex" alignItems="center" height="150px">
                  <img src={getImagePath(edu.logo)} alt={edu.name} style={{ marginRight: '16px', width: '120px', height: '90px',  marginLeft :  "20px" }} />
                  <Box >
                    <Typography variant="h6" gutterBottom sx={{ fontSize: {xs: '14px', sm: '16px', md:'18px', lg:'23px',}}}>
                      {edu.name}
                    </Typography>
                    <Typography variant="body1" color="text.secondary" sx={{ fontSize: {xs: "12px", md: "16px", lg: "18px"}}}>
                      {edu.subject}
                    </Typography>
                  </Box>
                </Box>
                <Link href={edu.website} target="_blank" rel="noopener noreferrer" color="primary" underline="hover" sx={{ fontSize: {xs: '12px', md:"14px", lg: "16px"}, paddingLeft : { xs: '20px', sm:'20px' }}}>
                 {edu.name}
                </Link>
              </Paper>
            ))}
          </Slider>
          {/* Additional arrows in the corners */}
          <ArrowBack
            sx={{
              position: 'absolute',
              top: '50%',
              left: '10px',
              transform: 'translateY(-50%)',
              cursor: 'pointer',
              color: 'rgba(0, 0, 0, 0.54);'
            }}
            onClick={handlePrev}
          />
          <ArrowForward
            sx={{
              position: 'absolute',
              top: '50%',
              right: '10px',
              transform: 'translateY(-50%)',
              cursor: 'pointer',
              color: 'rgba(0, 0, 0, 0.54)'
            }}
            onClick={handleNext}
          />
        </>
      ) : (
        <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100px' }}>
          <CircularProgress />
        </Box>
      )}
    </Box>
  );
}

export default Education;
