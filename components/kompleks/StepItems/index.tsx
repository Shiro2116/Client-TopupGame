import React from "react";
import Image from "next/image";
interface StepItemProps {
  icon: "items1" | "items2" | "items3";
  desc1: string;
  desc2: string;
  title: string;
}
const StepItems = (props: StepItemProps) => {
  const { icon, desc1, desc2, title } = props;
  return (
    <div>
      <div className="">
        <div className="card feature-card border-0  mb-10  ">
          <Image src={require(`/public/icon/${icon}.svg`)} width={80} height={80} alt="items1" />
          <p className="fw-semibold text-2xl mb-2 color-palette-1">{title}</p>
          <p className="text-lg color-palette-1 mb-0">
            {desc1}
            <br />
           {desc2}
          </p>
        </div>
      </div>
    </div>
  );
};

export default StepItems;
