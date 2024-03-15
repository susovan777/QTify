import React from "react";
import Card from "../Cardcomponent/Card";
import "./Section.css";
import { useState } from "react";
import Carousel from "../Carouselcomponent/Carousel";


const Section = ({ data, text }) => {
  const [toCollapse, setToCollapse] = useState(true);
  return (
    <div className="section-wraper">
      <div className="Section-parent">
        <div className="Section-content">{text}</div>
        <div
          className="Section-content-1"
          onClick={() => setToCollapse(!toCollapse)}
        >
          {toCollapse ? "Show all" : "Collapse"}
        </div>
      </div>
      {toCollapse ? (
        <Carousel data={data} swiperId={text} />
      ) : (
        <div className="Section-img">
          {data.map((value) => {
            return (
              <Card
                key={value.id}
                title={value.title}
                follows={value.follows}
                image={value.image}
              />
            );
          })}
        </div>
      )}
    </div>
  );
};

export default Section;