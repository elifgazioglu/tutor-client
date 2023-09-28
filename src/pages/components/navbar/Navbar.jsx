import { useContext, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Navbar.scss";
import axios from "axios";
import nouser from "../../../images/nouser.jpg";
import Cookies from "js-cookie";
import { Context } from "../../../context/Context";

const Navbar = () => {
  const [active, setActive] = useState(false);
  const [open, setOpen] = useState(false);
  const [currentUser, setCurrentUser] = useState(null);
  const { user, dispatch } = useContext(Context);

  const navigate = useNavigate();

  const isActive = () => {
    window.scrollY > 0 ? setActive(true) : setActive(false);
  };

  useEffect(() => {
    window.addEventListener("scroll", isActive);
    return () => {
      window.removeEventListener("scroll", isActive);
    };
  }, []);

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const res = await axios.get(
          `${import.meta.env.VITE_BACKEND_URL}/api/users`,
          {
            headers: {
              Authorization: `${user?.token}`,
            },
          }
        );
        setCurrentUser(res.data);
      } catch (err) {
        console.log(err);
      }
    };

    fetchUserData();
  }, []);

  const handleLogout = async () => {
    try {
      await axios.post(
        `${import.meta.env.VITE_BACKEND_URL}/api/auth/logout`,
        null,
        {
          withCredentials: true,
        }
      );
      Cookies.remove("accessToken");
      setCurrentUser(null); // Clear user data
      localStorage.removeItem("currentUser");
      localStorage.removeItem("user");
      navigate("/");
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className={active ? "navbar active" : "navbar"}>
      <div className="container">
        <div className="logo">
          <Link className="link" to="/">
            <span className="logo-side">
              <img className="logo-img" src="/logo.png" alt="Logo" />
            </span>
          </Link>
        </div>
        <div className="links">
          <div className="user">
            <Link className="link" to="/about">
              <span className="text">Hakkımızda</span>
            </Link>
          </div>
          <div className="user">
            <Link className="link" to="/contact">
              <span className="text">İletişim</span>
            </Link>
          </div>
          {currentUser && (
            <div className="user">
              <Link className="link" to="/egitmenler">
                <span className="text">Eğitmenler</span>
              </Link>
            </div>
          )}
          {currentUser ? (
            <div className="user" onClick={() => setOpen(!open)}>
              <img
                src={
                  currentUser?.profilePic
                    ? `${import.meta.env.VITE_BACKEND_URL}/images/${
                        currentUser.profilePic
                      }`
                    : nouser
                }
                alt=""
              />
              <span className="text">{currentUser.name}</span>
              {open && (
                <div className="options">
                  <Link className="link" to="/profile">
                    Profil
                  </Link>
                  {currentUser.role === "teacher" ? (
                    <Link className="link" to="/egitmen-profili">
                      Eğitmen bilgilerim
                    </Link>
                  ) : (
                    <Link className="link" to="/egitmen-ol">
                      Eğitmen ol
                    </Link>
                  )}
                  <Link className="link" onClick={handleLogout}>
                    Çıkış yap
                  </Link>
                </div>
              )}
            </div>
          ) : (
            <Link className="link" to="/giris-yap">
              <button>Giriş Yap</button>
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
