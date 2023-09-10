import { useState } from "react";
import "./Contact.scss";

const Contact = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Burada form verilerini işlemek istediğiniz kodları ekleyebilirsiniz.
  };

  return (
    <div className="contact-page">
      <div className="form">
      <form onSubmit={handleSubmit}>
        <div className="input-group">
          <label htmlFor="firstName">İsim</label>
          <input
            type="text"
            id="firstName"
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
            required
          />
        </div>
        <div className="input-group">
          <label htmlFor="lastName">Soyisim</label>
          <input
            type="text"
            id="lastName"
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
            required
          />
        </div>
        <div className="input-group">
          <label htmlFor="email">E-posta Adresi</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div className="message-group">
          <label htmlFor="message">Mesaj</label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
          />
        </div>
        <button className="submit-button" type="submit">
          Gönder
        </button>
      </form>
      </div>
    </div>
  );
};

export default Contact;
