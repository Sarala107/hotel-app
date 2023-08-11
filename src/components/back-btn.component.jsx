import React from "react";
import { useNavigate } from "react-router-dom";
import { IconBackBtn } from "./icon.component";

const BackBtnComponent = () => {
  const navigate = useNavigate();

  return (
    <button className="back-btn" onClick={() => navigate(-1)}>
      <IconBackBtn />
    </button>
  );
};

export default BackBtnComponent;
