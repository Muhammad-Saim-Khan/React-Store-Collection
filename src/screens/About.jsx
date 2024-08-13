import React from "react";
import bg from "../assets/bg.jpg";
import two from "../assets/two.png";
import three from "../assets/three.png";
import img1 from "../assets/one.png";
import Footer from "../components/Footer";

const About = () => {
  return (
    <div>
      {" "}
      <header>
        <div
          style={{
            backgroundImage: `url(${bg})`,
            backgroundRepeat: "no-repeat",
          }}
          className="h-[50vh]"
        >
          <div className="h-[50vh] bg-transparent bg-custom-gradient opacity-80 flex flex-col">
            <h2 className="text-center text-white font-sans font-bold text-[50px] mt-40">
              About Us
            </h2>{" "}
          </div>
        </div>
      </header>
      <div className="sm:w-[80%] w-[100%] m-auto flex justify-center sm:flex-row flex-col items-center p-5 mt-5 sm:p-[70px] gap-10">
        <div className="flex  items-center gap-5 sm:[50%] w-[100%]">
          <div>
            <img width={300} src={two} alt="" />
          </div>
          <div>
            <h1 className="sm:text-[30px] text-[20px]">
              Latest Trends For All
            </h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
              tellus, luctus nec ullamcorper mattis.
            </p>
          </div>
        </div>
        <div className="flex  items-center gap-5 sm:[50%] w-[100%]">
          <div>
            <img width={300} src={three} alt="" />
          </div>
          <div>
            <h1 className="sm:text-[30px] text-[20px]">
              Sale on latest fashion
            </h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
              tellus, luctus nec ullamcorper mattis.
            </p>
          </div>
        </div>
      </div>
      <div
        style={{
          backgroundImage: `url(${img1})`,
        }}
        className="h-[10px] "
      ></div>
      <div>
        <div className="text-center mt-16">
          <h1 className="text-[35px]">They Love Us!!!</h1>
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default About;
