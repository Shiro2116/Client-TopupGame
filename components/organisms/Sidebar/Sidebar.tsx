import React from "react";
import FooterSB from "./Footer";
import MenuItem from "./MenuItem";
import Profile from "./Profile";
interface sideBarProps {
  activeMenu : "overview" | "transactions" | "settings"
}
const Sidebar = (props : sideBarProps) => {
  const {activeMenu} = props
  return (
    <div>
      <section className="sidebar">
        <div className="content pt-50 pb-30 ps-30">
          <Profile />
          <div className="menus">
            <MenuItem title="Overview" thumbnail="menu-overview" active={activeMenu === "overview"} hreff="/member" />
            <MenuItem title="Transactions" thumbnail="menu-transaction" active={activeMenu === "transactions"} hreff="/member/pay" />
            <MenuItem title="Mesages" thumbnail="menu-messages" hreff="/member" />
            <MenuItem title="Card" thumbnail="menu-card" hreff="/member" />
            <MenuItem title="Rewards" thumbnail="menu-reward" hreff="/member" />
            <MenuItem title="Setting" thumbnail="menu-setting" active={activeMenu === "settings"} hreff="/member/edit-profile" />
            <MenuItem title="Log out" thumbnail="menu-logout" hreff="/sign-in" />
          </div>
          <FooterSB />
        </div>
      </section>
    </div>
  );
  
};
export default Sidebar;
