import React from "react";
import banner1 from "../assets/jacket.jpg";
import banner2 from "../assets/tshirt.jpg";

const Banner = () => {
  return (
    <div>
      <div
        id="carouselExampleCaptions"
        class="carousel slide"
        data-bs-ride="carousel"
      >
        <div class="carousel-indicators">
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="0"
            class="active"
            aria-current="true"
            aria-label="Slide 1"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="1"
            aria-label="Slide 2"
          ></button>
        </div>
        <div class="carousel-inner">
          <div class="carousel-item active">
            <img src={banner1}  height= "700" class="d-block w-100" alt="..." />
            <div class="carousel-caption d-none d-md-block">
              <h5>Mens Jacket</h5>
              <p>
              Browse a wide range of men's jackets and coats from Hamro bazzar,
              including shackets, bomber jackets, leather jackets, puffer jackets and more.
              </p>
            </div>
          </div>
          <div class="carousel-item">
            <img src={banner2} height="700" class="d-block w-100" alt="..." />
            <div class="carousel-caption d-none d-md-block">
              <h5>T-shirt Collection</h5>
              <p>
              We make customized T-Shirts in Nepal with printing as per your order. 
              </p>
            </div>
          </div>
        </div>
        <button
          class="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide="prev"
        >
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button
          class="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide="next"
        >
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  );
};

export default Banner;