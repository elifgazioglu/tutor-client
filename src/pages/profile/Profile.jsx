import { useContext, useEffect, useState } from "react";
import "./Profile.scss";
import axios from "axios";
import { AiOutlineCamera } from "react-icons/ai";
import { Context } from "../../context/Context";

const Profile = () => {
  const [profileData, setProfileData] = useState({
    name: "",
    lastName: "",
    email: "",
    phone: "",
    profilePic: "",
  });

  const [selectedFile, setSelectedFile] = useState(null);
  const { user, dispatch } = useContext(Context);

  const handleFileChange = (event) => {
    setSelectedFile(event.target.files[0]);
  };

  const updateUserProfile = async () => {
    try {
      const updatedData = {
        name: profileData.name,
        lastName: profileData.lastName,
        phone: profileData.phone,
        profilePic: profileData.profilePic,
      };

      if (selectedFile) {
        const formData = new FormData();
        const filename = Date.now() + selectedFile.name;
        formData.append("name", filename);
        formData.append("file", selectedFile);
        updatedData.profilePic = filename;

        try {
          await axios.post(
            `${import.meta.env.VITE_BACKEND_URL}/api/upload`,
            formData,
            {
              headers: {
                Authorization: `${user?.token}`,
              },
            }
          );
        } catch (err) {
          console.log(err);
        }
      }

      const res = await axios.put(
        `${import.meta.env.VITE_BACKEND_URL}/api/users`,
        updatedData,
        {
          headers: {
            Authorization: `${user?.token}`,
          },
        }
      );
      console.log(res);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(
          `${import.meta.env.VITE_BACKEND_URL}/api/users`,
          {
            headers: {
              Authorization: `${user?.token}`,
            },
          }
        );
        console.log(user.token);
        setProfileData(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    fetchData();
  }, []);

  return (
    <div className="profile">
      <div className="image">
        <img
          src={
            selectedFile
              ? URL.createObjectURL(selectedFile)
              : `${import.meta.env.VITE_BACKEND_URL}/images/${
                  profileData?.profilePic
                }`
          }
          alt=""
        ></img>
      </div>
      <label htmlFor="fileInput" className="file-upload-button">
        <AiOutlineCamera className="camera-icon" />
      </label>
      <input
        id="fileInput"
        type="file"
        accept="image/*"
        onChange={handleFileChange}
        style={{ display: "none" }}
      />
      <div className="input-group">
        İsim
        <input
          required
          type="text"
          name="name"
          value={profileData.name}
          onChange={(e) =>
            setProfileData({ ...profileData, name: e.target.value })
          }
          placeholder="isim"
        />
      </div>
      <div className="input-group">
        Soyisim
        <input
          required
          type="text"
          name="lastName"
          value={profileData.lastName}
          onChange={(e) =>
            setProfileData({ ...profileData, lastName: e.target.value })
          }
          placeholder="soyisim"
        />
      </div>
      <div className="input-group">
        <label>E-posta</label>
        <input
          required
          type="email"
          name="email"
          value={profileData.email}
          placeholder="e-posta"
        />
      </div>
      <div className="input-group">
        Telefon Numarası
        <input
          type="tel"
          name="phone"
          pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
          value={profileData.phone}
          onChange={(e) =>
            setProfileData({ ...profileData, phone: e.target.value })
          }
          placeholder="telefon"
        />
      </div>
      <button className="update-button" onClick={updateUserProfile}>
        Profilimi Güncelle
      </button>
    </div>
  );
};

export default Profile;
