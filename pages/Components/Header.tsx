import { Navbar , Container,Nav} from "react-bootstrap"

import Image from 'next/image'
import style from '../../styles/Header.module.css'
import logo from '../assets/logo.png'


let Header=()=>{
    return(
        <>
       
    <Navbar bg="light" expand="lg" className={style.navbar}>
      <Container>
        <Navbar.Brand href="#home" className={style.logo}>
             <Image src={logo} alt="" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
          <Nav.Link href="../Industry"><span>HPYEINDUSTRY <i className="bi bi-chevron-down"></i></span> </Nav.Link>
          <Nav.Link href="../Industry"><span>HPYE OFFER <i className="bi bi-chevron-down"></i></span> </Nav.Link>
          <Nav.Link href="../Industry"><span>SHIPPING <i className="bi bi-chevron-down"> </i></span> </Nav.Link>
          <Nav.Link href="../Industry"><span>SELLER REQUEST FORM</span> </Nav.Link>
          
         
          </Nav>

        <div className={style.searchbar}>
          <i className="bi bi-person"><span>Login</span> </i>
          <input type="search"  placeholder="        Brand , Models" />
          {/* <i className="bi bi-search"></i> */}
          </div>
          
        </Navbar.Collapse>
      </Container>
    </Navbar>
 

        </>
    )
}
export default Header;