import React, { useEffect, useState } from "react";
import "./include.css";
import { useTranslation } from 'react-i18next';

function Navbar() {
  const [language, setLanguage] = useState("English");
  const { i18n,t } = useTranslation();

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
            <a className="navbar-brand text-light" href="#">
              Navbar
            </a>
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav mx-auto me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    Home
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    Genres
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    Movies
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    Tv Shows
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    Series
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    </>
  );
}

export default Navbar;
