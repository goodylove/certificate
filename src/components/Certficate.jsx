import React from "react";
import Logo from "../assets/logo.png";
import Img from "../assets/source03.jpg";
import "./Certificate.css";

const Certificate = () => {
  return (
    <div className="overall">
      <div className="first-border"></div>

      <div className="container">
        <div className="blue-con"></div>
        <div className="orange-con1"></div>
        <div className="orange-con2"></div>
        <div className="logo-photo-cotainer">
          <div className="logo">
            <img src={Logo} alt="logo" className="logo" />
          </div>
          <div className="certi">
            <div>CERTIFICATE</div>
            <span>OF APPRECIATION</span>
          </div>
          <div className="passport">
            <img src={Img} alt="passport" className="passport" />
          </div>
        </div>

        <h2>PROUDLY PRESENTED TO</h2>
        <div className="user-name">
          <span>Nsan Dan</span>
          <hr />
        </div>
        <div className="comment">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam itaque
            porro repellat quos asperiores voluptate doloremque veniam numquam
            mollitia nobis omnis, officiis reprehenderit ullam iure facilis in
            iusto aliquid minima?
          </p>
        </div>
        <div className="date-signature">
          <div className="date">
            <hr />
            <span>DATE</span>
          </div>
          <div className="signature">
            <hr />
            <span>SIGNATURE</span>
          </div>
        </div>
        <div className="o-2"></div>
        <div className="o-1"></div>
        <div className="blue-con2"></div>
      </div>
      <div className="first-border2"></div>
    </div>
  );
};

export default Certificate;
