import { Navbar, 
        NavbarBrand, 
        Collapse, 
        NavbarToggler, 
        Nav, 
        NavItem 
       } from "reactstrap";
import Logo from '../app/assets/CafeLogoSmall.jpg';
import {useState} from 'react'
import { NavLink } from "react-router-dom";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
      <Navbar dark color='primary' sticky='top' expand='md'>
          <NavbarBrand className='ms-5' href='/'>
              <img src={Logo} alt='cafe logo' className='float-start' />
              <h1 className='mt-1'>Derek's Cafe</h1>
          </NavbarBrand>
          <NavbarToggler onClick={() => setMenuOpen(!menuOpen)}/>
          <Collapse isOpen={menuOpen} navbar>
              <Nav className='ms-auto' navbar>
                  <NavItem>
                      <NavLink className='nav-link' to='/'>
                          <i className='fa fa-home fa-lg' /> Home
                      </NavLink>
                  </NavItem>
                  <NavItem>
                      <NavLink className='nav-link' to='/about'>
                        <i className='fa fa-info fa-lg' /> About
                      </NavLink>
                  </NavItem>
                  <NavItem>
                      <NavLink className='nav-link' to='/menu'>
                        <i className='fa fa-bars fa-lg' /> Menu
                      </NavLink>
                  </NavItem>
                  <NavItem>
                      <NavLink className='nav-link' to='/contact'>
                          <i className='fa fa-address-card fa-lg' /> Contact
                      </NavLink>
                  </NavItem>
              </Nav>
          </Collapse>
      </Navbar>
  );
};

export default Header