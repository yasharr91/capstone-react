import BookingPage from "./Home/BookingPage";
import HomePage from "./HomePage";
import React from "react";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";

const Nav = () => {
  return (
    <>
      <BrowserRouter>
        <Link to="/"> Home </Link>
        <Link to="/booking"> Booking </Link>
        <Routes>
           
          <Route path="/" element={<HomePage />}>
            {"hjhj "}
            Homepage
          </Route>
          <Route path="/booking" element={<BookingPage />}>
            Bookingpage
          </Route>
        </Routes>
      </BrowserRouter>

      {/* <ul>
        <li>
          <a href="index.html">Home</a>
        </li>
        <li>
          <a href="index.html"></a>
        </li>
        <li>
          <a href="index.html"></a>
        </li>
      </ul> */}
    </>
  );
};
export default Nav;
