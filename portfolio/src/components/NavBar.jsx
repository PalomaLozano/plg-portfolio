import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import Logo from '../assets/logo.png';
import { FaBars } from 'react-icons/fa';

const Navbar = () => {
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  const Container = styled.div`
    width: 100%;
    height: 70px;
    background-color: black;
    border-bottom: 1px solid white;
    box-shadow: inset 0 -1px 0 0px #925cff;
    @media screen and (max-width: 1040px) {
      background-color: black;
    }
  `;
  const Wrapper = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    margin: auto;
  `;
  const Image = styled.img`
    height: 35px;
    width: 35px;
    cursor: pointer;
  `;
  const LogoContainer = styled.div`
    margin-left: 0.5rem;
    display: flex;
    align-items: center;
    padding-left: 10px;
    font-size: 1.2rem;
    font-size: 2rem;
  `;
  const Menu = styled.ul`
    display: flex;
    justify-content: space-between;
    overflow: hidden;
    list-style: none;
    z-index: 90;
    padding: 5px;
    @media screen and (max-width: 1040px) {
      position: absolute;
      top: 70px;
      left: ${({ open }) => (open ? '0' : '-100%')};
      width: 100%;
      height: 100vh;
      justify-content: center;
      flex-direction: column;
      align-items: center;
      transition: 0.5s all ease;
      background-color: black;
    }
  `;
  const MenuItem = styled.li`
    height: 100%;
    @media screen and (max-width: 1040px) {
      width: 100%;
      height: 70px;
      display: flex;
      justify-content: center;
      align-items: center;
      cursor: pointer;
    }
  `;
  const MenuItemLink = styled.a`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
    padding: 0.5rem 2.5rem;
    font-size: 1rem;
    color: black;
    cursor: pointer;
    transition: 0.5s all ease;
    border-radius: 5px;
  `;

  const Mobile = styled.div`
    display: none;
    padding-right: 20px;
    font-size: 25px;
    @media screen and (max-width: 1040px) {
      display: flex;
      align-items: center;
      cursor: pointer;
    }
  `;
  const BorderMenu = styled.div`
    padding: 5px;
    border: 1px solid white;
    border-radius: 3px;
    box-shadow: inset 0 0 5px #925cff, 0 0 10px #925cff;
  `;

  const style = {
    color: 'white',
  };

  const white = {
    color: 'white',
  };

  return (
    <>
      <Container>
        <Wrapper>
          <LogoContainer>
            <Link to="/">
              <Image src={Logo} />
            </Link>
          </LogoContainer>
          <Mobile onClick={() => setShowMobileMenu(!showMobileMenu)}>
            <FaBars style={style} />
          </Mobile>
          <Menu open={showMobileMenu}>
            <MenuItem>
              <MenuItemLink>
                <Link to="/" style={white}>
                  <BorderMenu>Home</BorderMenu>
                </Link>
              </MenuItemLink>
            </MenuItem>
            <MenuItem>
              <MenuItemLink>
                <Link to="/webdevelopment" style={white}>
                  <BorderMenu>Web Development</BorderMenu>
                </Link>
              </MenuItemLink>
            </MenuItem>
            <MenuItem>
              <MenuItemLink>
                <Link to="/graphicdesign" style={white}>
                  <BorderMenu>Graphic Design</BorderMenu>
                </Link>
              </MenuItemLink>
            </MenuItem>
            <MenuItem>
              <MenuItemLink>
                <Link to="/photography" style={white}>
                  <BorderMenu>Photography Projects</BorderMenu>
                </Link>
              </MenuItemLink>
            </MenuItem>
            <MenuItem>
              <MenuItemLink>
                <Link to="/contact" style={white}>
                  <BorderMenu>Contact</BorderMenu>
                </Link>
              </MenuItemLink>
            </MenuItem>
          </Menu>
        </Wrapper>
      </Container>
    </>
  );
};

export default Navbar;
