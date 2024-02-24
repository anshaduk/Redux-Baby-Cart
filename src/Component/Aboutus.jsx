import React from "react";
import Navbar from "./Navbar";
import {
  MDBCol,
  MDBContainer,
  MDBIcon,
  MDBRow,
  MDBTypography,
} from "mdb-react-ui-kit";

export default function Aboutus() {
  return (
    <>
      <Navbar />
      <MDBContainer className="py-5">
        <MDBRow className="d-flex justify-content-center">
          <MDBCol md="10" xl="8" className="text-center">
            <h3 className="mb-4">Testimonials</h3>
            <p className="mb-4 pb-2 mb-md-5 pb-md-0">
              The "Baby Cart" itself serves both as a practical means of
              transport and as a symbol of the bond between father and son, as
              well as a tool for combat. It is ingeniously designed to conceal a
              plethora of deadly weapons, including swords, spears, and
              firearms, allowing Ittō to dispatch enemies with swift and deadly
              efficiency.
            </p>
          </MDBCol>
        </MDBRow>
        <MDBRow className="text-center">
          <MDBCol md="4" className="mb-5 mb-md-0">
            <div className="d-flex justify-content-center mb-4">
              <img
                src="https://rukminim2.flixcart.com/image/612/612/xif0q/doll-doll-house/n/k/8/doll-set-for-girls-doll-set-with-frock-red-and-black-mini-gifts-original-imagxc28jznfew98.jpeg?q=70"
                className="rounded-circle shadow-1-strong"
                width="150"
                height="150"
              />
            </div>
            <h5 className="mb-3">DOLL</h5>
            <h6 className="text-primary mb-3">
              Teddify Pacific Ocean Undersea Queen Mermaid doll for girls soft
              toy Size-30cm
            </h6>

            <MDBTypography
              listUnStyled
              className="d-flex justify-content-center mb-0"
            >
              <li>
                <MDBIcon fas icon="star" size="sm" className="text-warning" />
              </li>
              <li>
                <MDBIcon fas icon="star" size="sm" className="text-warning" />
              </li>
              <li>
                <MDBIcon fas icon="star" size="sm" className="text-warning" />
              </li>
              <li>
                <MDBIcon fas icon="star" size="sm" className="text-warning" />
              </li>
              <li>
                <MDBIcon
                  fas
                  icon="star-half-alt"
                  size="sm"
                  className="text-warning"
                />
              </li>
            </MDBTypography>
          </MDBCol>
          <MDBCol md="4" className="mb-5 mb-md-0">
            <div className="d-flex justify-content-center mb-4">
              <img
                src="https://rukminim2.flixcart.com/image/612/612/xif0q/doll-doll-house/q/s/q/dollhouse-for-girls-funny-doll-house-play-set-for-kids-manav-original-imagz8vhqtb7vshe.jpeg?q=70"
                className="rounded-circle shadow-1-strong"
                width="150"
                height="150"
              />
            </div>
            <h5 className="mb-3">DOLL</h5>
            <h6 className="text-primary mb-3">
              Teddify Aquatic Ocean Undersea Queen Mermaid doll for girls soft
              toy Size-30cm
            </h6>

            <MDBTypography
              listUnStyled
              className="d-flex justify-content-center mb-0"
            >
              <li>
                <MDBIcon fas icon="star" size="sm" className="text-warning" />
              </li>
              <li>
                <MDBIcon fas icon="star" size="sm" className="text-warning" />
              </li>
              <li>
                <MDBIcon fas icon="star" size="sm" className="text-warning" />
              </li>
              <li>
                <MDBIcon fas icon="star" size="sm" className="text-warning" />
              </li>
              <li>
                <MDBIcon fas icon="star" size="sm" className="text-warning" />
              </li>
            </MDBTypography>
          </MDBCol>
          <MDBCol md="4" className="mb-5 mb-md-0">
            <div className="d-flex justify-content-center mb-4">
              <img
                src="https://rukminim2.flixcart.com/image/832/832/kngd0nk0/kids-dress/c/3/b/18-24-months-sku-407-red-stumble-fashion-original-imag24f37hgzqbkv.jpeg?q=70&crop=false"
                className="rounded-circle shadow-1-strong"
                width="150"
                height="150"
              />
            </div>
            <h5 className="mb-3">CLOTH</h5>
            <h6 className="text-primary mb-3">
              Baby Girls Midi/Knee Length Festive/Wedding Dress (Red,
              Sleeveless)
            </h6>

            <MDBTypography
              listUnStyled
              className="d-flex justify-content-center mb-0"
            >
              <li>
                <MDBIcon fas icon="star" size="sm" className="text-warning" />
              </li>
              <li>
                <MDBIcon fas icon="star" size="sm" className="text-warning" />
              </li>
              <li>
                <MDBIcon fas icon="star" size="sm" className="text-warning" />
              </li>
              <li>
                <MDBIcon fas icon="star" size="sm" className="text-warning" />
              </li>
              <li>
                <MDBIcon far icon="star" size="sm" className="text-warning" />
              </li>
            </MDBTypography>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    </>
  );
}
