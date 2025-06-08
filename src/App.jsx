import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Nav from "./components/NavBar/Nav.jsx";
import NewHome from "./components/Home/NewHome.jsx";
import Contact from "./components/Contact/Contact.jsx";
import Review from "./components/Review/Review.jsx";
import Cart from "./components/Cart/Cart.jsx";
import FAQ from "./components/FAQ/FAQ.jsx";
import Login from "./components/Login/Login.jsx";
import Footer from "./components/Footer/Footer.jsx";

const App = () => {
  return (
    <Router>
      <Nav />
      <Routes>
        <Route path="/" element={<NewHome />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/Review" element={<Review />} />
        <Route path="/Cart" element={<Cart />} />
        <Route path="/FAQ" element={<FAQ />} />
        <Route path="/Login" element={<Login />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
