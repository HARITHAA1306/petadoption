import React from "react";
import dog1 from "./image/dog 1.png";
import paw3 from "./image/pngwing 3.png";
import "./Adoption.css";
import Header from "./common/Header";

function Adoption() {
  return (
    <div className="bo" >
      <Header></Header>
    <div className="midcontainer">
      <div className="mid-ipsum">
        <h1>
          Get your family
          <br />a new member.
          <p>
            Open your doors and hearts to pets in need of a
            <br />
            home and it will be thankful to you for the rest
            <br />
            of their lives.
          </p>
          <button className="btn-btn">Explore</button>
        </h1>
        <div className="rightimg">
          <img src={dog1} alt="" />
          <div className="imgblend">
            <div className="rightcontent">
              <h>544</h>
              <p>waiting for home</p>
            </div>
            <div className="rightcontent">
              <h>756</h>
              <p>Adopted last year</p>
            </div>
            <div className="rightcontent">
              <h>422</h>
              <p>Rescued</p>
            </div>
          </div>
        </div>
      </div>
      <div className="downimg">
        <img src={paw3} alt="" />
      </div>
    </div>
    </div>
  );
}

export default Adoption;
