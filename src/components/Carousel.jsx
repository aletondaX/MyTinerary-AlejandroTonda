import React, { useState } from "react";
import Arrow from "./Arrow";
import Card from "./Card";
// import cities from "../cities.js";

let cities = [
  {
    city: "Buenos Aires",
    country: "Argentina",
    img: "bsas.jpg",
  },
  {
    city: "São Paulo",
    country: "Brazil",
    img: "saopaulo.jpg",
  },
  {
    city: "Tokyo",
    country: "Japan",
    img: "tokyo.jpg",
  },
  {
    city: "New York",
    country: "USA",
    img: "newyork.jpg",
  },
  {
    city: "Ciudad 5",
    country: "País 5",
    img: "generic-city.jpg",
  },
  {
    city: "Ciudad 6",
    country: "País 6",
    img: "generic-city.jpg",
  },
  {
    city: "Ciudad 7",
    country: "País 7",
    img: "generic-city.jpg",
  },
  {
    city: "Ciudad 8",
    country: "País 8",
    img: "generic-city.jpg",
  },
  {
    city: "Ciudad 9",
    country: "País 9",
    img: "generic-city.jpg",
  },
  {
    city: "Ciudad 10",
    country: "País 10",
    img: "generic-city.jpg",
  },
  {
    city: "Ciudad 11",
    country: "País 11",
    img: "generic-city.jpg",
  },
  {
    city: "Ciudad 12",
    country: "País 12",
    img: "generic-city.jpg",
  },
];

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
      <Arrow src="arrow-left2.png" alt='arrow' fn={prev} />
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
      <Arrow src="arrow-right2.png" alt='arrow' fn={next} />
      {/* <h3>{index}</h3> */}
    </div>
  );
};

export default Carousel;
