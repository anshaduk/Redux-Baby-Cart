
// import React, { useContext,} from 'react'
// import { useNavigate, useParams } from 'react-router-dom'
// import { Userside } from '../../App';
// import {MDBContainer,MDBRow, MDBCol,MDBCard,MDBListGroupItem ,MDBCardHeader,MDBListGroup} from 'mdb-react-ui-kit'
// import { useSelector,useDispatch } from 'react-redux';
// import {edit} from '../../Redux/adminProductSlice';






import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { edit } from '../../Redux/adminProductSlice';

function EditProduct() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { id } = useParams();
  const products = useSelector(state => state.admin.items);
  const [editedProduct, setEditedProduct] = useState(null);

  // Find the product to edit based on the ID from URL params
  useEffect(() => {
    const productToEdit = products.find(product => product.id === parseInt(id));
    setEditedProduct(productToEdit);
  }, [id, products]);

  // Handle changes in the form inputs
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setEditedProduct(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  // Handle form submission
  const handleFormSubmit = (event) => {
    event.preventDefault();
    if (editedProduct) {
      dispatch(edit({ id: editedProduct.id, updatedProduct: editedProduct }));
      navigate("/products");
    }
  };

  if (!editedProduct) {
    return <div>Loading...</div>; // Render loading state if product is not found
  }

  return (
    <div>
      <h1>Edit Product</h1>
      <form onSubmit={handleFormSubmit}>
        <div>
          <label htmlFor="title">Name:</label>
          <input
            type="text"
            id="title"
            name="title"
            value={editedProduct.title}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <label htmlFor="src">Image:</label>
          <input
            type="text"
            id="src"
            name="src"
            value={editedProduct.src}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <label htmlFor="price">Price:</label>
          <input
            type="text"
            id="price"
            name="price"
            value={editedProduct.price}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <label htmlFor="description">Description:</label>
          <textarea
            id="description"
            name="description"
            value={editedProduct.description}
            onChange={handleInputChange}
          />
        </div>
        <button type="submit">Save Changes</button>
      </form>
    </div>
  );
}

export default EditProduct;







// function EditProduct() {
//   const products=useSelector(state=>state.admin.items)
//   const dispatch=useDispatch();
//   // const { products,setProducts } =useContext(Userside);
//   // console.log(products);
// const nav=useNavigate();
//   const {id}=useParams()
//   const productID=id

//   const editfilter=products.filter((item)=>(item.id) === parseInt(productID))
//   // console.log(editfilter);
  
//   // const handleEditChange = (event) => {
//   //   event.preventDefault()
//   //   console.log(event.target.src.value);
//   //   const updatedProduct=products.map((e)=>{
//   //   const productimage = event.target.src.value || e.src;
//   //   const productname= event.target.title.value  || e.title;
   
//   //   const productDescription = event.target.description.value  || e.description;
//   //   const productPrice = event.target.price.value  || e.price;
    

//   //   if (e.id === parseInt(productID)) { 
//   //     return {
//   //       ...products,
//   //       id:e.id,
//   //       title:productname,
//   //       src: productimage,
        
//   //       price: productPrice ,
        
//   //       description: productDescription,
//   //   };  
//   //   } 
//   //   else {
//   //     return e;
      
//   // }});
//   // setProducts(updatedProduct)
   
//   //   };


//   const handleEditChange = (event) => {
//     event.preventDefault();
//     const updatedProduct = {
//       id: productID,
//       title: event.target.title.value || "",
//       src: event.target.src.value || "",
//       price: event.target.price.value || "",
//       description: event.target.description.value || "",
//     };
//     // Dispatch the edit action with the updated product and its id
//     dispatch(edit({ id: productID, updatedProduct }));
//     // Navigate back to the products page after editing
//     nav("/products");
//   };


//   return (
//     <>
//      <MDBContainer
//         fluid
//         className="p-4 background-radial-gradient overflow-hidden"
//       >
//            <MDBRow>
//           <MDBCol md="6" className="position-relative">
//     <div>
//         <div className="container" >
//       <h1>Edit Product</h1>
//       {editfilter.map((e)=>
//       <form onSubmit={handleEditChange} key={e.id}>
//         <div className="mb-3">
//           <label htmlFor="name" className="form-label">Name:</label>
//           <input 
//           type="text"
//            className="form-control" 
//            id="title" 
//            placeholder={e.title}
//             />
//         </div>
//         <div className="mb-3">
//           <label htmlFor="src" className="form-label">Image:</label>
//           <input 
//           type="text"
//            className="form-control" 
//            id="src"
//            placeholder={e.image}
//            />
//         </div>
        
//         <div className="mb-3">
//           <label htmlFor="price" className="form-label">Price:</label>
//           <input
//            type="text"
//             className="form-control" 
//             id="price"  
//             placeholder={e.price}
//             />
//         </div>
        
//         <div className="mb-3">
//           <label htmlFor="description" className="form-label">Description:</label>
//           <textarea 
//           className="form-control" 
//           id="description"  
//           placeholder={e.description}
//           />
//         </div>
        
//         <button  className="btn btn-primary" onClick={nav('/products')}>Edit </button>
        
//         <br/>
//         <br/>
//       </form>
//     )}
//     </div>
//     </div>
//     </MDBCol>
    
//     </MDBRow>
//       </MDBContainer>
//     </>
//   )
// }

// export default EditProduct