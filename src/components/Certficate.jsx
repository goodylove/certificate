import React from "react";
import Logo from "../assets/logo.png";
import Img from "../assets/source03.jpg";

const Certificate = () => {
  return (
    <div className="container">
      <div className="logo-photo-cotainer">
        <div className="logo">
          <img src={Logo} alt="" />
        </div>
        <div className="cer"></div>
        <div className="passport">
          <img src={Img} alt="" />
        </div>
      </div>

      <h2></h2>
      <div className="user-name">
        <span></span>
        <hr />
      </div>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam itaque
        porro repellat quos asperiores voluptate doloremque veniam numquam
        mollitia nobis omnis, officiis reprehenderit ullam iure facilis in iusto
        aliquid minima?
      </p>
      <div className="date-signature">
        <div className="date">
          <hr />
          <span>DATE</span>
        </div>
        <div className="signature">
          <hr />
          <span>DATE</span>
        </div>
      </div>
    </div>
  );
};

export default Certificate;
