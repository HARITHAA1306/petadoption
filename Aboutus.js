import React from "react";
import Header from "./common/Header";
import "./Aboutus.css";

function Aboutus() {
  return (
    <div className="bd">
      <Header></Header>
      <div className="container">
        <div className="container1">
          <h1>About the PetFam</h1>
          <p>
            Founded in 2019, ThePetFam, is the India’s largest network of 5-star
            pet care
            <br />
            service providers.
          </p>
        </div>
      </div>
      <div className="wd">
        <p>
          Whether you need in-home pet grooming, pet training, or vet on call,
          ThePetFam connects pet parents with pet care heroes who’ll treat their
          pet like family.
          <br />
          We understand your pet is family. And you can trust us to keep your
          pet happy, healthy, and sweet as ever.
          <br />
          But it’s not just about pet love. ThePetFam is also committed to
          making pet care safe, easy, and affordable so that everyone can
          experience the unconditional love of a pet. Whatever you and your furr
          babies are into, we’re into it too. And we’ve got your back. Anytime.
          Anywhere.
          <br />
          ThePetFam donates a portion of every service to Pet NGO’s & Rescue
          shelters through this program. We also provide meals to shelter dogs
          in India.
        </p>
      </div>
    </div>
  );
}

export default Aboutus;
