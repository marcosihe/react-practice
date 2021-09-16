import React from "react";
import styles from "./Card.module.css";

const Card = ({ monster, id, email }) => {
  return (
    <div className={styles.cardContainer}>
      <img alt="monster" src={`https://robohash.org/${id}?set=set2`} />
      <figcaption className={styles.description}>
        <h3> {monster} </h3>
        <h4>{email}</h4>
      </figcaption>
    </div>
  );
};

export default Card;
