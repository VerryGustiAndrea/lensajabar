import React, { Component } from "react";
import "../styles/SlideShow.css";
var slideIndex = 1;
let showSlides;
class SlideShow extends Component {
  // Next/previous controls

  render() {
    return (
      <div class="slideshow-container">
        <div class="mySlides fade">
          <div class="numbertext">1 / 3</div>
          <img src="https://lensasriwijaya.com/wp-content/uploads/2020/04/Banner-Pemkab-Muba.jpg" />
          <div class="text">Caption Text</div>
        </div>

        <div class="mySlides fade">
          <div class="numbertext">2 / 3</div>
          <img src="https://lensasriwijaya.com/wp-content/uploads/2020/04/Banner-Pemkab-Muba.jpg" />
          <div class="text">Caption Two</div>
        </div>

        <div class="mySlides fade">
          <div class="numbertext">3 / 3</div>
          <img src="https://lensasriwijaya.com/wp-content/uploads/2020/04/Banner-Pemkab-Muba.jpg" />
          <div class="text">Caption Three</div>
        </div>

        <a class="prev" onclick="plusSlides(-1)">
          &#10094;
        </a>
        <a class="next" onclick="plusSlides(1)">
          &#10095;
        </a>
      </div>

      // <div style="text-align:center">
      //   <span class="dot" onclick="currentSlide(1)"></span>
      //   <span class="dot" onclick="currentSlide(2)"></span>
      //   <span class="dot" onclick="currentSlide(3)"></span>
      // </div>
    );
  }
}

export default SlideShow;
