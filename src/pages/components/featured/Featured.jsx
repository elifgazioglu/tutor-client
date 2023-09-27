import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./Featured.scss";

const Featured = () => {
  const [featuredWordIndex, setFeaturedWordIndex] = useState(0);
  const words = ["eğitime", "danışmana", "desteğe", "arkadaşa", "sevgiye"];

  useEffect(() => {
    const interval = setInterval(() => {
      setFeaturedWordIndex((prevIndex) => (prevIndex + 1) % words.length);
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  const featuredWord = words[featuredWordIndex] || "";
  return (
    <div className="featured">
      <div className="container">
        <div className="texts">
          <h1 className="word">Her çocuk</h1>
          <h1 className="changingWord">{featuredWord}</h1>
          <h1 className="word">ihtiyaç duyar.</h1>
        </div>
        <div className="button">
          <Link className="link" to="/kayit-ol">
            Kayıt ol!
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Featured;
