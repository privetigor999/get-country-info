import React from "react";
import styles from "./styles.module.scss";
import AfricaPng from "./../../images/Africa.png";
import AmericaPng from "./../../images/America.png";
import EuropePng from "./../../images/Europe.png";
import AsiaPng from "./../../images/Asia.png";

const RegionPicker = ({ handlePickRegion }) => {
  const regions = [
    { id: 1, title: "Americas", img: AmericaPng },
    { id: 2, title: "Africa", img: AfricaPng },
    { id: 3, title: "Asia", img: AsiaPng },
    { id: 4, title: "Europe", img: EuropePng },
  ];
  return (
    <div className={styles.container}>
      <h2>Pick a region:</h2>
      <div className={styles.listRegions}>
        {regions.map((region) => (
          <div
            key={region.id}
            className={styles.region}
            onClick={() => handlePickRegion(region.title)}
          >
            <img src={region.img} alt="img" />
            <h3>{region.title}</h3>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RegionPicker;
