import { useState } from "react";
import Logo from "../images/logo.svg";
export default function Hero() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <section id="hero">
      <div className="max-w-6xl mx-auto md:p-4 pb-24">
        <nav className="relative flex justify-between p-4 items-center">
          <img src={Logo} alt="" />
          <div className="hidden md:flex space-x-5">
            <div className="group">
              <a href="" className="text-white font-bold">
                About
              </a>
              <div className="border-2 rounded-full border-white opacity-0 group-hover:opacity-100 duration-200"></div>
            </div>
            <div className="group">
              <a href="" className="text-white font-bold">
                Careers
              </a>
              <div className="border-2 rounded-full border-white opacity-0 group-hover:opacity-100 duration-200"></div>
            </div>
            <div className="group">
              <a href="" className="text-white font-bold">
                Events
              </a>
              <div className="border-2 rounded-full border-white opacity-0 group-hover:opacity-100 duration-200"></div>
            </div>
            <div className="group">
              <a href="" className="text-white font-bold">
                Products
              </a>
              <div className="border-2 rounded-full border-white opacity-0 group-hover:opacity-100 duration-200"></div>
            </div>
            <div className="group">
              <a href="" className="text-white font-bold">
                Support
              </a>
              <div className="border-2 rounded-full border-white opacity-0 group-hover:opacity-100 duration-200"></div>
            </div>
          </div>
          {/* hamburger button */}
          <button
            id="menu-btn"
            className={`${
              isMenuOpen && `open`
            } absolute right-12 z-10 md:hidden top-6`}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <span className="duration-300 block hamburger-top w-8 h-1 bg-white"></span>
            <span className="duration-300 mt-1 block hamburger-middle w-8 h-1 bg-white"></span>
            <span className="duration-300 mt-1 block hamburger-bottom w-8 h-1 bg-white"></span>
          </button>
        </nav>
        <div
          id="menu"
          className={`bg-black text-white  flex-col absolute w-full h-full top-0 p-24 space-y-12 items-center ${
            isMenuOpen ? "flex" : "hidden"
          }`}
        >
          <div className="group">
            <a href="" className="text-white font-bold">
              About
            </a>
            <div className="border-2 rounded-full border-white opacity-0 group-hover:opacity-100 duration-200"></div>
          </div>
          <div className="group">
            <a href="" className="text-white font-bold">
              Careers
            </a>
            <div className="border-2 rounded-full border-white opacity-0 group-hover:opacity-100 duration-200"></div>
          </div>
          <div className="group">
            <a href="" className="text-white font-bold">
              Events
            </a>
            <div className="border-2 rounded-full border-white opacity-0 group-hover:opacity-100 duration-200"></div>
          </div>
          <div className="group">
            <a href="" className="text-white font-bold">
              Products
            </a>
            <div className="border-2 rounded-full border-white opacity-0 group-hover:opacity-100 duration-200"></div>
          </div>
          <div className="group">
            <a href="" className="text-white font-bold">
              Support
            </a>
            <div className="border-2 rounded-full border-white opacity-0 group-hover:opacity-100 duration-200"></div>
          </div>
        </div>
        <h1 className="mx-auto md:mx-0 uppercase text-6xl font-thin text-white max-w-md border border-white p-3 mt-40 md:mb-20">
          Impressive Experiences That Deilvers
        </h1>
      </div>
    </section>
  );
}
