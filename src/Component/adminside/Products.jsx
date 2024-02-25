import React, { useContext, useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import { useNavigate, useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import "../Shop.css";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import Dropdown from "react-bootstrap/Dropdown";
import {
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBCardImage,
  MDBIcon,
} from "mdb-react-ui-kit";
import {
  MDBBadge,
  MDBBtn,
  MDBTable,
  MDBTableHead,
  MDBTableBody,
} from "mdb-react-ui-kit";

import { Userside } from "../../App";
import AdminNavBar from "./AdminNavBar";

const Products = () => {
  const nav = useNavigate();
  const { title } = useParams();
  const { search, products, setProducts } = useContext(Userside);
  
  
  
  console.log(products, "gggg");
  const filtering = products.filter((product) => product.title == title);
  console.log(filtering);

  const DeleteProduct = (Index) => {
    const UpdatedUserData = [...products];
    UpdatedUserData.splice(Index, 1);
    setProducts(UpdatedUserData);
  };
  return (
    <div>
      <AdminNavBar />
      <div className="d-flex justify-content-end align-items-center">
        <Dropdown as={ButtonGroup}>
          {/* Change the color and style of the button here */}
          <Button
            variant="primary"
            style={{
              backgroundColor: "blue",
              border: "none",
              borderRadius: "5px",
            }}
          >
            Filter
          </Button>
          <MDBIcon fas icon="angle-double-down" />
          <Dropdown.Toggle
            split
            variant="primary"
            id="dropdown-split-basic"
            style={{
              backgroundColor: "blue",
              border: "none",
              borderRadius: "5px",
            }}
          />
          <Dropdown.Menu>
            <Dropdown.Item onClick={() => nav(`/doll`)}>Doll</Dropdown.Item>
            <Dropdown.Item onClick={() => nav(`/toys`)}>Toys</Dropdown.Item>
            <Dropdown.Item onClick={() => nav(`/dress`)}>Dress</Dropdown.Item>
            <Dropdown.Item onClick={() => nav(`/footwear`)}>
              Footwear
            </Dropdown.Item>
            <Dropdown.Item onClick={() => nav(`/strollers`)}>
              Strollers
            </Dropdown.Item>
            <Dropdown.Item onClick={() => nav(`/car-seats`)}>
              Car Seats
            </Dropdown.Item>
            <Dropdown.Item onClick={() => nav(`/sunglasses`)}>
              Sunglasses
            </Dropdown.Item>
            <Dropdown.Item onClick={() => nav(`/headcaps`)}>
              Headcaps
            </Dropdown.Item>
            <Dropdown.Item onClick={() => nav(`/gloves`)}>Gloves</Dropdown.Item>
            <Dropdown.Item onClick={() => nav(`/pacifier`)}>
              Pacifier
            </Dropdown.Item>
            <Dropdown.Item onClick={() => nav(`/baby bottle`)}>
              baby bottle
            </Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      </div>

      <Link to={"/addnewproduct"}>
        <button>Add new poducts</button>
      </Link>

      <MDBTable align="middle">
        <MDBTableHead>
          <tr>
            <th scope="col">Name</th>
            <th scope="col">Title</th>
            <th scope="col">Status</th>
            <th scope="col">Action</th>
            <th scope="col">Actions</th>
          </tr>
        </MDBTableHead>
        <MDBTableBody>
          {products.map((element, Index) => {
            return (
              <tr key={Index.id}>
                <td>
                  <div className="d-flex align-items-center">
                    <img
                      src={element.image}
                      alt=""
                      style={{ width: "45px", height: "45px" }}
                      className="rounded-circle"
                    />
                    <div className="ms-3">
                      <p className="fw-bold mb-1"></p>
                      <p className="text-muted mb-0"></p>
                    </div>
                  </div>
                </td>
                <td>
                  <p className="fw-normal mb-1">{element.title}</p>
                  <p className="text-muted mb-0">{element.description}</p>
                </td>
                <td>
                  <MDBBadge color="success" pill>
                    Available
                  </MDBBadge>
                </td>
                <td>
                  <MDBBtn
                    color="link"
                    rounded
                    size="sm"
                    onClick={() => DeleteProduct()}
                  >
                    Delete
                  </MDBBtn>
                </td>
                <td>
                  
                    <MDBBtn
                      color="link"
                      rounded
                      size="sm"
                      className="text-warning ms-3"
                      onClick={()=>nav(`/editproduct/${element.id}`)}
                    >
                      Edit
                    </MDBBtn>
                  
                </td>
              </tr>
            );
          })}
        </MDBTableBody>
        <Link to={"/admin"}>
          <h1>←Back to admin</h1>
        </Link>
      </MDBTable>
    </div>
  );
};

export default Products;
