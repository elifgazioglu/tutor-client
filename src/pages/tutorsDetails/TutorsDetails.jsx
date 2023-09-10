import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const TutorsDetails = () => {
  const { slug } = useParams();
  const [user, setUser] = useState(null);

  useEffect(() => {
    axios
      .get(`${process.env.BACKEND_URL}/api/users/${slug}`)
      .then((response) => setUser(response.data))
      .catch((error) => console.error(error));
  }, [slug]);

  if (!user) {
    return <div>Kullanıcı bulunamadı.</div>;
  }

  return (
    <div>
      <h2>
        Kullanıcı Profili: {user.name} {user.lastName}
      </h2>
    </div>
  );
};

export default TutorsDetails;
