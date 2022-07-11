import React from "react";
import { useAuthObserver } from "./hooks/useAuthObserver";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Routes, Route } from "react-router-dom";
import { Feed, Login, Signup } from "./pages";
import { InputModal, Navbar, RequireAuth } from "./components";
import { useGetAllUser } from "./hooks/useGetAllUser";

export const App = () => {
  useAuthObserver();
  useGetAllUser();

  return (
    <>
      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />

      <InputModal />
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route element={<RequireAuth />}>
          <Route path="/" element={<Feed />} />
        </Route>
      </Routes>
    </>
  );
};