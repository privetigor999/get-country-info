import React from "react";
import axios from "axios";
import Country from "./../Country/Country";
import { PacmanLoader } from "react-spinners";
import styles from "./styles.module.scss";
import { MdOutlineArrowBack } from "react-icons/md";
const Countries = ({ handleClearSelectedRegion, selectedRegion }) => {
  const [data, setData] = React.useState([]);
  const [loading, setLoading] = React.useState(false);
  const [toggleShowInfo, setToggleShowInfo] = React.useState(false);
  const [pickedCountry, setPickedCountry] = React.useState({}); //obj country
  const [indexCountry, setIndexCountry] = React.useState(-1); // num
  const [backCountry, setBackCountry] = React.useState({}); // obj
  const [nextCountry, setNextCountry] = React.useState({});
  const handleShowInfo = (id) => {
    let index = data.findIndex((country) => country.area === id);

    setIndexCountry(index);
    setPickedCountry(data[index]);
    setBackCountry(data[index - 1]);
    setNextCountry(data[index + 1]);
    setToggleShowInfo(true);
  };
  const handleBackBtn = () => {
    setIndexCountry(indexCountry - 1);
    setPickedCountry(data[indexCountry - 1]);
    setBackCountry(data[indexCountry - 2]);
    setNextCountry(data[indexCountry]);
  };

  const handleNextBtn = () => {
    setPickedCountry(data[indexCountry + 1]);
    setNextCountry(data[indexCountry + 2]);
    setIndexCountry(indexCountry + 1);
    setBackCountry(data[indexCountry]);
  };

  React.useEffect(() => {
    setLoading(true);
    axios({
      method: "GET",
      url: `https://restcountries.com/v3.1/region/${selectedRegion}`,
    })
      .then((resp) => {
        setData(resp.data);
      })
      .catch((err) => console.log(err))
      .finally(() => setLoading(false));
  }, [selectedRegion]);

  React.useEffect(() => {}, [pickedCountry]);
  return (
    <div className={styles.container}>
      {loading ? (
        <PacmanLoader color="#367dd6" />
      ) : (
        <div className={styles.listCountries}>
          {data.map((country) => (
            <div
              key={country.area}
              className={toggleShowInfo ? styles.opacity : styles.country}
              onClick={() => handleShowInfo(country.area)}
            >
              <img src={country.flags.png} className={styles.flag} />
              <b>{country.name.common}</b>
            </div>
          ))}
          {toggleShowInfo && (
            <Country
              country={pickedCountry}
              handleClearSelectedRegion={handleClearSelectedRegion}
              setToggleShowInfo={setToggleShowInfo}
              indexCountry={indexCountry}
              dataLength={data.length}
              backCountry={backCountry}
              nextCountry={nextCountry}
              handleBackBtn={handleBackBtn}
              handleNextBtn={handleNextBtn}
            />
          )}
        </div>
      )}
    </div>
  );
};

export default Countries;
