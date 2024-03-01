import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { edit } from "../../Redux/adminProductSlice";
import "./editProduct.css";

function EditProduct() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { id } = useParams();
  const products = useSelector((state) => state.admin.items);
  const [editedProduct, setEditedProduct] = useState(null);

  // Find the product to edit based on the ID from URL params
  useEffect(() => {
    const productToEdit = products.find(
      (product) => product.id === parseInt(id)
    );
    setEditedProduct(productToEdit);
  }, [id, products]);

  // Handle changes in the form inputs
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setEditedProduct((prevState) => ({
      ...prevState,
      [name]: value,
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
    <div className="edit-product-container">
      <h1>Edit Product</h1>
      <form onSubmit={handleFormSubmit}>
        <div className="form-group">
          <label htmlFor="title">Name:</label>
          <input
            type="text"
            id="title"
            name="title"
            className="input-field"
            value={editedProduct.title}
            onChange={handleInputChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="src">Image:</label>
          <input
            type="text"
            id="src"
            name="src"
            className="input-field"
            value={editedProduct.src}
            onChange={handleInputChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="price">Price:</label>
          <input
            type="text"
            id="price"
            name="price"
            className="input-field"
            value={editedProduct.price}
            onChange={handleInputChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="description">Description:</label>
          <textarea
            id="description"
            name="description"
            className="input-field"
            value={editedProduct.description}
            onChange={handleInputChange}
          />
        </div>
        <button type="submit" className="submit-button">
          Save Changes
        </button>
      </form>
    </div>
  );
}

export default EditProduct;

