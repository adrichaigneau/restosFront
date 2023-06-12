import React from "react";
import { Navbar, NavbarBrand, Nav, NavItem, NavLink } from "reactstrap";

export default function Banner() {
  return (
    <div>
      <Navbar color="light" light expand="md">
        <NavbarBrand className="text" href="/">
          Bestau
        </NavbarBrand>
        <Nav className="mr-auto" navbar>
          <NavItem>
            <NavLink className="text" href="/">
              Home
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink className="text" href="/types">
              Types de cuisine
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink className="text" href="/carte">
              Carte
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink className="text" href="/edit">
              Nouveau restaurant
            </NavLink>
          </NavItem>
        </Nav>
      </Navbar>
    </div>
  );
}
