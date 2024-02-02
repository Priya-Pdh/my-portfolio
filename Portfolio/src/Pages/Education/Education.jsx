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
    nextArrow: <ArrowForward />, // Custom right arrow
    prevArrow: <ArrowBack />, // Custom left arrow
    customPaging: (i) => (
      <div style={{ width: '10px', height: '10px', background: '#888', borderRadius: '50%', margin: '0 5px' }}></div>
    ), // Custom dots
  };

  const handleNext = () => {
    sliderRef.current.slickNext();
  };

  const handlePrev = () => {
    sliderRef.current.slickPrev();
  };

  return (
    <Box my={4} position="relative" sx={{width: "700px", height: "200px", margin: "auto"  }}>
      <Typography variant="h4" sx={{ textAlign: 'center', marginBottom: '5rem', marginTop: "2rem" }}>
        Education 🎓
      </Typography>
      {imagesLoaded ? (
        <>
          <Slider ref={sliderRef} {...settings}>
            {education.map((edu, index) => (
              <Paper key={index} elevation={3} sx={{ padding: 2, marginBottom: 2, boxShadow: '1px 2px 4px rgba(0, 0, 0, 0.1)', backgroundColor: '#f8f8f8' }}>
                <Box display="flex" alignItems="center">
                  <img src={getImagePath(edu.logo)} alt={edu.name} style={{ marginRight: '16px', width: '120px', height: '90px' }} />
                  <Box>
                    <Typography variant="h6" gutterBottom>
                      {edu.name}
                    </Typography>
                    <Typography variant="body1" color="text.secondary">
                      {edu.subject}
                    </Typography>
                  </Box>
                </Box>
                <Link href={edu.website} target="_blank" rel="noopener noreferrer" color="primary" underline="hover">
                  Visit {edu.name}
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
              color: 'rgba(0, 0, 0, 0.54);'
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
