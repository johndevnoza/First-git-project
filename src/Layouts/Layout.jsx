import React from "react";
import "./layout.css";
import { Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import CategoriesPage from "../Pages/CategoriesPage";

export default function Layout() {
  return (
    <>
      <Header />
      <CategoriesPage />
      <Outlet />
      <Footer />
    </>
  );
}
