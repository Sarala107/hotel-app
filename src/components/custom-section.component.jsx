import React from "react";

const CustomSectionComponent = ({ children }) => {
  return (
    <section>
      <div className="wrapper">{children}</div>
    </section>
  );
};

export default CustomSectionComponent;
