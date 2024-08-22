import React from "react";
import Footer from "./components/Footer/Footer";
import {BrowserRouter,Routes,Route} from "react-router-dom";
import Home from "./pages/Home";
import Navbar from "./components/Navbar/Navbar";
import Login from "./pages/Login";





const App = () => {
  return (
    <>
    <BrowserRouter>
    <main className="overflow-x-hidden bg-white text-dark">
    <Navbar />
    <Routes>
      <Route path="/" element={<Home/>}></Route>
      <Route path="/login" element={<Login />}></Route>

    </Routes>
     
      <Footer />
    </main>
    </BrowserRouter>

    </>
  );
};

export default App;
