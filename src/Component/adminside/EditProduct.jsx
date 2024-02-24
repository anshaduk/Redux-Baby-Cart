
import React, { useContext,} from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { Userside } from '../../App';
import {MDBContainer,MDBRow, MDBCol,MDBCard,MDBListGroupItem ,MDBCardHeader,MDBListGroup} from 'mdb-react-ui-kit'


function EditProduct() {
  const { products,setProducts } =useContext(Userside);
  // console.log(products);
const nav=useNavigate();
  const {id}=useParams()
  const productID=id

  const editfilter=products.filter((item)=>(item.id) === parseInt(productID))
  // console.log(editfilter);
  
  const handleEditChange = (event) => {
    event.preventDefault()
    console.log(event.target.src.value);
    const updatedProduct=products.map((e)=>{
    const productimage = event.target.src.value || e.src;
    const productname= event.target.title.value  || e.title;
   
    const productDescription = event.target.description.value  || e.description;
    const productPrice = event.target.price.value  || e.price;
    

    if (e.id === parseInt(productID)) { 
      return {
        ...products,
        id:e.id,
        title:productname,
        src: productimage,
        
        price: productPrice ,
        
        description: productDescription,
    };  
    } 
    else {
      return e;
      
  }});
  setProducts(updatedProduct)
   
    };


  return (
    <>
     <MDBContainer
        fluid
        className="p-4 background-radial-gradient overflow-hidden"
      >
           <MDBRow>
          <MDBCol md="6" className="position-relative">
    <div>
        <div className="container" >
      <h1>Edit Product</h1>
      {editfilter.map((e)=>
      <form onSubmit={handleEditChange} key={e.id}>
        <div className="mb-3">
          <label htmlFor="name" className="form-label">Name:</label>
          <input 
          type="text"
           className="form-control" 
           id="title" 
           placeholder={e.title}
            />
        </div>
        <div className="mb-3">
          <label htmlFor="src" className="form-label">Image:</label>
          <input 
          type="text"
           className="form-control" 
           id="src"
           placeholder={e.image}
           />
        </div>
        
        <div className="mb-3">
          <label htmlFor="price" className="form-label">Price:</label>
          <input
           type="text"
            className="form-control" 
            id="price"  
            placeholder={e.price}
            />
        </div>
        
        <div className="mb-3">
          <label htmlFor="description" className="form-label">Description:</label>
          <textarea 
          className="form-control" 
          id="description"  
          placeholder={e.description}
          />
        </div>
        
        <button  className="btn btn-primary" onClick={nav('/products')}>Edit </button>
        
        <br/>
        <br/>
      </form>
    )}
    </div>
    </div>
    </MDBCol>
    {/* <MDBCol className='ms-'>
      {editfilter.map((e)=>
    <MDBCard 
    style={{boxshadow: 'rgb(38, 57, 77) 0px 20px 30px -10px'}}  key={e.id}>
       <MDBCardHeader className="mx-auto rounded text-primary">DETAILS</MDBCardHeader>
      <MDBListGroup flush>
        <MDBListGroupItem>
         <label className='bg-secondary rounded px-3 text-white'>Name:-</label> 
           {e.title}
          </MDBListGroupItem>
        <MDBListGroupItem>
        <label className='bg-secondary rounded px-3 text-white'>Image:-</label> 
          {e.src}
          </MDBListGroupItem>
       
        <MDBListGroupItem>
        <label className='bg-secondary rounded px-3 text-white'>Price:-</label> 
          {e.price}
          </MDBListGroupItem>
        
        <MDBListGroupItem>
        <label className='bg-secondary rounded px-3 text-white'>Description:-</label> 
          {e.description}
          </MDBListGroupItem>
      </MDBListGroup>
    </MDBCard>
    )}
    </MDBCol> */}
    </MDBRow>
      </MDBContainer>
    </>
  )
}

export default EditProduct