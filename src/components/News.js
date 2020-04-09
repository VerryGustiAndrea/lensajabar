import React, { Component } from "react";
import "../styles/Header.css";
const News = (props) => {
  return (
    <>
      {props.news.map((e) => {
        return (
          <div className="content">
            <img src={e.image} />
            <a
              className="judulPostingan"
              href={"detail/" + e.judul.replace(/ /g, "-")}
            >
              <h4>{e.judul}</h4>
            </a>
            <p>
              {e.content.slice(0, 300)}
              <a href={"detail/" + e.judul.replace(/ /g, "-")}>
                {" "}
                Lanjut membaca
              </a>
            </p>
            <h5>
              {e.tags} 🕓 {e.date.slice(0, 10)}{" "}
            </h5>
          </div>
        );
      })}
      ;
      {/* 
        <div className="content">
          <img src="https://assets.bwbx.io/images/users/iqjWHBFdfxIU/iM4.NdDm28sM/v1/1000x-1.jpg" />
          <h4 href="url">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </h4>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
            <a href="url"> Lanjut membaca</a>
          </p>
          <h5>Daerah 🕓 20-03-2020 </h5>
        </div> */}
    </>
  );
};

export default News;
