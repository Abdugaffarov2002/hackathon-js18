import React from "react";
import { ToastContainer, TypeOptions, toast } from "react-toastify";

export function notify(msg: string, type: TypeOptions = "success") {
  return toast(msg, {
    type,
  });
}

const Toastify = () => {
  return (
    <ToastContainer
      position="top-center"
      autoClose={5000}
      hideProgressBar={false}
      newestOnTop={false}
      closeOnClick
      rtl={false}
      pauseOnFocusLoss
      draggable
      pauseOnHover
      theme="light"
    />
  );
};

export default Toastify;
