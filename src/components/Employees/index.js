import React from "react";
import styles from "./index.module.scss";
import brynjar from "../../assets/brynjar.png";
import alvar from "../../assets/alvar.png";
import baldur from "../../assets/baldur.png";

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
    img: alvar,
    education: ["Verkfræðingur MSc."],
    email: "almar@teknik.is",
    description:
      "Almar er löggiltur hönnuður og hefur unnið við lagna- og loftræsihönnun í tæp 10 ár. Helstu verkefni Almars eru í hönnun og ráðgjöf, verkeftirliti, verkefnastjórnun og gerð orkuútreikninga.",
  },
];

const EmployeeCard = ({
  name,
  img,
  phoneNumber,
  education,
  email,
  description,
}) => {
  return (
    <div className={`card ${styles.bmCardEqualHeight}`}>
      <div className="card-image">
        <figure className={`image container ${styles.image}`}>
          <img className="is-rounded" src={img} alt={name} />
        </figure>
      </div>
      <div className="card-content">
        <div className="media">
          <div className="media-content">
            <p className="title is-4">{name}</p>
            <p className="subtitle is-6">{education}</p>
          </div>
        </div>
        <div className="content">{description}</div>
        <footer className={`${styles.bmCardFooter} card-footer`}>
          <p className="card-footer-item">
            <span>{email}</span>
          </p>
          <p className="card-footer-item">
            <span>s. {phoneNumber}</span>
          </p>
        </footer>
      </div>
    </div>
  );
};

export const Employees = () => (
  <div className="container">
    <div className="columns">
      {/* <h2 className={styles.title}>Tengiliðir</h2> */}
      {employeeData.map((data) => (
        <div className="column">
          <EmployeeCard
            key={data.phoneNumber}
            name={data.name}
            phoneNumber={data.phoneNumber}
            email={data.email}
            img={data.img}
            education={data.education}
            description={data.description}
          />
        </div>
      ))}
    </div>
  </div>
);
