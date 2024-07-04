import React from "react";
import { Modal, ModalHeader } from "reactstrap";

const Model = ({
  isOpen = false,
  onClose = () => {},
  title = "",
  subTitle = "",
  children = <></>,
  isCloseBtn=true,
}) => {
  const closeBtn = (
    <button className="close text-secondary" onClick={onClose} type="button" style={{border: "none", outline: "none", background: "none", fontSize: "35px"}}>
      &times;
    </button>
  );

  return (
    <div>
      <Modal isOpen={isOpen}>
        <ModalHeader toggle={isCloseBtn && onClose} close={isCloseBtn && closeBtn} className="d-flex justify-content-between">
          {title}
        </ModalHeader>
        <div className="ms-3 m-2">
          <p>{subTitle}</p>
        </div>
        {children}
      </Modal>
    </div>
  );
};

export default Model;
