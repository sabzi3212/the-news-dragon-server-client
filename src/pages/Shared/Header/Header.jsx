import React, { useContext } from 'react';
import logo from '../../../assets/logo.png';
import moment from 'moment';
import { Button, Container, Nav, NavDropdown, Navbar } from 'react-bootstrap';
import Marquee from "react-fast-marquee";



const Header = () => {

  
    return (
        <Container>

            <div className='text-center'>
            <img src={logo} alt="" />
            <p><small>Journalism Without Fear or Favour</small></p>
            <p>{moment().format("dddd, MMMM, YYYY")}</p>
            </div>

            <div className='d-flex'>
            <Button variant="danger">Danger</Button>
            <Marquee className='text-danger' pauseOnHover={true} speed={100}>
  I can be a React component, multiple React components, or just some text.
</Marquee>
            </div>
            

            
        </Container>
    );
};

export default Header;