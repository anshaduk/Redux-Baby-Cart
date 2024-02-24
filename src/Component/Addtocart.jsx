import React, { useContext, useState } from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/esm/Button";
import { Userside } from "../App";
import { Link, NavLink, useNavigate } from "react-router-dom";
import "./Addtocart.css";
import {
  MDBBtn,
  MDBCard,
  MDBCardBody,
  MDBCardImage,
  MDBCardText,
  MDBCol,
  MDBContainer,
  MDBIcon,
  MDBInput,
  MDBRow,
  MDBTypography,
} from "mdb-react-ui-kit";
import { TypeH2 } from "react-bootstrap-icons";

function Addtocart() {
  const { user, data, setAdd, setRender, render, setUser } = useContext(Userside);
  const nav = useNavigate();
  const incre = (adding) => {
    setAdd((adding.quantity += 1));
    setRender(!render);
  };
  const decre = (adding) => {
    if (adding.quantity && adding.quantity > 1) {
      setAdd((adding.quantity -= 1));
      setRender(!render);
    }
  };
  const remove = (id) => {
    let removeditem = user.cart.filter((item) => item.id != id);
    user.cart = removeditem;
    setRender(!render);
  };

  const handleClick=()=>{
    setUser("");
  }

  return (
    <>
      <section className="h-100 h-custom" style={{ backgroundColor: "#eee" }}>
        <MDBContainer className="py-5 h-100">
          <MDBRow className="justify-content-center align-items-center h-100">
            <MDBCol size="12">
              <MDBCard
                className="card-registration card-registration-2"
                style={{ borderRadius: "15px" }}
              >
                <MDBCardBody className="p-0">
                  <div className="p-5">
                    <div className="d-flex justify-content-between align-items-center mb-5">
                      <MDBTypography
                        tag="h1"
                        className="fw-bold mb-0 text-black"
                      >
                        Shopping Cart
                      </MDBTypography>
                      
                      <MDBTypography className="mb-0 text-muted">
                        {/* {user && user.cart.length} */}
                        {/* {adding.quantity} */}
                      </MDBTypography>
                    </div>
                    {/* {user.cart.length===0?
                    (<h2>There is no item in cart</h2>):( */}
                    <hr className="my-4" />
                      
                    {user &&
                      user.cart.map((adding, index) => (
                        <React.Fragment key={adding.id}>
                          <MDBRow className="mb-4 d-flex justify-content-between align-items-center">
                            <MDBCol md="2" lg="2" xl="2">
                              <MDBCardImage
                                src={adding.image}
                                fluid
                                className="rounded-3"
                                alt="Cotton T-shirt"
                              />
                            </MDBCol>
                            <MDBCol md="3" lg="3" xl="3">
                              <MDBTypography tag="h6" className="text-muted">
                                {adding.description}
                              </MDBTypography>
                              <MDBTypography
                                tag="h6"
                                className="text-black mb-0"
                              >
                                {adding.title}
                              </MDBTypography>
                              <MDBTypography
                                tag="h6"
                                className="text-black mb-0"
                              >
                               ₹ {adding.price} /-
                              </MDBTypography>
                            </MDBCol>
                            <MDBCol
                              md="3"
                              lg="3"
                              xl="3"
                              className="d-flex align-items-center"
                            >
                              <MDBBtn
                                color="dark"
                                style={{ width: "30px", height: "30px" }}
                                onClick={() => decre(adding)}
                              >
                                -
                              </MDBBtn>

                              <p>{adding.quantity}</p>

                              <MDBBtn
                                color="dark"
                                style={{ width: "30px", height: "30px" }}
                                onClick={() => incre(adding)}
                              >
                                +
                              </MDBBtn>
                            </MDBCol>

                            <MDBCol md="3" lg="2" xl="2" className="text-end">
                              <MDBTypography tag="h6" className="mb-0">
                                {adding.price * adding.quantity}
                              </MDBTypography>
                            </MDBCol>
                            <MDBBtn
                              color="dark"
                              style={{ width: "30px", height: "30px" }}
                              onClick={() => remove(adding.id)}
                            >
                              X
                            </MDBBtn>
                          </MDBRow>

                          <hr className="my-4" />
                        </React.Fragment>
                      ))}
                      
                      
                    <div className="pt-5">
                      <MDBTypography tag="h6" className="mb-0">
                        <MDBCardText tag="a" href="/shop" className="text-body">
                          <MDBIcon fas icon="long-arrow-alt-left me-2" />← Back
                          to shop
                        </MDBCardText>
                      </MDBTypography>
                    </div>
                  </div>
                </MDBCardBody>
                <MDBCol lg="4" className="bg-grey">
                  <div className="p-5">
                    <MDBTypography
                      tag="h3"
                      className="fw-bold mb-5 mt-2 mx-10 pt-1"
                    >
                      Summary
                    </MDBTypography>

                    <hr className="my-4" />

                    <div className="d-flex justify-content-between mb-4">
                      <MDBTypography tag="h5" className="text-uppercase">
                        {/* items {user && user.cart.length} */}
                        Total Items : {user&&user.cart.reduce((acc,item)=>acc += item.quantity,0)}
                        
                      </MDBTypography>
                      
                    </div>

                    <MDBTypography tag="h5" className="text-uppercase mb-3">
                      Shipping : Free
                    </MDBTypography>

                    <hr className="my-4" />

                    <div className="d-flex justify-content-between mb-5">
                      <MDBTypography tag="h5" className="text-uppercase">
                        Total price
                      </MDBTypography>
                      <MDBTypography tag="h5">
                        ₹
                        {user.cart.reduce(
                          (acc, curr) => (acc += curr.price * curr.quantity),
                          0
                        )}
                      </MDBTypography>
                    </div>
                    <NavLink to={"/checkout"}>
                      <MDBBtn
                        color="dark"
                        block
                        size="lg"
                        style={{ width: "250px", height: "50px" }}
                       onClick={()=>handleClick()}>
                        Go to checkout
                      </MDBBtn>
                    </NavLink>
                  </div>
                </MDBCol>
              </MDBCard>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </section>
    </>
  );
}
export default Addtocart;


