import styles from "./CountryList.module.css";
import Spinner from "./Spinner";
import Message from "./Message";
import CountryItem from "./CountryItem";
import { useCities } from "../contexts/CitiesContext";

function CountryList() {
  const { cities, isLoading } = useCities();
  if (isLoading) return <Spinner />;
  if (!cities.length)
    return (
      <Message message="Add your first city by clicking on the city on the map" />
    );

  const countries = cities.reduce((acc, cur) => {
    //checking if accumulated array includes the country of the current city
    if (!acc.map((el) => el.country).includes(cur.country))
      //returning an array of accumulated countries and destructuring to have only the country and emoji from the object
      return [...acc, { country: cur.country, emoji: cur.emoji }];
    else return acc;
  }, []);

  const list = ["A", "B", "C", "D", "A", "B"];
  const uniqueList = list.reduce((acc, cur) => {
    if (!acc.includes(cur)) return [...acc, cur];
    else return acc;
  }, []);

  console.log(uniqueList);

  return (
    <ul className={styles.countryList}>
      {countries.map((country) => (
        <CountryItem country={country} key={country.id} />
      ))}
    </ul>
  );
}

export default CountryList;
