import Featured from "../components/featured/Featured";
import "./Home.scss";
import img from "../../images/home.jpg";

const Home = () => {
  return (
    <div className="home">
      <Featured></Featured>
      <div className="container-home-part-one">
        <div className="part-one-left-side">
          <h2 className="part-one-first">
            <span>Umutları</span> yeşerten <br></br>bir dünyaya
          </h2>
          <br></br>
          <h2 className="part-one-second">
            Başarılarla dolu bir yolculuğa <span>hoş geldiniz!</span>
          </h2>
        </div>
        <div className="part-one-right-side">
          <img src={img}></img>
        </div>
      </div>
      <div className="container-home-part-two">
        <div className="part-two-text">
          <p>
            Burada,<br></br> öğrenmenin sonsuz denizinde yelken açıyorsunuz.
            <br></br>Bilgi,sizin için yeni ufukların anahtarı olacak. <br></br>{" "}
            Geleceği,
            <strong> eğitimle</strong> birlikte
            <br></br>şekillendirmeye hazır mısınız?
          </p>
          <button>Başlayalım!</button>
        </div>
      </div>
    </div>
  );
};

export default Home;
