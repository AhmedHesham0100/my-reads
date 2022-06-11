//react
import React from "react";

//react router
import { BrowserRouter, Routes, Route } from "react-router-dom";

//pages
import Home from "../pages/home/Home";
import Search from "../pages/search/Search";
import NotFound from "../pages/notFound/NotFound";

export const Routers = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/myReads-app" element={<Home />} />
        <Route path="/myReads-app/search" element={<Search />} />
        
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
};
