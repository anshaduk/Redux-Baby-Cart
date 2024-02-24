import Home from "./Component/Home";
import { Routes, Route } from "react-router-dom";
import Login from "./Component/Login";
import Signup from "./Component/Signup";
import Shop from "./Component/Shop";
import Aboutus from "./Component/Aboutus";
import Contactus from "./Component/Contactus";
import Navbars from "./Component/Navbar";
import Footer from "./Component/Footer";
import { createContext, useState } from "react";
import Show from "./Component/Show";
import Addtocart from "./Component/Addtocart";
import { MockProducts } from "./DummyData/DummyProducts";
import Admin from "./Component/adminside/Admin";
import Adminlogin from "./Component/adminside/Adminlogin";
import CheckOut from "./Component/CheckOut";
import Profile from "./Component/Profile";
import Products from "./Component/adminside/Products";
import UserData from "./Component/adminside/UserData";
import AddnewProduct from "./Component/adminside/AddnewProduct";
import EditProduct from "./Component/adminside/EditProduct";

export const Userside = createContext();
function App() {
  const [add, setAdd] = useState(0);
  const [data, setData] = useState([]);
  const [user, setUser] = useState(null);
  const [search, setSearch] = useState("");
  const [products, setProducts] = useState(MockProducts);
  const [render, setRender] = useState(false);

  return (
    <div>
      <Userside.Provider
        value={{
          add,
          render,
          setRender,
          setAdd,
          data,
          setData,
          user,
          setUser,
          search,
          setSearch,
          products,
          setProducts,
        }}
      >
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/:title" element={<Shop />} />
          <Route path="/testimonial" element={<Aboutus />} />
          <Route path="/contact" element={<Contactus />} />
          <Route path="/:title/:id" element={<Show />} />
          <Route path="/cart" element={<Addtocart />} />
          <Route path="/admin" element={<Admin />} />
          <Route path="/adminlogin" element={<Adminlogin />} />
          <Route path="/checkout" element={<CheckOut />} />
          <Route path="/products" element={<Products />} />
          <Route path="/userdata" element={<UserData />} />
          <Route path="/addnewproduct" element={<AddnewProduct />} />
          <Route path="/editproduct/:id" element={<EditProduct />} />
        </Routes>
      </Userside.Provider>
    </div>
  );
}

export default App;
