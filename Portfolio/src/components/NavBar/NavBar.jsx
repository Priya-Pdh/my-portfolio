import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const StyledNavbar = styled.nav`
  background-color: #333;
`;

const StyledUl = styled.ul`
  list-style-type: none;
  margin: 0;
  padding: 0;
  display: flex;
  justify-content: flex-end;
`;

const StyledLi = styled.li`
  margin-left: 15px;
`;

const StyledLink = styled(Link)`
  display: block;
  color: white;
  text-align: center;
  padding: 14px 16px;
  text-decoration: none;

  &:hover {
    background-color: #555;
  }
`;

const Navbar = () => {
  return (
    <StyledNavbar>
      <StyledUl>
        <StyledLi>
          <StyledLink to="/">Home</StyledLink>
        </StyledLi>
        <StyledLi>
          <StyledLink to="/project">Project</StyledLink>
        </StyledLi>
        <StyledLi>
          <StyledLink to="/education">Education</StyledLink>
        </StyledLi>
        <StyledLi>
          <StyledLink to="/skills">Skills</StyledLink>
        </StyledLi>
        <StyledLi>
          <StyledLink to="/contact">Contact</StyledLink>
        </StyledLi>
      </StyledUl>
    </StyledNavbar>
  );
};

export default Navbar;
