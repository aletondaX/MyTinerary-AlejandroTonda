import { useEffect, useState } from "react";
import styles from "../pages/Cities.module.css";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { filterCities, getCities } from "../redux/actions/cityAction";

export default function CitySearch() {
  const [input, setInput] = useState();
  const [selected, setSelected] = useState([0, false]);

  const dispatch = useDispatch();
  const cities = useSelector(store => store.cityReducer.filteredCities);

  useEffect(() => {
    if (cities.length === 0) {
      dispatch(getCities());
    }
  }, []);

  useEffect(() => {
    // console.log(input);
    dispatch(filterCities(input));
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
          cities.length > 0 ? (
            cities.map((each, indexMap) => {
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
              <p>Try searching again...</p>
            </div>
          ) : <h1>Loading cities...</h1>
        }
      </div>
    </>
  );
}