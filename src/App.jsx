import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { Outlet } from "react-router-dom";
import NavItems from "./components/NavItems";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <NavItems />
      <Outlet />
      <Footer />
    </>
  );
}

export default App;
