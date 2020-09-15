import React from "react";
import styles from "./index.module.css";
import brynjar from "../../assets/brynjar.jpg";
import almar from "../../assets/almar.jpg";
import baldur from "../../assets/baldur.jpg";

const employeeData = [
  {
    name: "Baldur Kárason",
    phoneNumber: "694 7391",
    img: baldur,
    education: ["Verkfræðingur MSc.", "Meistarapróf í pípulögnum"],
    email: "baldur@teknik.is",
    description:
      "Baldur er löggiltur hönnuður með yfir 20 ára reynslu sem verkfræðingur og verktaki í pípilögnum og því mikla fagþekkingu á lagna- og loftræsikerfum. Helstu verkefni Baldurs eru í hönnun, verkefnastjórnun, hönnunarstjórnun, verkeftirliti og gerð kostnaðar og útboðsgagna.",
  },
  {
    name: "Brynjar Örn Árnason",
    phoneNumber: "694 7392",
    img: brynjar,
    education: ["Verkfræðingur MSc"],
    email: "brynjar@teknik.is",
    description:
      "Brynjar er löggiltur hönnuður og hefur unnið við lagna- og loftræsihönnun í yfir 10 ár. Helstu verkefni Brynjars eru í hönnun, ráðgjöf vegna loftgæða í byggingum og hönnun vatnsúðakerfa.",
  },
  {
    name: "Almar Gunnarsson",
    phoneNumber: "694 7393",
    img: almar,
    education: ["Verkfræðingur MSc."],
    email: "almar@teknik.is",
    description:
      "Almar er löggiltur hönnuður og hefur unnið við lagna- og loftræsihönnun í tæp 10 ár. Helstu verkefni Almars eru í hönnun og ráðgjöf, verkeftirliti, verkefnastjórnun og gerð orkuútreikninga.",
  },
];

const Employee = ({
  name,
  img,
  phoneNumber,
  education,
  email,
  description,
}) => {
  return (
    <li className={styles.employeeContainer}>
      <img className={styles.image} src={img} alt="Profile" />
      <div className={styles.infoContainer}>
        <p className={styles.name}>{name}</p>
        {education.map((e) => (
          <p key={e} className={styles.education}>
            {e}
          </p>
        ))}
        <p className={styles.description}>{description}</p>
        <p className={styles.email}>{email}</p>
        <a className={styles.phoneNumber} href={`tel:${phoneNumber}`}>
          s. {phoneNumber}
        </a>
      </div>
    </li>
  );
};
export const Employees = () => (
  <div className={`verticalSpacing ${styles.container}`}>
    <h2 className={styles.title}>Tengiliðir</h2>
    <ul className={styles.employeeListContainer}>
      {employeeData.map((data) => (
        <Employee
          key={data.phoneNumber}
          name={data.name}
          phoneNumber={data.phoneNumber}
          email={data.email}
          img={data.img}
          education={data.education}
          description={data.description}
        />
      ))}
    </ul>
  </div>
);
