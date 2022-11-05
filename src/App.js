import React, { useState } from "react";
import "./App.css";
import Button from "./components/button.js/button";
import InputForm from "./components/labels/inputs";
import "./snackbar.css";
// voce quer lidar com o evento de submit do formulario
// qual evento quero lidar
// onde quero lidar

const email = "gbennemann@hotmail.com";
const senha = "123456";

function App() {
  const [emailText, setEmailText] = useState("");
  const [passwordText, setPasswordText] = useState("");
  const [toastbarText, setToastbarText] = useState("");
  const [isToastbarVisible, setIsToastbarVisible] = useState(false);
  function showToastBar(texto) {
    setIsToastbarVisible(true);
    setToastbarText(texto);
    setTimeout(() => {
      setToastbarText("");
      setIsToastbarVisible(false);
    }, 1000);
  }

  function handleSubmit(evento) {
    evento.preventDefault();

    const isEmailCorrect = emailText === email;

    const isPasswordCorrect = passwordText === senha;

    if (isEmailCorrect && isPasswordCorrect) {
      showToastBar("Login efetuado");
      setPasswordText("");
      setEmailText("");
    } else showToastBar("Alguma de suas informações podem estar incorretas");
  }

  return (
    <body>
      <form className="formulario" onSubmit={handleSubmit}>
        <h1 className="form-title">Create An Account</h1>
        <p className="form-text">
          Create an account to enjoy all the services without any ads for free!
        </p>

        <InputForm
          value={emailText}
          onChange={(event) => {
            setEmailText(event.target.value);
          }}
          titulo="Digite seu email abaixo"
          placeholder="Email Address"
          type="email"
          name="email"
          required
        />
        <InputForm
          value={passwordText}
          onChange={(event) => {
            setPasswordText(event.target.value);
          }}
          titulo="Digite sua senha abaixo"
          placeholder="Password"
          type="password"
          name="senha"
          minLength={6}
          required
        />

        <Button />

        <p className="text-login">
          Already Have An Account?{" "}
          <a href="#" className="link-login">
            Sign In{" "}
          </a>
        </p>
      </form>
      <div className={isToastbarVisible ? "show" : ""} id="snackbar">
        {toastbarText}
      </div>
    </body>
  );
}

export default App;
