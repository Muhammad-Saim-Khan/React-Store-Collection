import React from "react";
import "../App.css";
import bg from "../assets/bg.jpg";
import img from "../assets/bg.png";
import img1 from "../assets/one.png";

const Dashboard = () => {
  return (
    <div>
      <header>
        <div
          style={{
            backgroundImage: `url(${bg})`,
            backgroundRepeat: "no-repeat",
          }}
          className="h-[100vh] "
        >
          {" "}
          <div className="h-screen bg-transparent bg-custom-gradient opacity-80 flex flex-col">
            <div className="flex flex-col items-center justify-center h-full max-w-6xl mx-auto sm:w-[60%] sm:items-start px-4 sm:px-6 lg:px-8">
              <div className="flex flex-col font-sans mt-5 gap-4 w-full max-w-lg sm:w-[60%] text-white text-center sm:text-left">
                <h2 className="text-2xl sm:text-3xl">Summer Collection</h2>
                <h1 className="sm:text-[70px] text-[50px] font-[400] leading-tight">
                  Introducing New Arrivals
                </h1>
                <p className="text-base sm:text-lg">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut
                  elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus
                  leo.
                </p>
                <div className="mt-5 flex justify-center sm:justify-start">
                  <button className="relative w-full max-w-48 h-12 outline-none transition duration-100 bg-transparent border-none text-xs font-bold text-[#ddebf0] flex items-center justify-center">
                    VIEW COLLECTION
                    <div
                      id="clip"
                      className="absolute top-0 left-0 w-full h-full border-5 border-double border-[#2761c3] shadow-inner shadow-[#195480] clip-path"
                    >
                      <div
                        id="leftTop"
                        className="corner absolute top-[-1.96em] left-[-3.0em]"
                      ></div>
                      <div
                        id="rightBottom"
                        className="corner absolute top-[45%] left-[88%]"
                      ></div>
                      <div
                        id="rightTop"
                        className="corner absolute top-[-1.98em] left-[91%]"
                      ></div>
                      <div
                        id="leftBottom"
                        className="corner absolute top-[2.10em] left-[-2.15em]"
                      ></div>
                    </div>
                    <span
                      id="rightArrow"
                      className="arrow absolute top-[35%] w-[11%] h-[30%] bg-[#2761c3] left-[102%]"
                    ></span>
                    <span
                      id="leftArrow"
                      className="arrow absolute top-[35%] w-[11%] h-[30%] bg-[#2761c3] left-[-13.5%]"
                    ></span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
      <section className="pt-[50px] pb-[50px] p-3 sm:p-[70px] font-sans">
        <div className="container  flex flex-col gap-[.5rem]">
          {" "}
          <img
            className="w-16 grayscale brightness-0" // Apply grayscale and brightness transformation
            src={img}
            alt=""
          />
          <h1
            className="text-[40px] sm:text-[60px] font-[350] leading-tight spaciing"
            style={{ letterSpacing: "-2px" }}
          >
            Shopping is cheaper than therapy.
          </h1>
          <div className="flex items-center mt-5 gap-[.5rem]">
            <span className="inline-block sm:w-[200px] w-[150px] h-[1px] bg-[#00000059]"></span>
            <span className="sm:text-[1.275rem]  text-[20px]">
              Online Wardrobe
            </span>
          </div>
        </div>
      </section>
      <div
        style={{
          backgroundImage: `url(${img1})`,
        }}
        className="h-[10px] "
      ></div>
      <div className="p-[45px] w-full ">
        <h1 className=" text-center sm:text-[40px] text-[30px] font-medium font-sans">
          Featured Products
        </h1>
      </div>
      {/* <div>
        <Routes>
          <Route index element={<Home />} />
          <Route path="product/:id" element={<SingleProduct />} />
        </Routes>
      </div> */}
    </div>
  );
};

export default Dashboard;
