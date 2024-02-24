import React from "react";
import Carousel from "react-bootstrap/Carousel";
import Navbar from "./Navbar";
import Footer from "./Footer";

function Home() {
  const carouselItems = [
    {
      imageSrc:
        "https://images.ctfassets.net/66mrrren2unf/4I0zuSafXlGuE7ed4AWt9V/6230a2720e1ddd37638963f92740e1d0/website__12_.jpg?q=40",
    },
    {
      imageSrc:
        "https://images.mamaearth.in/wysiwyg/B3P2F/webwcta.png",
    },
    {
      imageSrc:
        "http://mamaearth.in/blog/wp-content/uploads/2023/05/Desktop_APPOFFER.gif",
    },
  ];

  return (
    <div>
      <Navbar />

      <div style={{ height: "28rem" }}>
        <Carousel data-bs-theme="dark">
          {carouselItems.map((item, index) => (
            <Carousel.Item key={index}>
              <img className="d-block" src={item.imageSrc} />
            </Carousel.Item>
          ))}
        </Carousel>
      </div>
      <Footer/>
    </div>
  );
}

export default Home;
