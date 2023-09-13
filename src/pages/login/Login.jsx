import { useState } from "react";
import "./Login.scss";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { useContext } from "react";
import { Context } from "../../context/Context";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState(null);
  const { dispatch, isFetching } = useContext(Context);

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    dispatch({ type: "LOGIN_START" });
    try {
      const res = await axios.post(
        `${import.meta.env.VITE_BACKEND_URL}/api/auth/login`,
        {
          email,
          password,
        },
        { withCredentials: true }
      );
      dispatch({ type: "LOGIN_SUCCESS", payload: res.data });
      localStorage.setItem("currentUser", JSON.stringify(res.data));
      document.cookie = `accessToken=${res.data.token};max-age=604800;`
      navigate("/");
    } catch (err) {
      setErrorMessage("E-posta veya şifre geçersiz...");
      setTimeout(() => {
        setErrorMessage("");
      }, 5000);
      dispatch({ type: "LOGIN_FAILURE" });
      console.log(err);
    }
  };
  return (
    <div className="login">
      <h1>Giriş Yap</h1>
      <form onSubmit={handleSubmit}>
        <input
          name="email"
          type="email"
          placeholder="e-posta"
          onChange={(e) => setEmail(e.target.value)}
        ></input>
        <input
          name="password"
          type="password"
          placeholder="şifre"
          onChange={(e) => setPassword(e.target.value)}
        ></input>
        <button type="submit" disabled={isFetching}>
          Giriş Yap
        </button>
        {errorMessage && <p>{errorMessage}</p>}
        <span>
          Henüz bir hesabınız yok mu? <Link to="/kayit-ol">Kayıt ol</Link>
        </span>
      </form>
    </div>
  );
};

export default Login;
