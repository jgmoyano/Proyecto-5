import { useContext, useState } from "react";
import { loginService, signupService } from "./services/user";
import { UserContext } from "./context/UserContext";
import "./AuthForm.css"
import { useNavigate } from "react-router-dom";

export const AuthForm = () => {
  const [isMember, setIsMember] = useState(false);
  const { token, setToken } = useContext(UserContext)
  const navigate = useNavigate();
  
  const onSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);
    const dataObject = Object.fromEntries(formData);

    if (isMember) {
      const userData = await loginService(dataObject);
      localStorage.setItem("token", userData.detail.token)
      navigate("https://jgmoyano.github.io/Proyecto-5/")
    } else {
      const userData = await signupService(dataObject);
      localStorage.setItem("token", userData.detail.token)
      navigate("https://jgmoyano.github.io/Proyecto-5/")
    }
  };

  return (
    <section>
      <form onSubmit={onSubmit}>
        <h3>{isMember ? "Login" : "Register"}</h3>
        {!isMember && (
          <div>
            <div>
              <label htmlFor="firstName">Nombre</label>
              <input id="firstName" type="text" name="firstName"></input>
            </div>
            <div>
              <label htmlFor="lastName">Apellido</label>
              <input id="lastName" type="text" name="lastName"></input>
            </div>

          </div>
        )}
        <div>
          <label htmlFor="mail">Email</label>
          <input id="mail" type="text" name="mail"></input>
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <input id="password" type="password" name="password"></input>
        </div>
        <br />
        <button type="submit">Ingresar</button>
        <br />
        <p>
          {isMember ? "Aun no estas registrado ?" : "Ya estas registrado?"}
          <button type="button" onClick={() => setIsMember(!isMember)}>
            {isMember ? "Register" : "Login"}
          </button>
        </p>
      </form>
    </section>
  );
};
