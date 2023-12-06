import { Menubar } from "primereact/menubar";
import { MenuItem } from "primereact/menuitem";
import { Avatar } from "primereact/avatar";
import { Link, useNavigate } from "react-router-dom";
import IUSALogo from "/iusa-logo.webp";
import React, { useContext, useRef, useState } from "react";
import { Menu } from "primereact/menu";
import { PrimeReactContext } from "primereact/api";
import { Button } from "primereact/button";
interface NavBarProps {
  setUser: Function;
}

export default function NavBar({ setUser }: NavBarProps) {
  const [theme, setTheme] = useState("dark");
  const { changeTheme } = useContext(PrimeReactContext);
  const changeMyTheme = () => {
    const newTheme = theme === "dark" ? "light" : "dark";
    changeTheme?.(
      `md-${theme}-indigo`,
      `md-${newTheme}-indigo`,
      "app-theme",
      () => setTheme(newTheme)
    );
  };
  const navigator = useNavigate();
  const itemsData: MenuItem[] = [
    { label: "DashBoard", icon: "pi pi-fw pi-home", url: "/" },
    { label: "Piezas", icon: "pi pi-fw pi-cog", url: "/piezas" },
    { label: "Herramientas", icon: "pi pi-fw pi-folder", url: "/herramientas" },
    { label: "Ordenes", icon: "pi pi-fw pi-file", url: "/ordenes" },
    { label: "Movimientos", icon: "pi pi-fw pi-calendar", url: "/movimientos" },
  ];

  const items: MenuItem[] = itemsData.map((menuItem) => ({
    label: menuItem.label,
    icon: menuItem.icon,
    url: menuItem.url,
    template: (item, options) => {
      return (
        <div onClick={options.onClick}>
          <Link to={item.url ? item.url : "/404"} className={options.className}>
            <i className={item.icon} />
            <span className={`ml-2`}>{item.label}</span>
          </Link>
        </div>
      );
    },
  }));

  const start = (
    <img
      alt="logo"
      src={IUSALogo}
      style={{ height: 40, width: 40 }}
      className="mr-2"
    ></img>
  );
  const end = () => {
    const menuRight = useRef<any>(null);

    const items = [
      {
        label: "Logout",
        icon: "pi pi-fw pi-power-off",
        command: () => {
          window.localStorage.removeItem("loggedUser");
          setUser(null);
          navigator("/login");
        },
      },
      {
        label: "Delete",
        icon: "pi pi-times",
        command: () => {
          console.log("first");
        },
      },
      {
        label: "React Website",
        icon: "pi pi-external-link",
        command: () => {
          window.location.href = "https://reactjs.org/";
        },
      },
      {
        label: "Upload",
        icon: "pi pi-upload",
        command: () => {
          //router.push('/fileupload');
        },
      },
    ];
    return (
      <React.Fragment>
        <Menu
          model={items}
          popup
          ref={menuRight}
          id="popup_menu_right"
          popupAlignment="right"
        />
        <Button
          icon={`pi pi-${theme === "light" ? "moon" : "sun"}`}
          rounded
          className="mr-2"
          outlined
          severity={`${theme === "light" ? "warning" : "info"}`}
          aria-label="Bookmark"
          onClick={() => changeMyTheme()}
        />
        <Avatar
          onClick={(event) => menuRight.current?.toggle(event)}
          className="p-overlay-badge"
          aria-controls="popup_menu_right"
          aria-haspopup
          icon="pi pi-user"
          shape="circle"
          size="large"
        />
      </React.Fragment>
    );
  };

  return (
    <div className="card">
      <Menubar model={items} start={start} end={end} />
    </div>
  );
}
