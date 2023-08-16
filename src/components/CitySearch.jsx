import { useEffect, useState } from "react";
import styles from "../pages/Cities.module.css";
import { Link } from "react-router-dom";

export default function CitySearch() {
  const [data, setData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [input, setInput] = useState();
  const [selected, setSelected] = useState([0, false]);

  useEffect(() => {
    const fetchData = async () => {
      // const response = await fetch("cities.json");
      const response = await fetch("http://localhost:4000/api/cities");
      // console.log(response);
      const json = await response.json();
      // console.log(json.response);
      setData(json.response);
      setFilteredData(json.response);
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

  const toggleSelected = (index) => {
    // console.log("toggleando: " + index);
    setSelected([index, !selected[1]]);
    // console.log(selected);
  };

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
          filteredData.length > 0 ? (
            filteredData.map((each, indexMap) => {
              return (
                <div className={indexMap == selected[0] && selected[1] ? styles.cityselected : styles.citycard} key={indexMap} onClick={() => toggleSelected(indexMap)}>
                  <Link className={styles.view_button} to={"/city/" + each._id}>See More</Link>
                  <img src={each.image} alt={each.city + " Photo"} draggable="false"/>
                  <div className={styles.dim}>
                    <h3>{each.city}</h3>
                    <p>{each.country}</p>
                  </div>
                </div>
              );
            })
          ) : input !== undefined && input !== "" ? (
            <div className={styles.citycard} key={0}>
              <img src="notfound.png" alt="Not Found" />
              {/* <div className={styles.dim}> */}
              {/* <h3>Ooops!</h3> */}
              <p>Try searching again...</p>
              {/* </div> */}
            </div>
          ) : <h1></h1>
        }
      </div>
    </>
  );
}