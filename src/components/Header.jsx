import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { logo, logo_white } from "../lib/image";
import { Link } from "react-router-dom";

export default function Header() {
  const [isNavbarFixed, setIsNavbarFixed] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollHeight = window.scrollY;
      const scrollThreshold = 80;

      if (scrollHeight > scrollThreshold && !isNavbarFixed) {
        setIsNavbarFixed(true);
      } else if (scrollHeight <= scrollThreshold && isNavbarFixed) {
        setIsNavbarFixed(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [isNavbarFixed]);

  function toggleNavBar() {
    setIsOpen(!isOpen);
  }
  return (
    <nav
      className={`nav md:px-[80px] px-4 ${isNavbarFixed ? "nav_fixed" : ""}`}
    >
      <div className="nav_inner relative container_main">
        <div className="nav_left">
          <Link to="/">
            {isNavbarFixed ? (
              <img src={logo_white} alt="Logo" className="w-40" />
            ) : (
              <img src={logo} alt="Logo" />
            )}
          </Link>
        </div>
        <div className="nav_middle">
          <div className="nav_middle_inner">
            <div className="hidden md:flex gap-8 font-bold text-xl">
              <a href="#features" className="cursor-pointer ">
                Feature
              </a>
              <a href="#work" className="cursor-pointer ">
                How It Works
              </a>
            </div>
          </div>
        </div>
        <div className="nav_right">
          <div className="nav_right_inner">
            <Link to={"/webhome"}>
              <button
                className={`${
                  isNavbarFixed
                    ? "bg-[#fff] text-black"
                    : "bg-[#120b48] text-white"
                } font-bold  hover:duration-700 rounded-xl p-4 px-8`}
              >
                Get Started
              </button>{" "}
            </Link>
          </div>
        </div>
        <div className="md:hidden pt-4">
          <button onClick={toggleNavBar}>{isOpen ? <X /> : <Menu />}</button>
        </div>

        {isOpen ? (
          <>
            <div className={`dropdown_menu ${isOpen ? "open" : ""}`}>
              <ul className="menu_lists">
                <a href="#features" className="cursor-pointer ">
                  <li>Feature</li>
                </a>
                <a href="#work" className="cursor-pointer ">
                  <li>How It Works</li>
                </a>

                <li>
                  <button className="bg-[#120b48] text-white font-bold  hover:duration-700 rounded-xl p-4 px-8">
                    Get Started
                  </button>
                </li>
              </ul>
            </div>
          </>
        ) : (
          <></>
        )}
      </div>
    </nav>
  );
}
