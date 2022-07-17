import React from "react";
import styles from "./card.module.css";

const DEFAULT_IMAGE = "images/";

const Card = ({ card }) => {
  const { name, company, title, email, message, theme, fileName, fileURL } =
    card;
  const url = fileURL || DEFAULT_IMAGE;
  return (
    <li>
      <img src="" alt="" />
      {card.id}
    </li>
  );
};

export default Card;
