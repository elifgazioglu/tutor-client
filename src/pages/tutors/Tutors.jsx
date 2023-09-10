import { useEffect, useState } from "react";
import "./Tutors.scss";
import axios from "axios";
import { Link } from "react-router-dom";
import nouser from "../../images/nouser.jpg";

const Tutors = () => {
  const [tutors, setTutors] = useState([]);

  useEffect(() => {
    fetchTutors();
  }, []);

  const fetchTutors = async () => {
    try {
      const response = await axios.get(
        `${import.meta.env.VITE_BACKEND_URL}/api/users/teachers`
      );
      setTutors(response.data);
    } catch (error) {
      console.error("Error fetching tutors:", error);
    }
  };

  return (
    <div className="tutors-container">
      <div className="tutors-header-div">
        <div className="tutors-title x">EĞİTMENLER</div>
      </div>
      <div className="tutors-list">
        {tutors.map((tutor) => (
          <div key={tutor._id} className="tutor-item">
            <Link to={`/egitmenler/${tutor.slug}`} className="tutor-link">
              <img
                className="tutors-img"
                src={
                  tutor?.profilePic
                    ? `${import.meta.env.VITE_BACKEND_URL}/images/${tutor.profilePic}`
                    : nouser
                }
                alt=""
              />
              <div className="tutor-information">
                <div className="tutor-name">{tutor.name}</div>
                <div className="tutor-lastname">{tutor.lastName}</div>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Tutors;
