import { useState, useEffect } from "react";
import Logo from "../assets/logo.svg";
import { Menu, X } from "lucide-react";
import { Link } from "react-router-dom";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      setIsScrolled(scrollTop > 0);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  function toggleNavBar(){
        setIsOpen(!isOpen)
  }
  return (
    <header
      className={`flex flex-wrap justify-between md:px-[80px] px-16 py-6 border-b text-[13px] ${
        isScrolled ? "bg-black/50" : ""
      }`}
    >
      <Link to="/">
        <img src={Logo} alt="Logo" />
      </Link>
      <div className="hidden md:flex pt-4 font-bold">
        <a href="#features" className="cursor-pointer ">
          Feature
        </a>
        <a href="#work" className="pl-8 cursor-pointer ">
          How It Works
        </a>
      </div>
      <Link to="/appHome">
        <button className="hidden md:flex text-[#120b48] font-bold  hover:shadow-lg hover:duration-700 hover:bg-black/30 rounded-xl p-4 px-8 ">
          Get Started
        </button>
      </Link>
      <div className="md:hidden pt-4">
        <button onClick={toggleNavBar}>{isOpen ? <X /> : <Menu />}</button>
      </div>
      {isOpen && (
        <div
          className={`duration-700 w-[200px] py-10 flex flex-col items-center basis-full ${
            isScrolled ? "" : "bg-black/40"
          } `}
        >
          <div
            className={`flex flex-col items-center pt-4 font-bold ${
              isScrolled ? "text-white" : ""
            } `}
          >
            <a href="#features" className="cursor-pointer ">
              Feature
            </a>
            <a href="#work" className="py-8 cursor-pointer ">
              How It Works
            </a>
          </div>
          <Link to="/appHome">
            <button className="hover:text-[#120b48] text-white bg-[#120b48] hover:bg-[#605c84] font-bold  hover:shadow-lg hover:duration-700 rounded-xl p-4 px-8 ">
              Get Started
            </button>
          </Link>
        </div>
      )}
    </header>
  );
}
