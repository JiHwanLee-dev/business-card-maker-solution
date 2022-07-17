import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Footer from "../footer/footer";
import Header from "../header/header";
import styles from "./login.module.css";

const Login = ({ authService }) => {
  console.log(authService);
  console.log(authService.test);
  const history = useNavigate();

  const goToMaker = (userId) => {
    console.log(`userId : ${userId}`);
    history("/maker", {
      state: {
        id: userId,
      },
    });
  };

  useEffect(() => {
    authService.onAuthChange((user) => {
      user && goToMaker(user.uid);
    });
  });

  const onLogin = (event) => {
    console.log(`.${event}.`);
    authService //
      .login(event.currentTarget.textContent)
      .then((data) => goToMaker(data.user.uid));
  };
  return (
    <section className={styles.login}>
      <Header />
      <section>
        <h1> Login </h1>
        <ul className={styles.list}>
          <li className={styles.item}>
            <button className={styles.button} onClick={onLogin}>
              Google
            </button>
          </li>
          <li className={styles.item}>
            <button className={styles.button} onClick={onLogin}>
              Github
            </button>
          </li>
        </ul>
      </section>
      <Footer />
    </section>
  );
};

export default Login;
