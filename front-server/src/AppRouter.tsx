import React from "react";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import JobMain from "./pages/Job/JobMain";
import NavBar from "./components/Layout/NavBar";
import WelfareMain from "./pages/Welfare/WelfareMain";
import Main from "./pages/Main";

const AppRouter = () => {
  return (
    <>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/job/*" element={<JobMain />} />
          <Route path="/welfare/*" element={<WelfareMain />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default AppRouter;
