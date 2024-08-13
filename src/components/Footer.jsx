import React from "react";
import { CiLocationOn } from "react-icons/ci";
import { FaTruckFast } from "react-icons/fa6";
import { MdOutlineDiscount } from "react-icons/md";
import Logo from "../assets/logo.jpg";

const Footer = () => {
  return (
    <div>
      <div className="flex container justify-around sm:p-[70px] p-10 sm:gap-0 gap-5 sm:flex-row flex-col m-auto">
        <div
          style={{ boxShadow: "0 0 30px -8px #000" }}
          className="flex items-center border-2 py-4 px-6 gap-4 justify-around rounded-xl text-[20px] font-bold font-sans"
        >
          <div>
            <FaTruckFast />
          </div>
          <h1>Express Delivery</h1>
        </div>
        <div
          style={{ boxShadow: "0 0 30px -8px #000" }}
          className="flex items-center border-2 py-4 px-6 gap-4 justify-around rounded-xl text-[20px] font-bold font-sans"
        >
          <div>
            <CiLocationOn />
          </div>
          <h1>Order Tracking</h1>
        </div>{" "}
        <div
          style={{ boxShadow: "0 0 30px -8px #000" }}
          className="flex items-center border-2 py-4 px-6 gap-4 justify-around rounded-xl text-[20px] font-bold font-sans"
        >
          <div>
            <MdOutlineDiscount />
          </div>
          <h1>Regular Discounts</h1>
        </div>
      </div>{" "}
      <div className="w-full bg-black text-white p-[70px] font-normal font-sans">
        <div className="container flex sm:flex-row flex-col text-center sm:text-left gap-y-4 justify-around items-center">
          <div className="text-center sm:text-left sm:items-start flex flex-col items-center mb-4 w-[185px] ">
            <img width={100} src={Logo} alt="" />
            <p className="mt-2">
              Transform your style with OnlineWardrobe - where fashion meets
              elegance. Discover the latest trends and timeless classics to
              elevate your wardrobe every day.
            </p>
          </div>
          <div>
            <h3 className="text-xl">Quick Links</h3>
            <ul className="pl-0 list-none mt-2 mb-4">
              <li>
                <a className="text-white hover:underline " href="#">
                  Home
                </a>
              </li>
              <li>
                <a className="text-white hover:underline" href="#">
                  All Products
                </a>
              </li>{" "}
              <li>
                <a className="text-white hover:underline" href="#">
                  About Us
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl">Shop Collections</h3>
            <ul className="pl-0 list-none mt-2 mb-4">
              <li>
                <a className="text-white hover:underline " href="#">
                  Men's Jeans
                </a>
              </li>
              <li>
                <a className="text-white hover:underline" href="#">
                  Women's Tops
                </a>
              </li>{" "}
              <li>
                <a className="text-white hover:underline" href="#">
                  Hoodies
                </a>
              </li>
              <li>
                <a className="text-white hover:underline" href="#">
                  Jackets
                </a>
              </li>{" "}
              <li>
                <a className="text-white hover:underline" href="#">
                  Shoes
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl">Shop Collections</h3>
            <ul className="pl-0 list-none mt-2 mb-4">
              <li>
                <a className="text-white hover:underline " href="#">
                  Men's Jeans
                </a>
              </li>
              <li>
                <a className="text-white hover:underline" href="#">
                  Women's Tops
                </a>
              </li>{" "}
              <li>
                <a className="text-white hover:underline" href="#">
                  Hoodies
                </a>
              </li>
              <li>
                <a className="text-white hover:underline" href="#">
                  Jackets
                </a>
              </li>{" "}
              <li>
                <a className="text-white hover:underline" href="#">
                  Shoes
                </a>
              </li>
            </ul>
          </div>{" "}
          <div>
            <h3 className="text-xl">Shop Collections</h3>
            <ul className="pl-0 list-none mt-2 mb-4">
              <li>
                <a className="text-white hover:underline " href="#">
                  Men's Jeans
                </a>
              </li>
              <li>
                <a className="text-white hover:underline" href="#">
                  Women's Tops
                </a>
              </li>{" "}
              <li>
                <a className="text-white hover:underline" href="#">
                  Hoodies
                </a>
              </li>
              <li>
                <a className="text-white hover:underline" href="#">
                  Jackets
                </a>
              </li>{" "}
              <li>
                <a className="text-white hover:underline" href="#">
                  Shoes
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="flex flex-col sm:flex-row items-center gap-y-3 justify-around font-normal text-[15px] p-[10px]">
        <p>Copyright © 2024 OnlineWardrobe</p>
        <p>
          Developed by{" "}
          <a
            className="underline font-medium hover:text-[red]"
            target="_blank"
            href="https://github.com/Muhammad-Saim-Khan"
          >
            Muhammad Saim Khan
          </a>
        </p>
      </div>
    </div>
  );
};

export default Footer;
