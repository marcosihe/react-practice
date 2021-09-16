import React from "react";
import styles from "./CardList.module.css";
import Card from "./Card";

const CardList = ({ monsters }) => {
  return (
    <div className={styles.cardList}>
      {monsters.map((monster) => (
        <Card
          key={monster.id}
          monster={monster.name}
          id={monster.id}
          email={monster.email}
        />
      ))}
    </div>
  );
};

export default CardList;
