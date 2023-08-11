import React from "react";
import CardListComponent from "../components/card/card-list.component";
import CardComponent from "../components/card/card.component";
import PageTitleComponent from "../components/page-title.component";

const SpaPageComponent = ({ datas }) => {
  return (
    <div className="package-page">
      <PageTitleComponent title="SPA" />

      <section>
        <div className="wrapper">
          <CardListComponent>
            {datas.map((data, idx) => (
              <CardComponent key={idx} data={data} />
            ))}
          </CardListComponent>
        </div>
      </section>
    </div>
  );
};

export default SpaPageComponent;

