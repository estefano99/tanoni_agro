import { useState, useEffect } from "react";
import logo from "../images/logo.png";

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
    const sr = ScrollReveal({
      reset: true,
      distance: "30px",
      duration: 1000,
      easing: "ease-in-out",
    });

    sr.reveal(".navbarReveal", { delay: 200 });

    const navbar = document.querySelector(".navbarReveal");
    const path = window.location.pathname;

    if (path !== "/") {
      navbar.classList.add("sticky", "text-black");
      navbar.classList.remove("fixed");
    } else {
      navbar.classList.add("text-white");
    }

    // sr.reveal(".logoReveal", {
    //   reset:false,
    //   duration: 2000,
    //   rotate: {
    //     x: 1,  
    //     y: 100,
    //   },
    // });
  }, []);

  return (
    <header className="fixed inset-x-0 top-0 z-50 bg-transparent flex justify-center navbarReveal">
      <nav
        className="flex items-center justify-between p-6 lg:px-8 w-[1120px]"
        aria-label="Global"
      >
        <div className="flex lg:flex-1">
          <a href="/" className="-m-1.5 p-1.5">
            <span className="sr-only">Your Company</span>
            <img
              className="h-12 w-auto logoReveal"
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
        <div className="hidden lg:flex lg:gap-x-12">
          <a
            href="#home"
            className="text-md font-semibold leading-6 "
          >
            Inicio
          </a>
          <a
            href="#services"
            className="text-md font-semibold leading-6 "
          >
            Servicios
          </a>
          <a
            href="\nosotros"
            className="text-md font-semibold leading-6 "
          >
            Nosotros
          </a>
          <a
            href="#what-we-do"
            className="text-md font-semibold leading-6 "
          >
            Qué hacemos
          </a>
          <a
            href="\contacto"
            className="text-md font-semibold leading-6 "
          >
            Contacto
          </a>
          <button
            onClick={toggleLanguage}
            className="text-md font-semibold leading-6 "
          >
            {language}
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
