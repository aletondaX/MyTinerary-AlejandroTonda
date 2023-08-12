import { useEffect, useState } from "react";
import styles from "../pages/Cities.module.css";

export default function CitySearch() {
  const [data, setData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [input, setInput] = useState();

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch("cities.json");
      // console.log(response);
      const json = await response.json();
      // console.log(json);
      setData(json);
      setFilteredData(json);
      // cityArray = json;
      // console.log(cityArray);
    };
    fetchData().catch(console.error);
  }, []);

  useEffect(() => {
    // console.log(data);
    // console.log("Input: " + input);
    if (input !== undefined && input !== "") {
      // console.log("El Input no es vacio");
      setFilteredData(
        data.filter((city) => {
          return (
            city.city.toLowerCase().startsWith(input.toLowerCase()) ||
            city.country.toLowerCase().startsWith(input.toLowerCase())
          );
        })
      );
    } else {
      // console.log("el input es undefined o vacio");
      setFilteredData(data);
    }
    // console.log(filteredData);
  }, [input]);

  // const filterCities = () => {
  //   // console.log("key up");
  //   console.log(input);
  // }

  return (
    <>
      <input
        type="text"
        placeholder="Search for a city or country"
        id={styles.search_input}
        autoFocus
        onKeyUp={(e) => setInput(e.target.value.trim())}
      />
      <div id={styles.city_list}>
        {
          // if (filteredData.length > 0) {
          filteredData.length > 0 ?

          filteredData.map((each, indexMap) => {
            return (
              <div className={styles.citycard} key={indexMap}>
                <img src={each.photo} alt="" />
                <div className={styles.dim}>
                  <h3>{each.city}</h3>
                  <p>{each.country}</p>
                </div>
              </div>
            );
          })
          : <div className={styles.citycard} key={0}>
          <img src="notfound2.png" alt="" />
          {/* <div className={styles.dim}> */}
            {/* <h3>Ooops!</h3> */}
            <p>Try searching again...</p>
          {/* </div> */}
        </div>
          // }
        }
      </div>
    </>
  );
}
