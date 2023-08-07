import React, { useEffect, useState, useRef } from "react";
import Arrow from "./Arrow";
import Card from "./Card";
import { cities } from "../cities.js";

const Carousel = () => {
  const timerRef = useRef(null);
  const [index, setIndex] = useState(0);
  const [hide, setHide] = useState(false);
  const [canScroll, setCanScroll] = useState(true);

  useEffect(() => {
    //Timer to fade out the current slide
    timerRef.hideTimer = setTimeout(() => {
      setHide(true);
      setCanScroll(false); //Cannot use arrows while fading out
    }, 4400);
    //Timer for the next slide
    timerRef.slideTimer = setTimeout(() => {
      next();
    }, 5000);
    //Clean-up the next slide and fade out
    return () => {
      clearTimeout(timerRef.hideTimer);
      clearTimeout(timerRef.slideTimer);
    }
  }, [index]);

  const next = () => {
    setHide(false); //Fade in the cards
    setCanScroll(true); //Can use arrows again
    if (index == cities.length - 4) {
      setIndex(0);
    } else {
      setIndex(index + 4);
    }
  };

  const nextArrow = () => {
    setHide(false);
    setCanScroll(true);
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
    setCanScroll(true);
    if (canScroll) {
      if (index == 0) {
        setIndex(cities.length - 4);
      } else {
        setIndex(index - 4);
      }
    }
  };

  const pause = () => {
    console.log("Pausing the slides...");
    clearTimeout(timerRef.hideTimer);
    clearTimeout(timerRef.slideTimer);
    setHide(false);
    // setCanScroll(false);
  };

  const resume = () => {
    console.log("Resuming the slides...");
    // setCanScroll(true);
    timerRef.hideTimer = setTimeout(() => {
        setHide(true);
        setCanScroll(false);
      }, 4400);
    timerRef.slideTimer = setTimeout(() => {
        next();
        // setCanScroll(true);
      }, 5000);
  };

  return (
    <div className="flex-row" onMouseEnter={pause} onMouseLeave={resume}>
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
      <Arrow src="arrow-right.png" alt="arrow" fn={nextArrow} />
      {/* <h3>{index}</h3> */}
    </div>
  );
};

export default Carousel;
