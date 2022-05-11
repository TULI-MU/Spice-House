
import React from 'react';
import { Link } from 'react-router-dom';
import { Container,Nav, Navbar} from 'react-bootstrap';
import logo from '../../images/logo.png';
import './Header.css';
import { signOut } from 'firebase/auth';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';

const Header = () => {
    const [user] = useAuthState(auth);

    const handleSignOut = () =>{
        signOut(auth);
    }

    return (
        <>
        <Navbar collapseOnSelect expand="lg" sticky='top' bg="secondary" variant="dark">
            <Container>
                <Navbar.Brand as={Link} to="/">
                    <img height={30} src={logo} alt="" />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="home">Home</Nav.Link>
                        <Nav.Link href="home#items">Inventory</Nav.Link>
                        <Nav.Link href="home#catalogs">Catalogs</Nav.Link>
                       
                    </Nav>
                    <Nav>
                        <Nav.Link as={Link} to="about">About</Nav.Link>
                        <Nav.Link href="blog">Blogs</Nav.Link>

                        {
                              user && <>
                            <Nav.Link as={Link} to="additems">Add</Nav.Link>
                            <Nav.Link as={Link} to="manage">Manage</Nav.Link>
                            <Nav.Link as={Link} to="myitems">My Items</Nav.Link>
                            </>
                        }
                        {
                            user ?
                                <button className='btn btn-link text-white text-decoration-none' onClick={handleSignOut}>sign out</button>
                            :
                            <Nav.Link as={Link} to="signin">
                            Login
                        </Nav.Link>}
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    </>
);
};

   

export default Header;
