import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../layouts/header";
import Footer from "../layouts/footer";

const MainRoot = () => {
  return (
    <>
      <Header />
      {/* <BackToTop /> */}
      <Outlet />
      <Footer />
    </>
  );
};

export default MainRoot;
