import React, { useState } from "react";
import { BsFillTelephoneFill } from "react-icons/bs/";
import { MdEmail } from "react-icons/md/";
import { RiCloseLine, RiMenu3Line } from "react-icons/ri";
import { Link } from "react-router-dom";
import LogoLight from "../../assets/logos/logo-light.svg";
import "./header.scss";

const Header = () => {
  const [toggleMenu, setToggleMenu] = useState(true);

  const menuItems = [
    { link: "/emergency-repairs/", title: "Emergency Repairs" },
    { link: "/commercial-glazier/", title: "Commercial Glazier" },
    { link: "/glass-repair/", title: "Glass Repair" },
    { link: "/projects/", title: "Projects" },
    { link: "/about/", title: "About" },
    { link: "/contact/", title: "Contact" },
  ];

  const renderMenuItems = () => {
    return menuItems.map((item) => (
      <li key={item.link} className="header__items__item">
        <Link to={item.link}>{item.title}</Link>
      </li>
    ));
  };

  const toggleMobileMenu = () => {
    setToggleMenu(!toggleMenu);
  };

  return (
    <div className="header">
      <div className="header__logo">
        <Link to="/">
          <img src={LogoLight} alt="" />
        </Link>
      </div>

      <ul className="header__items">{renderMenuItems()}</ul>

      <div className={`header__mobile-menu ${toggleMenu ? "open" : "close"}`}>
        <div className="header__mobile-menu__items">
          <div className="header__mobile-menu__items__item icon icon--phone">
            <BsFillTelephoneFill />
          </div>

          <div className="header__mobile-menu__items__item icon icon--email">
            <MdEmail />
          </div>

          <div className="header__mobile-menu__icon" onClick={toggleMobileMenu}>
            {toggleMenu ? <RiCloseLine /> : <RiMenu3Line />}
          </div>
        </div>

        <div
          className={`header__mobile-menu__container  ${
            toggleMenu ? "open" : "close"
          }`}
        >
          <ul className="header__items">{renderMenuItems()}</ul>
        </div>
      </div>
    </div>
  );
};

export default Header;
