import React from 'react';
import styled from 'styled-components';
import myImage from '../../assets/image-priya.jpg';
import data from '../../data.json';

const HomeContainer = styled.div`
  text-align: center;
  padding: 20px;
`;

const ProfileImage = styled.img`
  width: 200px; /* Adjust the width as needed */
  border-radius: 5%; /* Make the image round */
`;

const Title = styled.h1`
  margin-top: 10px;
  font-size: 24px;
  color: #333;
`;

const Home = () => {
  const { Home } = data
  return (
    <HomeContainer>
      <ProfileImage src={myImage} alt="my Name" />
      <Title>Front-End Developer</Title>
    </HomeContainer>
  );
};

export default Home;

// import Skills from './Skills';
// import Education from './Education';
// import ContactInfo from './ContactInfo';
// import Project from './Project';
// import data from '../data.json';

// function Home() {
//   const { personalInfo, projects, skills, education, contactInfo } = data;

//   return (
//     <div>
//       <p>Hello</p>
//       <Header personalInfo={personalInfo} />

//       <Project projects={projects} />

//       <Skills skills={skills} />

//       <Education education={education} />

//       <ContactInfo contactInfo={contactInfo} />
//     </div>
//   );
// }

// export default Home;
