import React from "react";
import Header from "./common/Header";
import dog from "./image/dog.png";
import cat1 from "./image/cat1.png";
import cat2 from "./image/cat2.png";
import rabit from "./image/rabit 1.png";
import dog1 from "./image/dog1.png";
import dog2 from "./image/dog2.png";
import "./Apt1.css";
function Adoption1() {
  return (
    <div className="body">
      <Header></Header>
      <div className="downbody">
        <div className="left-container">
          <h1>
            EVERY PET
            <br />
            DESERVES A
            <br />
            HOME
            </h1>
           
            <p>
              Bringing home a pet is a life-changing experience
              <br />
              that only spreads joy and cheer! Take a step
              <br />
              forward and help pets start over their lives again,
              <br />
              with love that they truly deserve. While every pet
              <br />
              deserves a home, we truly believe every
              <br />
              household deserves a pet!
            </p>
            </div>
            <div class="rightcontainer">
            <div class="toptext">
                <h>Pets available for Adoption</h>
            </div>
            <div class="topimg">
                <div class="leftimg">
                    <img src={dog} alt=""/>
                    <div class="tag">
                        <p>Lulia <span>2yrs</span></p>
                    </div>
                </div>
                <div class="leftimg">
                    <img src={cat1} alt=""/>
                    <div class="tag">
                        <p>Bitty<span>4.5yrs</span></p>
                    </div>
                </div>
            </div>
            <div class="topimg">
                <div class="leftimg">
                    <img src={cat2} alt=""/>
                    <div class="tag">
                        <p>George <span>2.5yrs</span></p>
                    </div>
                </div>
                <div class="leftimg">
                    <img src={rabit} alt=""/>
                    <div class="tag">
                        <p>Franklin <span>3yrs</span></p>
                    </div>
                </div>
            </div>
            <div class="topimg">
                <div class="leftimg">
                    <img src={dog1} alt=""/>
                    <div class="tag">
                        <p>Saimon <span>2yrs</span></p>
                    </div>
                </div>
                <div class="leftimg">
                    <img src={dog2} alt=""/>
                    <div class="tag">
                        <p>Franklin <span>1yr</span></p>
                    </div>
                </div>
            </div>
        </div>
       
        </div>
    </div>
  );
}

export default Adoption1;
