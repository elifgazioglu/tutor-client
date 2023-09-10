import "./About.scss";
import img2 from "../../images/hatice.png";

const About = () => {
  return (
    <div className="about">
      <div className="about-container">
        <div className="first-section">
          <div className="img-side">
            <img src={img2}></img>
          </div>
          <div className="text-side">
            <h2>Hikayemiz! 🥹</h2>
            <p>
              <em>
                <strong>PekiÇocuk</strong>
              </em>
              'un temelleri, eğitimin gücüne inanan bir ailenin ortanca
              çocuğunun, Hatice Gazioğlu'nun hikayesine dayanmaktadır. Eğitimini
              psikoloji alanında başlatan Hatice, sinir bilimi alanında yüksek
              lisans yaparak öğrenme yolculuğunu daha da derinleştirdi. 2019
              yılında, yönetici rollerine hazırlanmak amacıyla Amerika'ya
              işletme üzerine yüksek lisans yapmaya karar verdi. Ancak, kısa
              süre sonra Türkiye'de meydana gelen büyük bir deprem, Hatice'nin
              yolculuğunu yeni ve anlamlı bir yöne yönlendirdi
            </p>
            <p>
              Çünkü Hatice, eğitimin bir arada büyümenin, paylaşmanın ve
              desteklemenin toplumumuzu daha güçlü kılabileceğine olan inancını
              bir ailenin parçası olarak benimsemişti. Bu inanç,{" "}
              <em>
                <strong>PekiÇocuk</strong>
              </em>
              'un doğuşuna ilham oldu; bir platform, bir topluluk, bir
              hareket...
            </p>
          </div>
        </div>
        <div className="second-section">
          <h1>
            <em>
              <strong>PekiÇocuk</strong>
            </em>
            ’un Misyonu
          </h1>
          <p>
            <em>
              <strong>PekiÇocuk</strong>
            </em>
            , hem büyüklerin tecrübelerini paylaşabileceği hem de küçüklerin
            öğrenme aşklarını büyütebileceği sıcak bir ortam yaratmayı amaçlar.
            1998 İstanbul depreminde yaşananları bizzat tecrübe etmiş biri
            olarak, ben ve ekibim, geleceğin nesillerine ulaşmak, onlara ilham
            vermek ve birlikte güçlenmek istiyoruz.
          </p>
          <br></br>
          <p>
            Eğitim, bir çocuğun "Hangi alanda yetenekliyim?" sorusuna cevap
            bulmasını zorlaştırmamalı, aksine kolaylaştırmalıdır. Biz, her
            çocuğun bu soruya kendine özgü bir yanıt bulabileceği, her ailenin
            çocuklarını destekleyebileceği ve her bireyin öğrenme yolculuğuna
            değer katabileceği bir toplum hayal ediyoruz.
          </p>
          <br></br>
          <p>
            <em>
              <strong>PekiÇocuk</strong>
            </em>
            , bu hayali gerçeğe dönüştürmeye adanmış bir platformdur.
            Depremlerin yıktığı, zamanın ve unutulan yardımların yara açtığı
            topraklarımızda, umudu yeşerten, bilgiyi paylaşan ve birlikte daha
            parlak bir gelecek inşa eden bir köprü vazifesi görüyor.
          </p>
          <br></br>
          <p>
            Biz, PekiÇocuk olarak, birlikte öğrenmenin, birlikte büyümenin ve
            birlikte inşa etmenin gücüne inanıyoruz. Genç, yaşlı, öğrenci,
            öğretmen; hepimiz bir araya gelerek, birbirimize yardımcı olarak ve
            birlikte güçlenerek, geleceğimizi aydınlık bir yarına taşıyabiliriz.
          </p>
          <br></br>
          <p>
            <em>
              <strong>
                Hadi, bu güzel yolculukta bize katılın. Çünkü biz, birlikte daha
                güçlüyüz!
              </strong>
            </em>
          </p>
        </div>
        <div className="using-page">
          <h1>Sen de umut olmak ister misin?</h1>
          <button>Nasıl Kullanırım?</button>
        </div>
      </div>
    </div>
  );
};

export default About;
