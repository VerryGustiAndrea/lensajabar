import React, { useState, useEffect } from "react";
import "../styles/Content.css";
import axios from "axios";
import News from "./News";
import SpaceRight from "./SpaceRight";
import SpaceLeft from "./SpaceLeft";

const COVID_COUNTRY = "https://corona.lmao.ninja/countries?sort=country";
const GET_ALL_NEWS = "http://localhost:4000/api/news/getall";

function Content() {
  const [covid, setCovid] = useState([]);
  const [allNews, setAllNews] = useState([]);
  const [slide1, setSlide1] = useState([]);
  const [slide2, setSlide2] = useState([]);
  const [slide3, setSlide3] = useState([]);
  const [slide4, setSlide4] = useState([]);

  const getCovidCountry = async () => {
    await axios.get(COVID_COUNTRY).then((res) => {
      const listDataCountry = res.data.reverse();
      // const listDataCountry = listDataCountryX.reverse();
      // console.log(listDataCountry[93]);
      setCovid(listDataCountry[93]);
    });
  };

  const getAllNews = async () => {
    await axios.get(GET_ALL_NEWS).then((res) => {
      const listNews = res.data.reverse();
      // const listDataCountry = listDataCountryX.reverse();
      // console.log(listNews);
      setAllNews(listNews);
      setSlide1(listNews[0]);
      setSlide2(listNews[1]);
      setSlide3(listNews[2]);
      setSlide4(listNews[3]);
    });
  };

  const convertTime = (time) => {
    let d = new Date(time);
    let c = new Date();
    let result = (d.getHours() < 10 ? "0" : "") + d.getHours() + ":";
    result += (d.getMinutes() < 10 ? "0" : "") + d.getMinutes();
    if (c.getDay() !== d.getDay()) {
      result = d.getDay() + " " + d.getMonth() + " " + result;
    }
    return result;
  };

  useEffect(() => {
    getCovidCountry();
    getAllNews();
  }, []);
  return (
    <>
      <div class="grid-container">
        <div class="item1">
          Data Covid-19 Di Indonesia
          <div className="container">
            <div className="row">
              <div className="col-4">
                <div className="cardhistory">
                  <div className="centeredpink">Cases</div>

                  <div className="valueCases">{covid.cases}</div>
                </div>
              </div>
              <div className="col-4">
                <div className="cardhistory">
                  <div className="centeredblue">Recovered</div>
                  <div className="valueRecovered">{covid.recovered}</div>
                </div>
              </div>
              <div className="col-4">
                <div className="cardhistory">
                  <div className="centeredviolet">Deaths</div>
                  <div className="valueDeaths">{covid.deaths}</div>
                </div>
              </div>
            </div>
          </div>
          <div className="dateupdate">
            Date Update at {convertTime(covid.updated)}
          </div>
        </div>
        <div class="item2">
          <SpaceLeft />
        </div>
        <div class="item3">
          <div id="slideshow">
            <div class="slide-wrapper">
              <div class="slide">
                <img src={slide1.image} />
                <h2
                  onClick={() => {
                    console.log(123);
                    window.location.href =
                      "detail/" + slide1.judul.replace(/ /g, "-");
                  }}
                >
                  {slide1.judul}
                </h2>
                {/* </span> */}
              </div>

              <div class="slide">
                <img src={slide2.image} />
                <h2
                  onClick={() => {
                    console.log(123);
                    window.location.href =
                      "detail/" + slide2.judul.replace(/ /g, "-");
                  }}
                >
                  {slide2.judul}
                </h2>
              </div>
              <div class="slide">
                <img src={slide3.image} />
                <h2
                  onClick={() => {
                    console.log(123);
                    window.location.href =
                      "detail/" + slide3.judul.replace(/ /g, "-");
                  }}
                >
                  {slide3.judul}
                </h2>
              </div>
              <div class="slide">
                <img src={slide4.image} />
                <h2
                  onClick={() => {
                    console.log(123);
                    window.location.href =
                      "detail/" + slide4.judul.replace(/ /g, "-");
                  }}
                >
                  {slide4.judul}
                </h2>
              </div>
            </div>
          </div>
        </div>
        <div class="item4">
          <SpaceRight />
        </div>
        <div class="item5">
          <News news={allNews} />
        </div>
      </div>
    </>
  );
}

export default Content;
