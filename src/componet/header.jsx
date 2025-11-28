 import React, { useState, useEffect, useCallback } from "react";
import "../Style/Header.css";
import { IoMenu, IoClose } from "react-icons/io5";
import logo from "../assets/image/logo.png";

const Header = () => {
  const [open, setOpen] = useState(false);
  const [visible, setVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  // Wrap in useCallback to fix useEffect dependency warning
  const handleScroll = useCallback(() => {
    if (window.scrollY > lastScrollY) setVisible(false);
    else setVisible(true);

    setLastScrollY(window.scrollY);
  }, [lastScrollY]);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [handleScroll]); // dependency included

  return (
    <header className={`header ${visible ? "show" : "hide"}`}>
      <div className="container">
        <div className="logo-box">
          <img src={logo} alt="Sharda Industries" className="logo-img" />
        </div>

        <nav className="nav">
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#products">Products</a>
          <a href="#gallery">Gallery</a>
          <a href="#contact">Contact</a>
        </nav>

        <div className="menu-icon" onClick={() => setOpen(true)}>
          <IoMenu />
        </div>
      </div>

      <div className={`mobile-menu ${open ? "open" : ""}`}>
        <button className="close-btn" onClick={() => setOpen(false)}>
          <IoClose />
        </button>
        <a href="#home" onClick={() => setOpen(false)}>Home</a>
        <a href="#about" onClick={() => setOpen(false)}>About</a>
        <a href="#products" onClick={() => setOpen(false)}>Products</a>
        <a href="#gallery" onClick={() => setOpen(false)}>Gallery</a>
        <a href="#contact" onClick={() => setOpen(false)}>Contact</a>
      </div>
    </header>
  );
};

export default Header;
