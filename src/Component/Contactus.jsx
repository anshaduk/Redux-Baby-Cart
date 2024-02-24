import React, { useState } from "react";
import { MDBInput, MDBBtn, MDBTextArea } from "mdb-react-ui-kit";
import emailjs from "@emailjs/browser";
import { useRef } from "react";
import Navbar from "./Navbar";

function Contactus() {
  const formRef = useRef();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  const sendEmail = (e) => {
    e.preventDefault();
    setName("");
    setEmail("");
    setSubject("");
    setMessage("");

    emailjs
      .sendForm("service_amih1xh", "template_aukveh8", formRef.current, {
        publicKey: "Cq1vUfUs5g4JU2gir",
      })
      .then((res) => alert("email send successfully.."))
      .catch((err) => alert("error"));
  };

  return (
    <>
      <Navbar />
      <form
      ref={formRef}
      onSubmit={sendEmail}
      id="form"
      className="text-center"
      style={{ maxWidth: "300px", margin: "0 auto" }}
    >
      <h2>Contact us</h2>

      <MDBInput
        label="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        wrapperClass="mb-4"
        required
      />

      <MDBInput
        type="email"
        name="email"
        label="Email address"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        wrapperClass="mb-4"
        required
      />

      <MDBInput
        label="Subject"
        name="subject"
        value={subject}
        onChange={(e) => setSubject(e.target.value)}
        wrapperClass="mb-4"
        required
      />

      <MDBTextArea
        wrapperClass="mb-4"
        name="message"
        label="Message"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        required
      />

      <MDBBtn
        color="primary"
        block
        className="my-4"
        type="submit"
        style={{ width: "80px", height: "40px" }}
      >
        Send
      </MDBBtn>
    </form>
    </>
  );
}

export default Contactus;
