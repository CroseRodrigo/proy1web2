import React from 'react'
import Navbar from'react-bootstrap/Navbar'
import Container from'react-bootstrap/Container'
import Nav from'react-bootstrap/Nav'
import { Outlet, Link } from 'react-router-dom'
import Logo1 from '../assets/Img/Logo1.png'
import Logoo1 from '../assets/Img/Logoo1.png'

export default function Navbar1() {
    return (
        <div>
            <Navbar className='navBg' variant='dark' expand='lg'>
                <Container>
                    <Navbar.Brand as={Link} to="/">
                        <img className='LogoPrin' src={Logoo1}/>
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mx-auto">
                        <Nav.Link as={Link} to="/">Inicio</Nav.Link>
                        <Nav.Link as={Link} to="Libros">Libros</Nav.Link>
                        <Nav.Link as={Link} to="Autores">Autores</Nav.Link>
                        <Nav.Link as={Link} to="Asociados">Asociados</Nav.Link>
                        <Nav.Link as={Link} to="SobreNosotros">Sobre Nosotros</Nav.Link>
                        <Nav.Link as={Link} to="Creditos">Creditos</Nav.Link>
                    </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>

            <section>
                <Outlet></Outlet>
            </section>
        </div>
    )
}
