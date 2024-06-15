import Image1Desktop from "../images/desktop/image-deep-earth.jpg";
import Image2Desktop from "../images/desktop/image-curiosity.jpg";
import Image3Desktop from "../images/desktop/image-fisheye.jpg";
import Image4Desktop from "../images/desktop/image-from-above.jpg";
import Image5Desktop from "../images/desktop/image-grid.jpg";
import Image6Desktop from "../images/desktop/image-night-arcade.jpg";
import Image7Desktop from "../images/desktop/image-pocket-borealis.jpg";
import Image8Desktop from "../images/desktop/image-soccer-team.jpg";
import Image1Mobile from "../images/mobile/image-deep-earth.jpg";
import Image2Mobile from "../images/mobile/image-curiosity.jpg";
import Image3Mobile from "../images/mobile/image-fisheye.jpg";
import Image4Mobile from "../images/mobile/image-from-above.jpg";
import Image5Mobile from "../images/mobile/image-grid.jpg";
import Image6Mobile from "../images/mobile/image-night-arcade.jpg";
import Image7Mobile from "../images/mobile/image-pocket-borealis.jpg";
import Image8Mobile from "../images/mobile/image-soccer-team.jpg";
export default function Creations() {
  return (
    <section id="creations">
      <div className="  px-12 md:px-0 max-w-6xl mx-auto">
        {/* header */}
        <div className="flex items-center justify-between mb-20 flex-col md:flex-row">
          <h1 className="uppercase text-5xl font-thin text-gray-700">
            Our creations
          </h1>
          <a
            href=""
            className="tracking-widest duration-200  uppercase px-10 py-2 hidden md:block border-2 border-black hover:bg-black hover:text-white"
          >
            See More
          </a>
        </div>
        {/* creations */}
        <div className="flex mb-40 gap-10 flex-wrap md:flex-row flex-col">
          <div className="group relative">
            <img
              src={Image1Desktop}
              alt=""
              className="group-hover:scale-105 duration-200 hidden md:block"
            />
            <img
              src={Image1Mobile}
              alt=""
              className="group-hover:scale-105 duration-200  md:hidden"
            />
            <h3 className="absolute bottom-0 text-white uppercase p-8 text-2xl z-10 font-thin group-hover:scale-105 duration-200">
              Deep earth
            </h3>
            <div className="group-hover:scale-105 duration-200  absolute w-full h-full bg-gradient-to-b from-transparent to-black top-0 left-0"></div>
          </div>
          <div className="group relative">
            <img
              src={Image6Desktop}
              alt=""
              className="group-hover:scale-105 duration-200 hidden md:block"
            />
            <img
              src={Image6Mobile}
              alt=""
              className="group-hover:scale-105 duration-200  md:hidden"
            />
            <h3 className="absolute bottom-0 text-white uppercase p-8 text-2xl z-10 font-thin group-hover:scale-105 duration-200">
              Night Arcade
            </h3>
            <div className="group-hover:scale-105 duration-200  absolute w-full h-full bg-gradient-to-b from-transparent to-black top-0 left-0"></div>
          </div>
          <div className="group relative">
            <img
              src={Image8Desktop}
              alt=""
              className="group-hover:scale-105 duration-200 hidden md:block"
            />
            <img
              src={Image8Mobile}
              alt=""
              className="group-hover:scale-105 duration-200  md:hidden"
            />
            <h3 className="absolute bottom-0 text-white uppercase p-8 text-2xl z-10 font-thin group-hover:scale-105 duration-200">
              Soccer team vr
            </h3>
            <div className="group-hover:scale-105 duration-200  absolute w-full h-full bg-gradient-to-b from-transparent to-black top-0 left-0"></div>
          </div>
          <div className="group relative">
            <img
              src={Image5Desktop}
              alt=""
              className="group-hover:scale-105 duration-200 hidden md:block"
            />
            <img
              src={Image5Mobile}
              alt=""
              className="group-hover:scale-105 duration-200  md:hidden"
            />
            <h3 className="absolute bottom-0 text-white uppercase p-8 text-2xl z-10 font-thin group-hover:scale-105 duration-200">
              the grid
            </h3>
            <div className="group-hover:scale-105 duration-200  absolute w-full h-full bg-gradient-to-b from-transparent to-black top-0 left-0"></div>
          </div>
          <div className="group relative">
            <img
              src={Image4Desktop}
              alt=""
              className="group-hover:scale-105 duration-200 hidden md:block"
            />
            <img
              src={Image4Mobile}
              alt=""
              className="group-hover:scale-105 duration-200  md:hidden"
            />
            <h3 className="absolute bottom-0 text-white uppercase p-8 text-2xl z-10 font-thin group-hover:scale-105 duration-200">
              from up above vr
            </h3>
            <div className="group-hover:scale-105 duration-200  absolute w-full h-full bg-gradient-to-b from-transparent to-black top-0 left-0"></div>
          </div>
          <div className="group relative">
            <img
              src={Image7Desktop}
              alt=""
              className="group-hover:scale-105 duration-200 hidden md:block"
            />
            <img
              src={Image7Mobile}
              alt=""
              className="group-hover:scale-105 duration-200  md:hidden"
            />
            <h3 className="absolute bottom-0 text-white uppercase p-8 text-2xl z-10 font-thin group-hover:scale-105 duration-200">
              pocket borealis
            </h3>
            <div className="group-hover:scale-105 duration-200  absolute w-full h-full bg-gradient-to-b from-transparent to-black top-0 left-0"></div>
          </div>
          <div className="group relative">
            <img
              src={Image2Desktop}
              alt=""
              className="group-hover:scale-105 duration-200 hidden md:block"
            />
            <img
              src={Image2Mobile}
              alt=""
              className="group-hover:scale-105 duration-200  md:hidden"
            />
            <h3 className="absolute bottom-0 text-white uppercase p-8 text-2xl z-10 font-thin group-hover:scale-105 duration-200">
              the curiosity
            </h3>
            <div className="group-hover:scale-105 duration-200  absolute w-full h-full bg-gradient-to-b from-transparent to-black top-0 left-0"></div>
          </div>
          <div className="group relative">
            <img
              src={Image3Desktop}
              alt=""
              className="group-hover:scale-105 duration-200 hidden md:block"
            />
            <img
              src={Image3Mobile}
              alt=""
              className="group-hover:scale-105 duration-200  md:hidden"
            />
            <h3 className="absolute bottom-0 text-white uppercase p-8 text-2xl z-10 font-thin group-hover:scale-105 duration-200">
              make it fisheye
            </h3>
            <div className="group-hover:scale-105 duration-200  absolute w-full h-full bg-gradient-to-b from-transparent to-black top-0 left-0"></div>
          </div>
          <a
            href=""
            className="tracking-widest duration-200  uppercase px-10 py-2  md:hidden text-center border-2 border-black hover:bg-black hover:text-white"
          >
            See More
          </a>
        </div>
      </div>
    </section>
  );
}
