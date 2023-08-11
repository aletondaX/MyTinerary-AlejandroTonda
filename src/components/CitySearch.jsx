import styles from "../pages/Cities.module.css";

export default function CitySearch() {
  return (
    <>
      <input type="text" placeholder="Search for cities..." id={styles.search_input} />
      <div id={styles.city_list}>
        
      </div>
    </>
  );
}
