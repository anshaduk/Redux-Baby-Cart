import React, { useContext, useEffect } from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { useNavigate, useParams } from "react-router-dom";
import { MockProducts } from "../DummyData/data";
import "./Shop.css";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import Dropdown from "react-bootstrap/Dropdown";
import { Userside } from "../App";
import { MDBIcon } from "mdb-react-ui-kit";
import Navbar from "./Navbar";

function Shop() {
  const nav = useNavigate();
  const { title } = useParams();
  const { search, products } = useContext(Userside);
  const filtering = products.filter((product) => product.title == title);
  return (
    <div>
      {/* <Navbar /> */}
      <div className="d-flex justify-content-end align-items-center">
        <Dropdown as={ButtonGroup}>
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

      <div className="divflex1">
        {(search ? search : title == "shop" ? products : filtering).map(
          (product) => (
            <div key={product.id}>
              <Card style={{ width: "18rem" }}>
                <Card.Img variant="top" src={product.image} />
                <Card.Body>
                  <Card.Title>{product.title.toUpperCase()}</Card.Title>
                  <Card.Text>{/* {item.description} */}</Card.Text>
                  <Card.Text>₹{product.price}/-</Card.Text>
                  <Button
                    variant="primary"
                    onClick={() => nav(`/${product.title}/${product.id}`)}
                  >
                    Click More Details
                  </Button>
                </Card.Body>
              </Card>
            </div>
          )
        )}
      </div>
      <button onClick={() => nav("/")} style={{ alignItems: "center" }}>
        ←
      </button>
    </div>
  );
}

export default Shop;
