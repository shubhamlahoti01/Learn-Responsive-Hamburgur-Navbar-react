import React from 'react';
import styled from 'styled-components';
import Burger from './Burger';

const Nav = styled.nav`
  width: 100%;
  height: 55px;
  border-bottom: 2px solid #f1f1f1;
  padding: 0 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  .logo {
    /* padding: 15px 0; */
    font-weight: 900;
    font-size: 2rem;
  }
`;

const Navbar = () => {
  return (
    <Nav>
      <div className='logo'>LOGO.here</div>
      <Burger />
    </Nav>
  );
};

export default Navbar;
