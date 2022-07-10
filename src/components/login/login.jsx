import React from "react";
import Footer from "../footer/footer";
import Header from "../header/header";

const Login = ({ authService }) => {
  console.log(authService);
  console.log(authService.test);

  const onLogin = (event) => {
    console.log(`.${event}.`);
    authService //
      .login(event.currentTarget.textContent)
      .then(console.log);
  };
  return (
    <section>
      <Header />
      <h1> Login </h1>
      <ul>
        <li>
          <button onClick={onLogin}> Google </button>
        </li>
        <li>
          <button onClick={onLogin}> Github </button>
        </li>
      </ul>
      <Footer />
    </section>
  );
};

export default Login;