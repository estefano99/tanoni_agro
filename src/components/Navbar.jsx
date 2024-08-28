import { useState, useEffect } from "react";
import logo from "../images/logo.png";

const svgArgentina = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    id="flag-icons-ar"
    viewBox="0 0 640 480"
  >
    <path fill="#74acdf" d="M0 0h640v480H0z" />
    <path fill="#fff" d="M0 160h640v160H0z" />
    <circle cx="320" cy="240" r="40" fill="#f6b40e" />
  </svg>
);

const svgIngles = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    id="flag-icons-gb-eng"
    viewBox="0 0 640 480"
  >
    <path fill="#fff" d="M0 0h640v480H0z" />
    <path fill="#cf142b" d="M272 0h96v480h-96zM0 192h640v96H0z" />
  </svg>
);

const Navbar = () => {
  const [language, setLanguage] = useState("ES");
  const [isOpen, setIsOpen] = useState(false);

  const toggleLanguage = () => {
    setLanguage((prevLanguage) => (prevLanguage === "EN" ? "ES" : "EN"));
  };

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const navbar = document.querySelector(".navbarReveal");
    const path = window.location.pathname;

    if (path !== "/") {
      navbar.classList.add("sticky", "text-black", "bg-slate-200");
      navbar.classList.remove("fixed");
    } else {
      navbar.classList.add("text-white");
    }
  }, []);

  return (
    <header className="fixed inset-x-0 top-0 z-50 bg-transparent flex justify-center navbarReveal">
      <nav
        className="flex items-center justify-between py-3 lg:px-8 w-full max-w-screen-xl"
        aria-label="Global"
      >
        <div className="flex lg:flex-1">
          <a href="/" className="-m-1.5 p-1.5">
            <span className="sr-only">Your Company</span>
            <img
              className="w-20 logoReveal"
              src={logo.src}
              alt="Logo"
              loading="lazy"
            />
          </a>
        </div>
        <div className="flex lg:hidden">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
            onClick={toggleMenu}
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                className={!isOpen ? "block" : "hidden"}
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
                className={isOpen ? "block" : "hidden"}
              />
            </svg>
          </button>
        </div>
        <div className="hidden lg:flex lg:items-center lg:gap-x-12 link-styles">
          <a
            href="/"
            className="flex-1 text-md font-semibold leading-6 hover:scale-105 hover:outline outline-offset-8 outline-2 transition-all"
          >
            Inicio
          </a>
          <a
            href="\nosotros"
            className="flex-1 text-md font-semibold leading-6 hover:scale-105 hover:outline outline-offset-8 outline-2 transition-all"
          >
            Nosotros
          </a>
          <a
            href="/quehacemos"
            className="flex-1 text-md font-semibold leading-6 hover:scale-105 hover:outline outline-offset-8 outline-2 transition-all"
          >
            Qué hacemos
          </a>
          <a
            href="\contacto"
            className="flex-1 text-md font-semibold leading-6 hover:scale-105 hover:outline outline-offset-8 outline-2 transition-all"
          >
            Contacto
          </a>
          <button
            onClick={toggleLanguage}
            className={`${
              language == "ES"
                ? " "
                : " "
            } flex-1 flex justify-center gap-2 items-center text-md font-semibold leading-6 hover:scale-105 hover:outline outline-offset-8 outline-2 transition-all`}
          >
            {language === "ES" ? (
              <>
                <span className="ml-2">{language}</span>
                {svgArgentina}
              </>
            ) : (
              <>
                <span className="ml-2">{language}</span>
                {svgIngles}
              </>
            )}
          </button>
        </div>
      </nav>
      <div
        className={`${isOpen ? "block" : "hidden"} lg:hidden`}
        role="dialog"
        aria-modal="true"
      >
        <div className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          <div className="flex items-center justify-between">
            <a href="#" className="-m-1.5 p-1.5">
              <span className="sr-only">Your Company</span>
              <img className="h-8 w-auto" src={logo.src} alt="Logo" />
            </a>
            <button
              type="button"
              className="-m-2.5 rounded-md p-2.5 text-gray-700"
              onClick={toggleMenu}
            >
              <span className="sr-only">Close menu</span>
              <svg
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-500/10">
              <div className="space-y-2 py-6">
                <a
                  href="#home"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                >
                  Inicio
                </a>
                <a
                  href="#services"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                >
                  Servicios
                </a>
                <a
                  href="#about"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                >
                  Nosotros
                </a>
                <a
                  href="#what-we-do"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                >
                  Qué hacemos
                </a>
                <a
                  href="#contact"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                >
                  Contacto
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
