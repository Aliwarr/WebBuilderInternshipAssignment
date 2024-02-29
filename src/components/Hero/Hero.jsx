import React, { useState } from "react";
import "./Hero.scss";
import { FiChevronDown } from "react-icons/fi";
import { AiOutlineExclamationCircle } from "react-icons/ai";
import { IoMdStar, IoIosStarHalf } from "react-icons/io";
import { IoDiamondOutline } from "react-icons/io5";

function Hero({ n, rating, remark,icon }) {
  return (
    <>
      <div className="hero-content">
        <div className="btn">
            <button>{icon}{remark.advice}</button>
        </div>
        <div className="circle">{n}</div>
        <div className="image">
          <img src="/images/image.png" alt="image" />
          Builder
        </div>
        <div className="content">
          <h4>
            <span>WixPro 72-Inch Responsive Website Builder-</span>{" "}
            Comprehensive Digital Platform Creation Tool, Streamlined Design
            Interface for Professional Websites and Online Stores (Black/Blue)
          </h4>
          <div className="text">
            <h3>Main Highlights</h3>
            <h4>
              [What You Get]: Receive the WixPro website builder suite, access
              to premium design templates, an extensive library of widgets and
              apps, and detailed step-by-step guides.
            </h4>
          </div>
          <div className="last">
            <a href="/show">Show more</a>
            <FiChevronDown />
          </div>
        </div>
        <div className="rating">
          <div className="details">
            <AiOutlineExclamationCircle className="icon1" />
            <div className="rates">
              <h3>{rating}</h3>
              <h4>{remark.words}</h4>
              <div className="stars">
                <IoMdStar className="icon2" />
                <IoMdStar className="icon2" />
                <IoMdStar className="icon2" />
                <IoMdStar className="icon2" />
                <IoIosStarHalf className="icon2" />
              </div>
            </div>
          </div>
          <button>View</button>
        </div>
      </div>
    </>
  );
}

export default Hero;
