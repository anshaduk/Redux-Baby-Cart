import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import {  useDispatch } from "react-redux";
import { addNewProduct } from "../../Redux/adminProductSlice";

import {
  MDBRow,
  MDBCol,
  MDBInput,
  MDBCheckbox,
  MDBBtn,
} from "mdb-react-ui-kit";
import { Userside } from "../../App";
import { useNavigate } from "react-router-dom";


const handle =(e)=>{
  e.preventDefault()
}
const AddnewProduct = () => {
  const nav=useNavigate();
  const dispatch=useDispatch();
  const { products,setProducts } =useContext(Userside);
  const [addingProduct, setAddingProduct] = useState(false);
  // console.log(addingProduct,"adding product");
  const [newProduct, setNewProduct] = useState({
    //name: "",
    title: "",
    description: "",
    price: 0,
    image: "",
  });

  const handleAddNewProduct=()=>{
    dispatch(addNewProduct(newProduct))
    nav('/products')
  }

  console.log(newProduct,"hello");
  return (
    <form style={{ margin: "30px" }} onSubmit={handle}>
      
      <MDBInput
        wrapperClass="mb-4"
        id="form6Example4"
        label="Product title"
        onChange={(event) => {
          setNewProduct({ ...newProduct, title: event.target.value });
        }}
      />
      <MDBInput
        wrapperClass="mb-4"
        id="form6Example4"
        label="Product Description"
        onChange={(event) => {
          setNewProduct({ ...newProduct, description: event.target.value });
        }}
      />
      <MDBInput
        wrapperClass="mb-4"
        id="form6Example3"
        label="Product price"
        onChange={(event) => {
          setNewProduct({ ...newProduct, price: event.target.value });
        }}
      />
      <MDBInput
        wrapperClass="mb-4"
        id="form6Example4"
        label="Product image"
        onChange={(event) => {
          setNewProduct({ ...newProduct, image: event.target.value });
        }}
      />
  <Link to={'/products'}>
      <MDBBtn
        className="mb-4"
        type="submit"
        block
        onClick={handleAddNewProduct}
        //onClick={() => {
      //     setAddingProduct(false);
      //     newProduct.name !== "" &&
      //       newProduct.title !== "" &&
      //       newProduct.description !== "" &&
      //       newProduct.price !== 0;
      //     newProduct.image !== ""
      //       ? setProducts([...products,newProduct])
      //       : alert("Please Complete the deatails");
       //  }}
       >
        Added To List
        
      </MDBBtn>
      </Link>
    </form>
  );
};

export default AddnewProduct;
