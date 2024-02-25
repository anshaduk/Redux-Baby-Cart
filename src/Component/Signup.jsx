import React, { useContext, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { Userside } from "../App";
import "./Signup.css";
import { addSighnupUser } from "../Redux/sighnupSlice";
import { useDispatch } from "react-redux";


import {
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBInput,
} from "mdb-react-ui-kit";
import Profile from "./Profile";

function Signup() {
  const inputref = useRef(null);
  const { data, setData } = useContext(Userside);
  const move = useNavigate();

  //Redux
const dispatch=useDispatch();

  //to receive user data and store into setData
  const handlesubmit = () => {
    
    let username = inputref.current.username.value;
    let email = inputref.current.email.value;
    let password = inputref.current.password.value;
    let conpassword = inputref.current.conpassword.value;
    // console.log(username, email, password);
    // console.log(data, "data");
    //setData([...data, { username, email, password }]);
    dispatch(addSighnupUser([{ username, email, password }]))

    if (password === conpassword) {
      // setData([
      //   ...data,
      //   { username: username, email: email, password: password, cart: [] },
      // ]);
      addSighnupUser([{ username: username, email: email, password: password, cart: [] }])
       move('/login')
      // console.log(data, "data");
      // console.log(username, email, "profile");

      //move("/profile");
    } else {
      alert("Password is not matching!");
    }
  };

  const handlesubmitform = (e) => {
    e.preventDefault();
  };
  //console.warn(data);
  return (
    <div className="maindiv">
      <form action="" ref={inputref} onSubmit={handlesubmitform}>
        <MDBContainer
          fluid
          className="p-4 background-radial-gradient overflow-hidden"
        >
          <MDBRow>
            <MDBCol
              md="6"
              className="text-center text-md-start d-flex flex-column justify-content-center"
            >
              <img src="data:image/jpeg;base64,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" />
            </MDBCol>
            <MDBCol md="6" className="position-relative">
              <MDBCard className="my-5 bg-glass">
                <MDBCardBody className="p-5">
                  <MDBInput
                    wrapperClass="mb-4"
                    placeholder="enter your  name"
                    label="Username"
                    id="form1"
                    pattern="[a-zA-Z]*"
                    name="username"
                    minLength={4}
                    maxLength={16}
                    type="text"
                    required
                  />
                  <MDBInput
                    wrapperClass="mb-4"
                    placeholder="enter your e-mail"
                    label="Email"
                    id="form2"
                    type="email"
                    name="email"
                    required
                  />
                  <MDBInput
                    wrapperClass="mb-4"
                    placeholder="enter password"
                    label="Password"
                    id="form3"
                    type="password"
                    name="password"
                    required
                  />
                  <MDBInput
                    wrapperClass="mb-4"
                    placeholder="enter confirm password"
                    label="confirm Password"
                    id="form4"
                    name="conpassword"
                    type="password"
                    required
                  />
                  <button
                    type="submit"
                    className="signbtn w-90 h-30"
                    onClick={handlesubmit}
                  >
                    sign up
                  </button>
                </MDBCardBody>
              </MDBCard>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </form>
    </div>
  );
}

export default Signup;
