import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Editor from "../editor/editor";

import Footer from "../footer/footer";
import Header from "../header/header";
import Preview from "../preview/preview";
import styles from "./maker.module.css";

const Maker = ({ authService }) => {
  const [cards, setCards] = useState([
    {
      id: 1,
      name: "Ellie",
      company: "Samsung",
      theme: "light",
      title: "SoftWare Engineer",
      email: "ellie@naver.com",
      message: "go for it",
      fileName: "ellie",
      fileURL: "ellie.png",
    },
    {
      id: 2,
      name: "Ellie2",
      company: "Samsung2",
      theme: "light2",
      title: "SoftWare Engineer2",
      email: "ellie@naver.com2",
      message: "go for it2",
      fileName: "ellie2",
      fileURL: "ellie.png2",
    },
    {
      id: 3,
      name: "Ellie3",
      company: "Samsung3",
      theme: "light3",
      title: "SoftWare Engineer3",
      email: "ellie@naver.com3",
      message: "go for it3",
      fileName: "ellie3",
      fileURL: "ellie.png3",
    },
  ]);
  const { id } = useLocation();
  const navigate = useNavigate();

  const onLogout = () => {
    authService.logout();
  };

  useEffect(() => {
    authService.onAuthChange((user) => {
      if (!user) {
        navigate("/");
      }
    });
  });

  return (
    <section className={styles.maker}>
      <Header onLogout={onLogout} />
      <div className={styles.container}>
        <Editor cards={cards} />
        <Preview cards={cards} />
      </div>
      <Footer />
    </section>
  );
};

export default Maker;
