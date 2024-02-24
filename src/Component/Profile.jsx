import React, { useContext } from "react";
import {
  MDBCol,
  MDBContainer,
  MDBRow,
  MDBCard,
  MDBCardText,
  MDBCardBody,
  MDBCardImage,
  MDBBtn,
  MDBTypography,
  MDBIcon,
} from "mdb-react-ui-kit";
import { Userside } from "../App";
import { NavLink, useNavigate } from "react-router-dom";

const Profile = () => {
  const navigate = useNavigate;
  const { data, setData, user } = useContext(Userside);
  console.log(data, "data");
  console.log(user, "profile");


  return (
    <div className="vh-100" style={{ backgroundColor: "#eee" }}>
      <MDBContainer className="container py-5 h-100">
        <MDBRow className="justify-content-center align-items-center h-100">
          <MDBCol md="12" xl="4">
            <MDBCard style={{ borderRadius: "15px" }}>
              {data &&
                data.slice(-1).map((item) => (
                  <MDBCardBody className="text-center">
                    <div className="mt-3 mb-4">
                      <MDBCardImage
                        src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava2-bg.webp"
                        className="rounded-circle"
                        fluid
                        style={{ width: "100px" }}
                      />
                    </div>

                    <MDBTypography tag="h4">{item.username}</MDBTypography>
                    <MDBCardText className="text-muted mb-4">
                      <span className="mx-2"> {item.email}</span>{" "}
                      <a href="#!"></a>
                    </MDBCardText>

                    <NavLink to={"/"}>
                      <MDBBtn rounded size="lg">
                        Home
                      </MDBBtn>
                    </NavLink>
                    
                  </MDBCardBody>
                ))}
            </MDBCard>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    </div>
  );
};

export default Profile;
