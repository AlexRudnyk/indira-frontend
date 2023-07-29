import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const HeaderSection = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 100;
  width: 100vw;
  background-color: white;
  -webkit-box-shadow: 7px 15px 20px 0px rgba(0, 0, 0, 0.6);
  -moz-box-shadow: 7px 15px 20px 0px rgba(0, 0, 0, 0.6);
  box-shadow: 7px 15px 20px 0px rgba(0, 0, 0, 0.6);
`;

export const Container = styled.div`
  width: 1280px;
  margin-left: auto;
  margin-right: auto;
`;

export const HeaderWrapper = styled.div`
  position: relative;
  display: flex;
  align-content: center;
  justify-content: space-between;
  padding: 20px;
`;

export const Logo = styled(Link)`
  display: inline-block;
  padding: 0 15px;
  font-size: 48px;
  color: brown;
  font-family: 'Dancing Script', cursive;
  font-family: 'Great Vibes', cursive;
`;

export const LogoImg = styled.img`
  position: absolute;
  top: 5px;
  left: 20px;
  width: 80px;
  z-index: -10;
  opacity: 0.6;
`;

export const NavWrapper = styled.div`
  display: flex;
  align-items: center;
`;
