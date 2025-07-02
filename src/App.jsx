import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Nav from "./components/NavBar/Nav.jsx";
import NewHome from "./components/Home/NewHome.jsx";
import Contact from "./components/Contact/Contact.jsx";
import Review from "./components/Review/Review.jsx";
import Cart from "./components/Cart/Cart.jsx";
import FAQ from "./components/FAQ/FAQ.jsx";
import Login from "./components/Login/Login.jsx";
import Footer from "./components/Footer/Footer.jsx";
import Profile from "./components/profile/Profile.jsx";
import CheckOut from "./components/Checkout/CheckOut.jsx";
import ProtectedRoute from "./components/ProtectedRoutes/ProtectedRoute.jsx";
import Main from "./components/main/Main.jsx";
import Product from "./components/Product/Product.jsx";

const App = () => {
  return (
    <Router>
      <Nav />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/Shop" element={<NewHome />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/Review" element={<Review />} />
        <Route path="/Cart" element={<Cart />} />
        <Route path="/FAQ" element={<FAQ />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/Product/:id" element={<Product />} />
       
        <Route
          path="/Profile"
          element={
            <ProtectedRoute>
              <Profile />
            </ProtectedRoute>
          }
        />
        <Route
          path="/Checkout"
          element={
            <ProtectedRoute>
              <CheckOut />
            </ProtectedRoute>
          }
        />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
