import React from "react";
import "./Banner.css";
// import Typewriter from "typewriter-effect";
import image from "./Kiran.png";
import Nav from "./Nav";
function Banner() {
  return (
    <div className="banner">
      <Nav />
      <div className="banner__contents">
        <h1 className="banner__Signature">
          Programmer, Frontend Developer & Learner
        </h1>
        <p className="banner__infoText">
          {/* <Typewriter
          onInit={(typewriter) => {
            typewriter
              .typeString(
                "I basically code simple things, and I love what I do ... "
              )
              .start();
          }}
        /> */}
          I basically code simple things, and I love what I do.
        </p>
        <img className="banner__img" src={image} alt="Kiran" />
      </div>
    </div>
  );
}

export default Banner;
