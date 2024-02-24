import React from "react";
import { useState } from "react";
import Button from "react-bootstrap/Button";
import Offcanvas from "react-bootstrap/Offcanvas";
import "./Admin.css";
import { Link } from "react-router-dom";
import AdminNavBar from "./AdminNavBar";

function Admin() {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <div>
      <AdminNavBar />
      <div>
        <h3
          style={{
            position: "absolute",
            marginLeft: "580px",
            marginTop: "40px",
          }}
        >
          Admin side
        </h3>
      </div>
      <div className="admindiv">
        <>
          <Link to={"/userdata"}>
            <Button className="btn1" variant="primary" onClick={handleShow}>
              User Section
            </Button>
          </Link>
          <Offcanvas show={show} onHide={handleClose}>
            <Offcanvas.Header closeButton>
              <Offcanvas.Title>User side</Offcanvas.Title>
            </Offcanvas.Header>
          </Offcanvas>
        </>
        <>
          <Link to={"/products"}>
            <Button variant="success" className="btn1" onClick={handleShow}>
              Product
            </Button>
          </Link>

          <Offcanvas show={show} onHide={handleClose}>
            <Offcanvas.Header closeButton>
              <Offcanvas.Title>Offcanvas</Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
              <button>Home</button>
              <br />
              <button>User Details</button>
            </Offcanvas.Body>
          </Offcanvas>
        </>
      </div>
    </div>
  );
}

export default Admin;
