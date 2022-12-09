import React from "react";
import Sidebar from "../../../components/organisms/Sidebar/Sidebar";
import TransactionContent from "../../../components/organisms/TransactionContent/TransactionContent";

const Pay = () => {
  return (
    <div>
      <section className="transactions overflow-auto">
        <Sidebar activeMenu="transactions" />
        <TransactionContent/>
      </section>
    </div>
  );
};

export default Pay;
