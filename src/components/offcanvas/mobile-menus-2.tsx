import React from "react";

import { mobile_menu_data } from "@/data/menu-data";

export default function MobileMenusTwo() {
  const [navTitle, setNavTitle] = React.useState<string>("");

  const openMobileMenu = (menu: string) => {
    setNavTitle(navTitle === menu ? "" : menu);
  };

  return (
    <nav className="tp-main-menu-content">
      <ul>
        {mobile_menu_data.map((menu) => (
          <li key={menu.id} className="has-dropdown">
            <a href={menu.link} className="pointer">
              {menu.title}
              <button
                className="dropdown-toggle-btn"
                onClick={() => openMobileMenu(menu.title)}
              >
                <i className="fa-light fa-angle-right"></i>
              </button>
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
