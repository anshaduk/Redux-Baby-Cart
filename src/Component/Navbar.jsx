import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { FaUserAlt } from "react-icons/fa";
import { BsCart3 } from "react-icons/bs";
import { Userside } from "../App";
import { IoLogOut } from "react-icons/io5";
import { FaUserNinja } from "react-icons/fa6";

const Navbars = () => {
  const nav = useNavigate();
  const { add, user, render, setUser, search, setSearch, products } =
    useContext(Userside);

  //to perform logout
  const logout = () => {
    setUser(null);
    nav("/login");
  };

  //to perform search
  const searchbtn = (e) => {
    //console.log(e);
    e.preventDefault();
    let searched = e.target[0].value;
    if (!searched) {
      alert("Input has no words");
    } else {
      let searchedone = products.filter((product) =>
        product.title.includes(searched)
      );
      // console.log(searchedone);
      if (searchedone[0] !== undefined) {
        nav("/shop");
        setSearch(searchedone);
      } else {
        alert("no items");
      }
    }
  };

  return (
    <Navbar expand="xl" className="bg-body-tertiary" sticky="top">
      <Container fluid>
        <Navbar.Brand
          onClick={() => nav("/")}
          style={{ color: "rgb(35 240 26 / 65%)", fontWeight: "bold" }}
        >
          Baby Cart
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: "100px" }}
            navbarScroll
          >
            <Nav.Link
              as={Link}
              to="/"
              style={{ color: "rgb(239, 47, 28, 0.65)", fontWeight: "small" }}
            >
              Home
            </Nav.Link>
            <Nav.Link
              as={Link}
              to="/shop"
              style={{ color: "rgb(239, 47, 28, 0.65)", fontWeight: "small" }}
            >
              Shop
            </Nav.Link>
            <Nav.Link
              as={Link}
              to="/testimonial"
              style={{ color: "rgb(239, 47, 28, 0.65)", fontWeight: "small" }}
            >
              Testimonial
            </Nav.Link>
            <Nav.Link
              as={Link}
              to="/contact"
              style={{ color: "rgb(239, 47, 28, 0.65)", fontWeight: "small" }}
            >
              Contact Us
            </Nav.Link>
          </Nav>
          <Form onSubmit={searchbtn} className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-success" type="submit">
              Search
            </Button>
            <BsCart3
              style={{ width: "45px", height: "40px" }}
              onClick={() =>!user?nav('/login'):nav("/cart")}
            />
            {user && user.cart.length}
            {!user ? (
              <FaUserAlt
                onClick={() => nav("/login")}
                style={{ width: "45px", height: "40px" }}
              />
            ) : (
              <>
                <IoLogOut
                  onClick={logout}
                  style={{ width: "45px", height: "40px" }}
                />
                <p>{user.username}</p>
              </>
            )}
            <FaUserNinja
              style={{ width: "45px", height: "38px" }}
              onClick={() => nav("/adminlogin")}
            />
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Navbars;
