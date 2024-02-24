// import { useNavigate, useParams } from "react-router-dom";
// import { MockProducts } from "../DummyData/DummyProducts";
// import Card from "react-bootstrap/Card";
// import Button from "react-bootstrap/esm/Button";
// import { useContext, useEffect, useState } from "react";
// import { Userside } from "../App";
// import Navbar from "./Navbar";

// function Show() {
//   const nav = useNavigate();
//   const { add, setAdd, data, user, setRender, render } = useContext(Userside);
//   const { id } = useParams();
//   const finding = MockProducts.find((x) => x.id == id);

//   // if(!cartItems.some((item)=>item.id===itemIndex.id))
//   //   setCartItems([...cartItems,itemIndex])

//   const cartHandler = () => {
//     let cartData = user.cart.find((item) => item.id == finding.id);
//     // let itemExists=false;
//     // for(const item of user.cart){
//     //   if(item.id===finding.id)
//     // }
//     if (!cartData) {
//       if(!user.cart.some((item)=>item.id===cartData.id))
//       user.cart.push(finding);
      
//     }
//     // else if(user.cart.includes(cartData[0])){
//     //   alert("This product is already your cart")
//     // }
    
//     else {
//       cartData.quantity += 1;
//       console.log(cartData,"cartData");
//     }
//     setRender(!render);
//   };
//   console.log(data);
//   return (
//     <>
//       <Navbar />
//       <div style={{ display: "flex", justifyContent: "center" }}>
//         <Card style={{ width: "18rem" }}>
//           <Card.Img variant="top" src={finding.image} />
//           <Card.Body>
//             <Card.Title>{finding.title}</Card.Title>
//             <Card.Text>{finding.description}</Card.Text>
//             <Card.Text>₹{finding.price}/-</Card.Text>
//             {/* <Button variant="primary">Buy now</Button> */}
//             <Button
//               variant="primary"
//               className="ms-3"
//               onClick={user ? cartHandler : () => nav("/login")}
//             >
//               Add To CART
//             </Button>
//           </Card.Body>
//         </Card>
//       </div>
//     </>
//   );
// }

// export default Show;


import { useNavigate, useParams } from "react-router-dom";
import { MockProducts } from "../DummyData/DummyProducts";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/esm/Button";
import { useContext } from "react";
import { Userside } from "../App";
import Navbar from "./Navbar";

function Show() {
  const nav = useNavigate();
  const { user, setRender, render } = useContext(Userside);
  const { id } = useParams();
  const finding = MockProducts.find((x) => x.id == id);

  const cartHandler = () => {
    let itemExists = false;
    for (const item of user.cart) {
      if (item.id === finding.id) {
        itemExists = true;
        break;
      }
    }

    if (!itemExists) {
      user.cart.push({ ...finding, quantity: 1 });
    }
    setRender(!render);
  };

  return (
    <>
      <Navbar />
      <div style={{ display: "flex", justifyContent: "center" }}>
        <Card style={{ width: "18rem" }}>
          <Card.Img variant="top" src={finding.image} />
          <Card.Body>
            <Card.Title>{finding.title}</Card.Title>
            <Card.Text>{finding.description}</Card.Text>
            <Card.Text>₹{finding.price}/-</Card.Text>
            <Button
              variant="primary"
              className="ms-3"
              onClick={user ? cartHandler : () => nav("/login")}
            >
              Add To CART
            </Button>
          </Card.Body>
        </Card>
      </div>
    </>
  );
}

export default Show;
