import React, { useEffect, useState } from "react";
import Arrow from "./Arrow";
import Card from "./Card";
import { cities } from "../cities.js";

const Carousel = () => {
  const [index, setIndex] = useState(0);
  const [hide, setHide] = useState(false);
  const [canScroll, setCanScroll] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setHide(true);
      setCanScroll(false);
    }, 4400);
    // setHide(true);
    setTimeout(() => {
      next();
    }, 5000);
    // console.log(hide);
  }, [index]);

  const next = () => {
    setCanScroll(true); //poner settimeout a 300ms
    setHide(false);
    if (canScroll) {
      if (index == cities.length - 4) {
        setIndex(0);
      } else {
        setIndex(index + 4);
      }
    }
  };

  const prev = () => {
    setHide(false);
    if (canScroll) {
      if (index == 0) {
        setIndex(cities.length - 4);
      } else {
        setIndex(index - 4);
      }
    }
  };

  return (
    <div className="flex-row">
      <Arrow src="arrow-left.png" alt="arrow" fn={prev} />
      <div className="carousel">
        <Card
          // className={hide ? "fadeout" : "fadein"}
          // className="fadeout"
          hide={hide}
          city={cities[index].city}
          country={cities[index].country}
          img={cities[index].img}//ternario? si existe string usar, sino default
        />
        <Card
          hide={hide}
          city={cities[index + 1].city}
          country={cities[index + 1].country}
          img={cities[index + 1].img}
        />
        <Card
          hide={hide}
          city={cities[index + 2].city}
          country={cities[index + 2].country}
          img={cities[index + 2].img}
        />
        <Card
          hide={hide}
          city={cities[index + 3].city}
          country={cities[index + 3].country}
          img={cities[index + 3].img}
        />
      </div>
      <Arrow src="arrow-right.png" alt="arrow" fn={next} />
      {/* <h3>{index}</h3> */}
    </div>
  );
};

export default Carousel;
