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
    background-color: #ed6a5e;

    @media screen and (max-width: 768px) {
      background-color: #ffffffd6;
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
    height: 100%;
    display: flex;
    justify-content: space-between;
    list-style: none;
    z-index: 90;
    @media screen and (max-width: 768px) {
      position: absolute;
      background-color: #ed6a5e;
      top: 70px;
      left: ${({ open }) => (open ? '0' : '-100%')};
      width: 100%;
      height: 90vh;
      justify-content: center;
      flex-direction: column;
      align-items: center;
      transition: 0.5s all ease;
    }
  `;
  const MenuItem = styled.li`
    height: 100%;
    @media screen and (max-width: 768px) {
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
    cursor: pointer;
    transition: 0.5s all ease;
    border-radius: 5px;
    &:hover {
      color: transparent;
      background-image: linear-gradient(
        to left,
        #f1c16d,
        #f6b156,
        #f6a431,
        #eb7831,
        #ff6200
      );
      background-clip: text;
      animation: color 3s linear infinite;
      background-size: 500%;
    }

    @keyframes color {
      from {
        background-position: 0% 50%;
      }

      to {
        background-position: 100% 50%;
      }
    }
    @media screen and (max-width: 768px) {
      width: 100%;
    }
  `;

  const Mobile = styled.div`
    display: none;
    padding-right: 20px;
    font-size: 25px;
    @media screen and (max-width: 768px) {
      display: flex;
      align-items: center;
      cursor: pointer;
    }
  `;

  const style = {
    color: 'ff8e72',
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
                  Home
                </Link>
              </MenuItemLink>
            </MenuItem>
            <MenuItem>
              <MenuItemLink>
                <Link to="/webdevelopment" style={white}>
                  Web Development
                </Link>
              </MenuItemLink>
            </MenuItem>
            <MenuItem>
              <MenuItemLink>
                <Link to="/graphicdesign" style={white}>
                  Graphic Design
                </Link>
              </MenuItemLink>
            </MenuItem>
            <MenuItem>
              <MenuItemLink>
                <Link to="/photography" style={white}>
                  Photography Projects
                </Link>
              </MenuItemLink>
            </MenuItem>
            <MenuItem>
              <MenuItemLink>
                <Link to="/contact" style={white}>
                  Contact
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
