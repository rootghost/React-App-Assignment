import React from 'react';
import { Navbar,Nav } from 'react-bootstrap';
const Header = () => {
    const bannerStyle ={
        backgroundColor:"#343A40",
        textAlign:'center',
        width:"100%",
        height:"100px",
        color:"white",
        lineHeight:"40px"

    }
    return (
    <div>
        <div>
            <Navbar bg="dark" variant="dark">
                <Navbar.Brand href="#home">Phero.Com</Navbar.Brand>
                <Nav  className="ml-auto">
                <Nav.Link href="#home">Home</Nav.Link>
                <Nav.Link href="#features">About Us</Nav.Link>
                <Nav.Link href="#pricing">Contact Us</Nav.Link>
                </Nav>
            </Navbar>
        </div>

        <div style={bannerStyle}>
            <h1>Welcome to <span style={{color:"#00CF5D"}}>Phero.Com</span></h1>
            <p>Learn about Everything from our course</p>
        </div>
    </div>    
    );
};

export default Header;
