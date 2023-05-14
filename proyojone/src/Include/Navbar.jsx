import React, { useEffect, useState } from "react";
import "./include.css";
import { useTranslation } from "react-i18next";
import { BsCartPlus, BsCartPlusFill, BsSearch } from "react-icons/bs";
import { CgProfile } from "react-icons/cg";
import { Link } from "react-router-dom";
function Navbar() {
  const [language, setLanguage] = useState("English");
  const { i18n, t } = useTranslation();

  const handleLanguage = (e) => {
    const lang = e.target.name;
    localStorage.setItem("language", lang);
    languageName(lang);
    i18n.changeLanguage(lang);
  };

  const languageName = (lang) => {
    if (lang === "en") {
      setLanguage("English");
    } else if (lang === "fr") {
      setLanguage("Français");
    } else if (lang === "de") {
      setLanguage("Deutsch");
    } else if (lang === "pt") {
      setLanguage("Português");
    } else if (lang === "bn") {
      setLanguage("বাংলা");
    }
  };

  const getLanguageFromSession = () => {
    const sessionlang = localStorage.getItem("language");
    languageName(sessionlang);
  };

  useEffect(() => {
    getLanguageFromSession();
  }, []);

  return (
    <>
      <div className="topBar">
        <ul className="nav justify-content-end">
          <li className="nav-item">
            <a className="nav-link" aria-current="page" href="#">
              {t("TopBar.login")}
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">
              {t("TopBar.register")}
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">
              {t("TopBar.help")}
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">
              {t("TopBar.feedback")}
            </a>
          </li>
          <li className="nav-item dropdown">
            <a
              className="nav-link dropdown-toggle"
              href="#"
              role="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              {/* <GrLanguage /> */}
              {language}
            </a>
            <ul className="dropdown-menu">
              <li>
                <a
                  className="dropdown-item btn"
                  name="en"
                  onClick={handleLanguage}
                >
                  English (En)
                </a>
              </li>
              <li>
                <a className="dropdown-item" name="fr" onClick={handleLanguage}>
                  Français (Fr)
                </a>
              </li>
              <li>
                <a className="dropdown-item" name="de" onClick={handleLanguage}>
                  Deutsch (De)
                </a>
              </li>
              <li>
                <a className="dropdown-item" name="pt" onClick={handleLanguage}>
                  Português (pt)
                </a>
              </li>
              <li>
                <a className="dropdown-item" name="bn" onClick={handleLanguage}>
                  বাংলা (Bn)
                </a>
              </li>
            </ul>
          </li>
        </ul>
      </div>

      <div>
        <nav className="navbar navbar-expand-lg navbar-background">
          <div className="container">
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <Link className="navbar-brand text-dark mx-5" to="/">
              <img src="/image/logo/logo.png" className="img-fluid w-75" alt="" />
            </Link>
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <div className="input-group my-2">
                <input
                  type="text"
                  className="form-control search-input"
                  placeholder={t("Navbar.search")}
                  aria-label="Recipient's username"
                  aria-describedby="button-addon2"
                />
                <button
                  className="btn search-btn"
                  type="button"
                  id="button-addon2"
                >
                  <BsSearch />
                </button>
              </div>
              <div className="mx-3 my-2">
              <button
                  className="btn cart-btn"
                  type="button"
                  id="button-addon2"
                >
                  <BsCartPlusFill size={18}/>
                </button>
              </div>
              {/* <div className="mx-1">
              <button
                  className="btn cart-btn"
                  type="button"
                  id="button-addon2"
                >
                  <CgProfile size={18}/>
                </button>
              </div> */}
            </div>
          </div>
        </nav>
      </div>
    </>
  );
}

export default Navbar;
