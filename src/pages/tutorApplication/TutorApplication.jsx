import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Select from "react-select";
import { TbFileCv } from "react-icons/tb";
import "./TutorApplication.scss";

const educationOptions = [
  { value: "Lisans", label: "Lisans" },
  { value: "Önlisans", label: "Önlisans" },
  { value: "Yüksek Lisans", label: "Yüksek Lisans" },
  { value: "Doktora", label: "Doktora" },
];

const TutorApply = () => {
  const [file, setFile] = useState(null);
  const [user, setUser] = useState({
    name: "",
    lastName: "",
    email: "",
    educationLevel: "",
    desc: "",
    resume: null,
  });

  const [successMessage, setSuccessMessage] = useState(null);
  const [errorMessage, setErrorMessage] = useState(null);

  const navigate = useNavigate();

  const handleChange = (e) => {
    setUser((prevTutor) => ({
      ...prevTutor,
      [e.target.name]: e.target.value,
    }));
  };

  const handleEducationChange = (selectedOption) => {
    setUser((prevTutor) => ({
      ...prevTutor,
      educationLevel: selectedOption.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (file) {
      const data = new FormData();
      data.append("file", file);
      try {
        const { data: resume } = await axios.post(
          `${import.meta.env.VITE_BACKEND_URL}/api/upload-file`,
          data
        );
        setUser((prevTutor) => ({
          ...prevTutor,
          resume: resume,
        }));
      } catch (err) {
        console.log(err);
      }
    }
    console.log("User object before submission:", user);
    try {
      await axios.post(
        `${import.meta.env.VITE_BACKEND_URL}/api/tutors-application/apply`,
        user
      );
      setSuccessMessage("Başvurunuz başarıyla alındı.");
      setTimeout(() => {
        navigate("/");
      }, 2000);
      console.log(user);
    } catch (error) {
      setErrorMessage("Başvurunuz alınamadı...");
      setTimeout(() => {
        setErrorMessage("");
      }, 5000);
      console.log(user);
    }
  };

  return (
    <form className="tutor-apply-form" onSubmit={handleSubmit}>
      <label htmlFor="name">İsim: </label>
      <input
        type="text"
        id="name"
        name="name"
        onChange={handleChange}
        required
      />

      <label htmlFor="lastName">Soyisim: </label>
      <input
        type="text"
        id="lastName"
        name="lastName"
        onChange={handleChange}
        required
      />

      <label htmlFor="email">Email: </label>
      <input
        type="email"
        id="email"
        name="email"
        onChange={handleChange}
        required
      />

      <label htmlFor="fileInput" className="cv-upload-button">
        <TbFileCv className="cv-icon" />
      </label>
      <input
        type="file"
        id="fileInput"
        name="cv"
        onChange={(e) => setFile(e.target.files[0])}
      />

      <label htmlFor="educationLevel">Eğitim Düzeyi: </label>
      <Select
        className="react-select"
        id="educationLevel"
        name="educationLevel"
        options={educationOptions}
        onChange={handleEducationChange}
        required
      />

      <label htmlFor="desc">Açıklama</label>
      <textarea
        placeholder="Kendiniz hakkında kısa bir açıklama"
        name="desc"
        id="desc"
        cols="30"
        rows="10"
        onChange={handleChange}
      ></textarea>
      <p className={successMessage ? "success-message" : "error-message"}>
        {successMessage || errorMessage}
      </p>
      <button type="submit">Başvur</button>
    </form>
  );
};

export default TutorApply;
