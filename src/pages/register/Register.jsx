import "./Register.scss";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { useContext } from "react";
import { Context } from "../../context/Context";

const Register = () => {
  const [formData, setFormData] = useState({
    name: "",
    lastName: "",
    email: "",
    password: "",
  });

  const [errorMessage, setErrorMessage] = useState("");

  const navigate = useNavigate();

  const { dispatch } = useContext(Context);

  const handleSubmit = async (e) => {
    e.preventDefault();
    dispatch({ type: "LOGIN_START" });
    try {
      const res = await axios.get(
        `${import.meta.env.VITE_BACKEND_URL}/api/auth/email/${formData.email}`
      );
      if (res.data.user) {
        setErrorMessage("Bu e-posta adresi zaten mevcut");
        setTimeout(() => {
          setErrorMessage("");
        }, 5000);
      } else if (formData.password.length < 6) {
        setErrorMessage("Şifre 6 karakterden uzun olmalıdır");
        setTimeout(() => {
          setErrorMessage("");
        }, 5000);
      } else {
        const res = await axios.post(
          `${import.meta.env.VITE_BACKEND_URL}/api/auth/register`,
          formData
        );
        setFormData({ username: "", email: "", password: "" });
        console.log(res.data);
        dispatch({ type: "LOGIN_SUCCESS", payload: res.data });
        localStorage.setItem("currentUser", JSON.stringify(res.data));
        navigate("/");
      }
    } catch (err) {
      dispatch({ type: "LOGIN_FAILURE" });
      console.error(err);
    }
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  return (
    <div className="register">
      <h1>Kayıt Ol</h1>
      <form onSubmit={handleSubmit}>
        <input
          required
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="isim"
        ></input>
        <input
          required
          type="text"
          name="lastName"
          value={formData.lastName}
          onChange={handleChange}
          placeholder="soyisim"
        ></input>
        <input
          required
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="e-posta"
        />
        <input
          required
          type="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
          placeholder="parola"
        />
        <button type="submit">Kayit ol</button>
        {errorMessage && <p>{errorMessage}</p>}
        <span>
          Bir hesabın var mı? <Link to="/giris-yap">Giriş Yap</Link>
        </span>
      </form>
    </div>
  );
};

export default Register;
