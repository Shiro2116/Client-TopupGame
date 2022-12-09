import React from "react";
import Overview from "../../components/organisms/Overview/Overview";
import Sidebar from "../../components/organisms/Sidebar/Sidebar";

const View = () => {
  return (
    <div>
      <section className="overview overflow-auto">
        <Sidebar activeMenu="overview" />
       <Overview/>
      </section>
    </div>
  );
};

export default View;
