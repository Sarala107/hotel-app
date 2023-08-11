import React from "react";
import BackBtnComponent from "./back-btn.component";

const PageTitleComponent = ({ title }) => {
  return (
    <div className="page-title">
      <BackBtnComponent />
      <h3 className="page-name">{title}</h3>
    </div>
  );
};

export default PageTitleComponent;
