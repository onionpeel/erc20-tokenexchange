import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import BalanceEth from './BalanceEth';
import BalanceToken from './BalanceToken';

const Header = () => {

  return (
    <Navbar collapseOnSelect expand="lg" style={{backgroundColor: "#517DEC"}}>
      <Navbar.Brand href="#home" style={{color: "#D3D9E7"}}>
        The Great Token Exchange
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />

      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="ml-auto">

          <Navbar.Text style={{color: "#D3D9E7"}}>
            Your balances:
          </Navbar.Text>
          <Navbar.Text className="ml-3" style={{color: "#D3D9E7"}}>
            <BalanceToken />
          </Navbar.Text>
          <Navbar.Text className="ml-3" style={{color: "#D3D9E7"}}>
            <BalanceEth />
          </Navbar.Text>

        </Nav>
      </Navbar.Collapse>
    </Navbar>

  );
};

export default Header;






// <Navbar style={{backgroundColor: "#517DEC"}}>
//   <Navbar.Brand href="#home" style={{color: "#D3D9E7"}}>
//     The Great Token Exchange
//   </Navbar.Brand>
//

// </Navbar>
