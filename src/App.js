import { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import Home from "./components/Header";
import About from "./components/About";
import Contact from "./components/Contact";
import Products from "./components/Products";
import "./App.css";
import { css } from "@emotion/react";
import PropagateLoader from "react-spinners/PropagateLoader";

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
          <Navbar />
          <Home />
          <Products />
          <About />
          <Contact />
        </>
      )}
    </div>
  );
};
export default App;
