import * as React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Navbar } from "./assets/components/Navbar";
import { Home } from "./routes/Home";

export const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/">
          <Route index element={<Home />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};
