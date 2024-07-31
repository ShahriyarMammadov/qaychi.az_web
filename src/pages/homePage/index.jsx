import React from "react";
import "./index.scss";
import CarouselComponent from "../../components/carousel";
import Top10Saloon from "../../components/top10Saloon";
import Partners from "../../components/partners";
import { FaChevronRight } from "react-icons/fa6";
import barbershop from "../../assets/barbershop.png";
import beautySaloon from "../../assets/beautySaloon.png";
import fitness from "../../assets/fitness.png";
import lazer from "../../assets/lazer.png";
import gift_box from "../../assets/gift_box.png";
import { Helmet } from "react-helmet";
import PromoCodes from "../../components/promoCodes";

const HomePage = () => {
  const businessData = [
    {
      name: "Bərbərxanalar",
      description: "Kişi bərbərxanaları",
      icon: barbershop,
    },
    {
      name: "Gözəllik salonları",
      description: "Qadın gözəllik salonları",
      icon: beautySaloon,
    },
    {
      name: "Dərzi",
      description: "Tikiş və rəngləmə",
      icon: fitness,
    },
    {
      name: "Lazer məzkəzləri",
      description: "Kişi və qadın lazer məzkəzləri",
      icon: lazer,
    },
  ];

  return (
    <div id="homePage">
      <Helmet>
        <meta charSet="utf-8" />
        <title>Qaychi</title>
        <link rel="canonical" href="https://qaychi.az" />
      </Helmet>

      <section id="section1">
        <div className="container">
          <CarouselComponent />
        </div>
      </section>

      {/* Business */}
      <section id="business">
        <div className="container">
          <div className="headText">
            <h2>
              Biznes <span>sahələri</span>
            </h2>
          </div>

          <div className="cards">
            {businessData?.map((e, i) => {
              return (
                <div className="card">
                  <div className="nameAndIcon">
                    {e?.name}

                    <div className="headerIcon">
                      <FaChevronRight className="icon1" />
                    </div>
                  </div>

                  <div className="desc">
                    <p>{e?.description}</p>
                  </div>

                  <div className="icon">
                    <img src={e?.icon} alt={e?.name} />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section id="section3">
        <div className="container">
          <div className="left">
            <h2>
              Sayımız günü-gündən artır, <span>Sizdə bizə qoşulun!</span>
            </h2>
          </div>

          <div className="right">
            <div>
              <p>Gözəllik salonlar</p>
              <p>2800+</p>
            </div>

            <div>
              <p>Bərbərxanalar</p>
              <p>15000+</p>
            </div>

            <div>
              <p>Dərzilər</p>
              <p>1500+</p>
            </div>

            <div>
              <p>Lazer Mərkəzləri</p>
              <p>1000+</p>
            </div>
          </div>
        </div>
      </section>

      <section id="section4">
        <div className="container">
          <div className="headBar">
            <h3>
              Populyar <span style={{ color: "#FFC02D" }}>məkanlar</span>
            </h3>

            <button>Hamısı</button>
          </div>

          <Top10Saloon />
        </div>
      </section>

      {/* promo code's */}
      <section id="section6">
        <div className="container">
          <div className="headBar">
            <h3>
              <img src={gift_box} alt="gift_box" />
              <span style={{ color: "#FFC02D" }}>Promo</span>
              təkliflər{" "}
            </h3>

            <button>Hamısı</button>
          </div>

          <PromoCodes />
        </div>
      </section>

      {/* partners */}
      <section id="section5">
        <div className="container">
          <Partners />
        </div>
      </section>
    </div>
  );
};

export default HomePage;
