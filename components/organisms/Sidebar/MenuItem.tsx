import React from "react";
import Image from "next/image";
import CX from "classnames";
import Link from "next/link";
interface MenuItemsProps {
  title: string;
  thumbnail: "menu-overview" | "menu-transaction" | "menu-messages" | "menu-card" | "menu-reward" | "menu-setting" | "menu-logout";
  active?: boolean;
  hreff: string
}
const MenuItem = (props: Partial<MenuItemsProps>) => {
  const { title, thumbnail, active, hreff } = props;
  const classItem = CX({
    item: true,
    "mb-30": true,
    active,
  });
  return (
    <div>
      <div className={classItem}>
        <div className="me-3">
          <Image src={`/icon/${thumbnail}.svg`} width={25} height={25} alt="menu" />
        </div>
        <p className="item-title m-0">
          <Link className="n-u text-lg text-decoration-none" href={`${hreff}`}>
            {title}
          </Link>
        </p>
      </div>
    </div>
  );
};

export default MenuItem;
