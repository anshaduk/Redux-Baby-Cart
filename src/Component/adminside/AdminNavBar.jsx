import React, { useState } from "react";
import {
  MDBNavbar,
  MDBContainer,
  MDBNavbarBrand,
  MDBNavbarToggler,
  MDBNavbarItem,
  MDBNavbarLink,
  MDBCollapse,
  MDBBtn,
  MDBIcon,
  MDBNavbarNav,
  MDBInputGroup,
} from "mdb-react-ui-kit";
import { Link, useNavigate } from "react-router-dom";

const AdminNavBar = () => {
  const nav = useNavigate();
  const [openNavNoToggler, setOpenNavNoToggler] = useState(false);
  return (
    <>
      <MDBNavbar
        expand="lg"
        light
        bgColor="light"
        style={{ marginTop: "20px", margin: "20px" }}
      >
        <MDBContainer fluid>
          <MDBNavbarToggler
            type="button"
            data-target="#navbarTogglerDemo01"
            aria-controls="navbarTogglerDemo01"
            aria-expanded="false"
            aria-label="Toggle navigation"
            onClick={() => setOpenNavNoToggler(!openNavNoToggler)}
          >
            <MDBIcon icon="bars" fas />
          </MDBNavbarToggler>
          <MDBCollapse navbar open={openNavNoToggler}>
            <MDBNavbarBrand href="#">Admin Login</MDBNavbarBrand>
            <MDBNavbarNav className="mr-auto mb-2 mb-lg-0"></MDBNavbarNav>
            <MDBInputGroup tag="form" className="d-flex w-auto mb-3">
              <Link to={"/"}>
                <MDBBtn outline>Logout</MDBBtn>
              </Link>
            </MDBInputGroup>
          </MDBCollapse>
        </MDBContainer>
      </MDBNavbar>
    </>
  );
};

export default AdminNavBar;
