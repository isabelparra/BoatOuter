import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";


// Depending on the current path, this component sets the "active" class on the appropriate navigation link item
const Navbar = props => (
    <nav className="navbar">
      <Link className="navbar-brand" to="/">
        BoatOuter
      </Link>
      <div id='nav'>
        <ul className="navbar-nav">
          <li className="nav-item">
            <Link
              to="/about"
              className={
                window.location.pathname === "/" || window.location.pathname === "/about"
                  ? "nav-link active"
                  : "nav-link"
              }
            >
              About
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="/account"
              className={
                window.location.pathname === "/account"
                  ? "nav-link active"
                  : "nav-link"
              }
            >
              Account
            </Link>
          </li>

        </ul>
      </div>
    </nav>
//     <Navbar inverse collapseOnSelect>
//   <Navbar.Header>
//     <Navbar.Brand>
//       <a href="#brand">React-Bootstrap</a>
//     </Navbar.Brand>
//     <Navbar.Toggle />
//   </Navbar.Header>
//   <Navbar.Collapse>
//     <Nav>
//       <NavItem eventKey={1} href="#">
//         Link
//       </NavItem>
//       <NavItem eventKey={2} href="#">
//         Link
//       </NavItem>
//       <NavDropdown eventKey={3} title="Dropdown" id="basic-nav-dropdown">
//         <MenuItem eventKey={3.1}>Action</MenuItem>
//         <MenuItem eventKey={3.2}>Another action</MenuItem>
//         <MenuItem eventKey={3.3}>Something else here</MenuItem>
//         <MenuItem divider />
//         <MenuItem eventKey={3.3}>Separated link</MenuItem>
//       </NavDropdown>
//     </Nav>
//     <Nav pullRight>
//       <NavItem eventKey={1} href="#">
//         Link Right
//       </NavItem>
//       <NavItem eventKey={2} href="#">
//         Link Right
//       </NavItem>
//     </Nav>
//   </Navbar.Collapse>
// </Navbar>
  );

export default Navbar;