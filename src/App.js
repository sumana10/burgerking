import { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import Home from "./components/Header";
import About from "./components/About";
import Contact from "./components/Contact";
import Products from "./components/Products";
import "./App.css";
import { css } from "@emotion/react";
import PropagateLoader from "react-spinners/PropagateLoader";
import { BrowserRouter, Route, Routes } from "react-router-dom";
const App = () => {
  const [loading, setLoading] = useState(false);
  const override = css`
    display: block;
    margin: auto;
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
  `;
  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 5000);
  }, []);

  return (
    <div className="App">
      {loading ? (
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "100vh",
          }}
        >
          <PropagateLoader
            color={"#3d2514"}
            Loading={loading}
            css={override}
            size={40}
          />
        </div>
      ) : (
        <>
          <BrowserRouter>
          <Navbar />
          {/* <Home />
          <Products />
          <About />
          <Contact /> */}
          <Routes>
          <Route index element={<Home/>}/>
          <Route path="products" element={<Products/>}/>
          <Route path="contact" element={<Contact/>}/>
          <Route path="about" element={<About/>}/>
          </Routes>
          </BrowserRouter>
        </>
      )}
    </div>
  );
};
export default App;
