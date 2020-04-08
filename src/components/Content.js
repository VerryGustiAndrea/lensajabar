import React, { useState, useEffect } from "react";
import "../styles/Content.css";
import axios from "axios";

const COVID_COUNTRY = "https://corona.lmao.ninja/countries?sort=country";

function Content() {
  const [covid, setCovid] = useState([]);
  const [covidId, setCovidId] = useState([]);

  const getCovidCountry = async () => {
    await axios.get(COVID_COUNTRY).then((res) => {
      const listDataCountry = res.data.reverse();
      // const listDataCountry = listDataCountryX.reverse();
      console.log(listDataCountry[93]);
      setCovid(listDataCountry[93]);
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
    // filterCountry();
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
                  {console.log(covid)}
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
            {" "}
            Date Update at {convertTime(covid.updated)}
          </div>
        </div>
        <div class="item2">
          <img src="https://lensajabar.com/wp-content/uploads/2020/04/ADS-Cimahi-2.jpg" />
        </div>
        <div class="item3">
          <div id="slideshow">
            <div class="slide-wrapper">
              <div class="slide">
                <img src="https://www.w3schools.com/howto/img_snow_wide.jpg" />
                <h2>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed
                  do
                </h2>
              </div>

              <div class="slide">
                <img src="https://www.w3schools.com/howto/img_mountains_wide.jpg" />
                <h2>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed
                  do
                </h2>
              </div>
              <div class="slide">
                <img src="https://lensajabar.com/wp-content/uploads/2020/04/Masker-Kain.jpg" />
                <h2>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed
                  do
                </h2>
              </div>
              <div class="slide">
                <img src="https://www.parismou.org/sites/default/files/corona_0.jpeg" />
                <h2>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed
                  do
                </h2>
              </div>
            </div>
          </div>
        </div>
        <div class="item4">
          <img src="https://lensajabar.com/wp-content/uploads/2020/03/Uc.-Bela-sungkawa-Ibunda-Jokowi.jpg" />
          <img src=" https://lensajabar.com/wp-content/uploads/2019/02/Logo-yabasma.jpg" />
        </div>
        <div class="item5">
          <div className="content">
            <img src="https://lensajabar.com/wp-content/uploads/2020/04/Masker-Kain.jpg" />

            <h4 href="url">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </h4>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
              <a href="url"> Lanjut membaca</a>
            </p>
            <h5>Daerah 🕓 20-03-2020 </h5>
          </div>

          <div className="content">
            <img src="https://assets.bwbx.io/images/users/iqjWHBFdfxIU/iM4.NdDm28sM/v1/1000x-1.jpg" />
            <h4 href="url">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </h4>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
              <a href="url"> Lanjut membaca</a>
            </p>
            <h5>Daerah 🕓 20-03-2020 </h5>
          </div>
        </div>
      </div>
    </>
  );
}

export default Content;
