import React from "react";
import "./Modal.css";

export const Modal = ({children, showModal, setShowModal}) => {
  const handleCloseModal = () => {
    setShowModal(false);
  }
  return (
    <div className="Modal">
      <div className="overlay" onClick={handleCloseModal}></div>
      {children}
    </div>
  );
};
