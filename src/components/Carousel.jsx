import React, { useState } from "react";
import Arrow from "./Arrow";
import Card from "./Card";
import {cities} from "../cities.js";

const Carousel = () => {
  const [index, setIndex] = useState(0);

  const next = () => {
    if (index == cities.length - 4) {
      setIndex(0);
    } else {
      setIndex(index + 4);
    }
  };
  
  const prev = () => {
    if (index == 0) {
      setIndex(cities.length - 4);
    } else {
      setIndex(index - 4);
    }
  };

  return (
    <div className="flex-row">
      <Arrow src="arrow-left.png" alt='arrow' fn={prev} />
      <div className="carousel">
        <Card
          city={cities[index].city}
          country={cities[index].country}
          img={cities[index].img}
        />
        <Card
          city={cities[index + 1].city}
          country={cities[index + 1].country}
          img={cities[index + 1].img}
        />
        <Card
          city={cities[index + 2].city}
          country={cities[index + 2].country}
          img={cities[index + 2].img}
        />
        <Card
          city={cities[index + 3].city}
          country={cities[index + 3].country}
          img={cities[index + 3].img}
        />
      </div>
      <Arrow src="arrow-right.png" alt='arrow' fn={next} />
      {/* <h3>{index}</h3> */}
    </div>
  );
};

export default Carousel;
