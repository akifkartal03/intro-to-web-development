import React from "react";
import {
  Container,
  Navbar,
  NavbarBrand,
  NavLink
} from "reactstrap";

const Header = () => {
  return (
    <header>
      <Navbar color="dark" dark>
        <Container>
          <NavbarBrand href="/" className="d-flex align-items-center mr-auto">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="mr-2"
            />
            // eslint-disable-next-line
            <a className="navbar-brand" href="#">
              <img
                src="https://i.ibb.co/12pWKWZ/Sandwich2.png"
                width="70"
                height="50"
                className="d-inline-block align-top"
                alt=""
                loading="lazy"
              />
            </a>
            <NavLink style={{ color: "white" }}>
              Home
            </NavLink>
            <NavLink style={{ color: "white" }}>
              All Recipies
            </NavLink>
          </NavbarBrand>
        </Container>
      </Navbar>
    </header>
  );
};

export default Header;
