import Image from "../images/desktop/image-interactive.jpg";
export default function Feature() {
  return (
    <section id="feature">
      <div className="text-gray-700 container relative flex flex-col my-40 md:my-48  mx-auto md:mx-12 md:m-12">
        <img src={Image} alt="" className="" />
        <div className="-right-24 bottom-0 bg-white flex flex-col items-center max-w-md mt-4 p-12 md:absolute">
          <h1 className="text-5xl uppercase">The Leader In Interactive VR</h1>
          <p className="text-center md:text-left mt-5">
            Founded in 2011, LoopStudios has been producing world-class virtual
            reality products for some of the best companies around the glob. Our
            award-winning creations have transferred business through digital
            experience that bind to their brand
          </p>
        </div>
      </div>
    </section>
  );
}
