import Logo from "../images/logo.svg";
import Facebook from "../images/icon-facebook.svg";
import Instagram from "../images/icon-instagram.svg";
import Twiiter from "../images/icon-twitter.svg";
import Pinterest from "../images/icon-pinterest.svg";
export default function Footer() {
  return (
    <footer id="footer">
      <div className="flex flex-col md:flex-row bg-black p-12 w-full justify-between items-center">
        {/* navigation */}
        <div>
          <img src={Logo} alt="" />
          <div className="flex flex-col md:flex-row md:space-x-5 mt-4 mb-4 md:mb-0 items-center md:items-start">
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
        </div>
        {/* social */}
        <div className=" flex flex-col items-center">
          <div className="flex space-x-3">
            <img src={Facebook} alt="" className="cursor-pointer" />
            <img src={Instagram} alt="" className="cursor-pointer" />
            <img src={Twiiter} alt="" className="cursor-pointer" />
            <img src={Pinterest} alt="" className="cursor-pointer" />
          </div>
          <p className="text-gray-500 text-left mt-4">
            &copy; 2024 Loopstudios. All rights reserved
          </p>
        </div>
      </div>
    </footer>
  );
}
