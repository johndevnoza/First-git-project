import React from "react";
import "./layout.css";
import { Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import { CategoriesFetch } from "../Services/Api/CategoriesFetch";

export default function Layout() {
  return (
    <>
      <Header />
      <CategoriesFetch />
      <Outlet />
      <Footer />
    </>
  );
}
