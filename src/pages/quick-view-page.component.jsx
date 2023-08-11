import React from "react";
import { useLocation } from "react-router-dom";
import MoreOptionComponent from "../components/quick-view/more-option.component";
// import QuickViewComponent from "../components/quick-view/quick-view.component";

const QuickViewPageComponent = ({ urlName }) => {
  const { state } = useLocation();

  return (
    <div className="quick-view-page">
      {/*  <QuickViewComponent
        datas={state.datas}
        setThumbsSwiper={setThumbsSwiper}
      /> */}

      <MoreOptionComponent
        url={urlName.package}
        datas={state.datas}
        clickedData={state.data}
        // thumbsSwiper={thumbsSwiper}
      />
    </div>
  );
};

export default QuickViewPageComponent;
