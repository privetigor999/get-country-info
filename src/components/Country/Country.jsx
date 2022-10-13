import React from "react";
import styles from "./styles.module.scss";
import { AiFillCloseCircle, AiFillCar } from "react-icons/ai";
import { BsFillPeopleFill, BsCalendar4Week, BsGoogle } from "react-icons/bs";
import { FaCity, FaInternetExplorer } from "react-icons/fa";
import { GiTie } from "react-icons/gi";
import {
  IoMdTime,
  IoMdArrowRoundBack,
  IoMdArrowRoundForward,
} from "react-icons/io";
import { MdEmojiFlags } from "react-icons/md";
import { TbBorderStyle } from "react-icons/tb";
import { RiEarthLine } from "react-icons/ri";
import { SiOpenstreetmap } from "react-icons/si";

const Country = ({
  country,
  handleClearSelectedRegion,
  setToggleShowInfo,
  indexCountry,
  backCountry,
  nextCountry,
  handleBackBtn,
  handleNextBtn,
  dataLength,
}) => {
  return (
    <div className={styles.container}>
      <AiFillCloseCircle
        className={styles.closeButton}
        onClick={() => setToggleShowInfo(false)}
      />
      {indexCountry ? (
        <div className={styles.backBtn} onClick={handleBackBtn}>
          <img src={backCountry.flags.png} className={styles.backBtnFlag} />
          <IoMdArrowRoundBack className={styles.backBtnImg} />
        </div>
      ) : (
        ""
      )}
      {indexCountry !== dataLength - 1 ? (
        <div className={styles.nextBtn} onClick={handleNextBtn}>
          <img src={nextCountry.flags.png} className={styles.nextBtnFlag} />
          <IoMdArrowRoundForward className={styles.nextBtnImg} />
        </div>
      ) : (
        ""
      )}

      <div className={styles.headerInfo}>
        <div className={styles.flagBlock}>
          <h6>Flag:</h6>
          <img src={country.flags.png} className={styles.flagImg} />
        </div>

        <div className={styles.mainInfo}>
          <div className={styles.countryName}>
            <h1>{country.name.common}</h1>
          </div>
          <div className={styles.capitalAndPopulation}>
            <div className={styles.capital}>
              <FaCity />
              <p>
                Capital is <b>{country.capital}</b>
              </p>
            </div>
            <div className={styles.capital}>
              <BsFillPeopleFill />
              <p>
                Population is <b>{country.population}</b> people
              </p>
            </div>
          </div>
        </div>
        <div className={styles.coatOfArms}>
          <h6>Coat of arms:</h6>
          <img src={country.coatOfArms.png} className={styles.flagImg} />
        </div>
      </div>
      <div className={styles.bottomInfo}>
        <div className={styles.arrayBlock}>
          <RiEarthLine className={styles.arrayBlockIcon} />
          <b>Continent:</b>
          {country.continents.map((cont) => (
            <p className={styles.arrayBlockItem} key={cont}>
              {cont}
            </p>
          ))}
        </div>
        <div className={styles.aloneItem}>
          <GiTie className={styles.aloneItemIcon} />
          <b>Official named:</b>
          <p>{country.name.official}</p>
        </div>
        <div className={styles.bordersBlock}>
          <TbBorderStyle className={styles.borderIcon} />
          <b>Borders:</b>
          {country.borders?.map((border) => (
            <p className={styles.borderCountry} key={border}>
              {border}
            </p>
          ))}
        </div>
        <div className={styles.aloneItem}>
          <MdEmojiFlags className={styles.aloneItemIcon} />
          <b>Emoji: </b> {country.flag}
        </div>
        <div className={styles.aloneItem}>
          <BsCalendar4Week className={styles.aloneItemIcon} />
          <b>Start of week:</b> <p>{country.startOfWeek}</p>
        </div>
        <div className={styles.aloneItem}>
          <AiFillCar className={styles.aloneItemIcon} />
          <b>Car movement:</b>
          <p>{country.car.side}</p>
        </div>
        <div className={styles.arrayBlock}>
          <IoMdTime className={styles.arrayBlockIcon} />
          <b>Timezone:</b>{" "}
          {country.timezones.map((zone) => (
            <p className={styles.arrayBlockItem} key={zone}>
              {zone}
            </p>
          ))}
        </div>
        <div className={styles.arrayBlock}>
          <FaInternetExplorer className={styles.arrayBlockIcon} />
          <b>Domen:</b>{" "}
          {country.tld?.map((tld) => (
            <p className={styles.arrayBlockItem} key={tld}>
              {tld}
            </p>
          ))}
        </div>
        <h3>Maps:</h3>
        <div className={styles.aloneItem}>
          <BsGoogle className={styles.aloneItemIcon} />
          <b>GoogleMap:</b>
          <a href={country.maps.googleMaps} target="_blank">
            <i>link</i>
          </a>
        </div>
        <div className={styles.aloneItem}>
          <SiOpenstreetmap className={styles.aloneItemIcon} />
          <b>Open Street Maps:</b>
          <a href={country.maps.openStreetMaps} target="_blank">
            <i>link</i>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Country;
