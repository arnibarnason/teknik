import React from "react";
import styles from "./index.module.css";
import brynjar from "../../assets/brynjar.png";
import alvar from "../../assets/alvar.png";
import baldur from "../../assets/baldur.png";

const employeeData = [
  {
    name: "Baldur Kárason",
    phoneNumber: "6947391",
    img: baldur,
  },
  {
    name: "Brynjar Örn Árnason",
    phoneNumber: "6947392",
    img: brynjar,
  },
  {
    name: "Alvar Ingi Hauksson",
    phoneNumber: "6947393",
    img: alvar,
  },
];

const Employee = ({ name, img, phoneNumber }) => {
  return (
    <li className={styles.employeeContainer}>
      <img className={styles.image} src={img} alt="Profile" />
      <div className={styles.infoContainer}>
        <p className={styles.name}>{name}</p>
        <a className={styles.phoneNumber} href={`tel:${phoneNumber}`}>
          S. {phoneNumber}
        </a>
      </div>
    </li>
  );
};
export const Employees = () => (
  <ul className={`verticalSpacing ${styles.container}`}>
    {employeeData.map((data) => (
      <Employee
        key={data.phoneNumber}
        name={data.name}
        phoneNumber={data.phoneNumber}
        img={data.img}
      />
    ))}
  </ul>
);
