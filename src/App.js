import logo from './logo.svg';
import './css/App.css';
import './css/SegundoComponente.css';
import './css/TercerComponente.css';
import './css/CuartoComponente.css';
import { PrimerComponente } from './Componentes/PrimerComponente';
import { Navbar, Container, Nav, NavDropdown } from 'react-bootstrap';
import { SegundoComponente } from './Componentes/SegundoComponente';
import { TercerComponente } from './Componentes/TercerComponente';
import { CuartoComponente } from './Componentes/CuartoComponente';

function App() {
  
  return (
    <div className="App"> 
      <Navbar collapseOnSelect expand="lg" bg="black" variant="dark">
      <Container>
        <Navbar.Brand href="#home">LOGO</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#Carousel">INICIO</Nav.Link>
            <Nav.Link href="#pricing">ACERCA</Nav.Link>
          </Nav>
          <Nav>
            <Nav.Link href="#deets">CONTACTO</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>

        <PrimerComponente/>
        <SegundoComponente/>
        <TercerComponente/>
        <CuartoComponente/>
    </div>
  );
}

export default App;
