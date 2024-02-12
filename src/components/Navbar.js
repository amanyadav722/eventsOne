import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Container = styled.div`
  margin: 0;
  padding: 0;
`;

const Left = styled.div`
  flex: 1;
`;
const TopLogo = styled.div`
  margin-left: 20px;

  h1 {
    font-size: 65px;
    color: green;
  }
`;

const Center = styled.div`
  flex: 2;
`;

const Nav = styled.nav`
  background-color: #333;
  overflow: hidden;
  &:icon{
    display: none;
  }
`;

const StyledLink = styled(Link)`
float: left;
  display: block;
  color: #f2f2f2;
  text-align: center;
  padding: 14px 16px;
  text-decoration: none;
  font-size: 15px;

  &:hover {
     
    background-color: #ddd;
  color: black;
  }

  &:active {
    background-color: #04AA6D;
  color: white;
  }

  @media screen and (max-width: 600px) {
  StyledLink:not(:first-child) {display: none;}
  StyledLink.icon {
    float: right;
    display: block;
  }
}
`;

const Right = styled.div`
  flex: 1;
  vertical-align: "middle"
`;
const Search = styled.div``;
const SwitchLanguage = styled.div``;

const Navbar = () => {
  return (
    <Container>
      <Left>
        <TopLogo>
          <h1>Amn</h1>
        </TopLogo>
      </Left>
      <Center>
        <Nav>
  
              <StyledLink>QUI SOMMES-NOUS</StyledLink>
              <StyledLink>NOTRE EXPERTISE</StyledLink>
              <StyledLink>NOUS JOINDRE</StyledLink>
              <StyledLink>INSIDE AMN</StyledLink>
              <StyledLink>NOTRE COSYSTEM</StyledLink>
              <StyledLink>L'ACTU</StyledLink>
              <StyledLink>CONTACT</StyledLink>
           
        </Nav>
      </Center>
      <Right>
        <Search></Search>
        <SwitchLanguage></SwitchLanguage>
      </Right>
    </Container>
  );
};

export default Navbar;
