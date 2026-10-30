import React from "react";
import { Routes, Route } from "react-router-dom";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import Job from "./pages/Job";
import About from "./pages/About";
import Contact from "./pages/Contact";
import JobDetails from "./pages/JobDetails";

function App() {
  return (
    <div className="min-h-screen w-full">
      <Navbar></Navbar>
      <Routes>
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<Home />} />
        <Route path="/jobs" element={<Job></Job>}></Route>
        <Route path="/jobs/:guid" element={<JobDetails />} />
        <Route path="/about" element={<About></About>}></Route>
        <Route path="/contact" element={<Contact></Contact>}></Route>
      </Routes>
    </div>
  );
}

export default App;
