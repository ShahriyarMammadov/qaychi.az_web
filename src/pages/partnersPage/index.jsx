import React, { useEffect } from "react";
import "./index.scss";
import { Helmet } from "react-helmet";
import partnerPage from "../../assets/partnerPage.webp";
import { IoPeopleOutline } from "react-icons/io5";
import { FaMoneyBillTrendUp, FaRegLightbulb } from "react-icons/fa6";
import { RiContactsBookUploadLine } from "react-icons/ri";
import Partners from "../../components/partners";

const PartnersPage = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, []);

  return (
    <div id="partnersPage">
      <Helmet>
        <meta charSet="utf-8" />
        <title>Qaychi | Partnyorlar</title>
        <link rel="canonical" href="https://qaychi.az" />
      </Helmet>

      <section id="section1">
        <div className="container">
          <div className="headText">
            <h1>
              Biznes <span>partnyorlarımız</span>
            </h1>

            <p>
              <span>Qaychi.az</span> aparıcı qlobal IT şirkətləri ilə akademik
              partnyorluq edir, tədris proqramını qlobal standartlar əsasında
              formalaşdırır. Partnyorluğumuz nəticəsində tələbələrimiz akademik
              partnyorların rəsmi sertifikatlarını əldə edə bilirlər. Lorem
              ipsum, dolor sit amet consectetur adipisicing elit. Facilis
              mollitia amet eos voluptatum ipsum quos sunt quo maiores animi,
              vel omnis ratione voluptatem. Hic, reprehenderit?
            </p>

            <button>Partnyor ol</button>
          </div>

          <div className="right">
            <img src={partnerPage} alt="" />
          </div>
        </div>
      </section>

      <section id="section2">
        <div className="container">
          <div className="headText">
            <h2>Bizimlə partnyorluğun üstünlükləri</h2>
          </div>

          <div className="cards">
            <div className="card">
              <div className="image">
                <IoPeopleOutline className="icon" />
              </div>

              <div className="content">
                <div className="title">
                  <h4>Daha çox müstəri kütləsi</h4>

                  <p>
                    Dərs saatlarından əlavə təşkil edilən Lab günlərində
                    instruktor və mentorla birlikdə keçirilən mövzuları praktika
                    edəcəksən.
                  </p>
                </div>
              </div>
            </div>

            <div className="card">
              <div className="image">
                <RiContactsBookUploadLine className="icon" />
              </div>

              <div className="content">
                <div className="title">
                  <h4>Onlayn rezervasiya</h4>

                  <p>
                    Dərs saatlarından əlavə təşkil edilən Lab günlərində
                    instruktor və mentorla birlikdə keçirilən mövzuları praktika
                    edəcəksən.
                  </p>
                </div>
              </div>
            </div>

            <div className="card">
              <div className="image">
                <FaMoneyBillTrendUp className="icon" />
              </div>

              <div className="content">
                <div className="title">
                  <h4>Bol qazanc</h4>

                  <p>
                    Dərs saatlarından əlavə təşkil edilən Lab günlərində
                    instruktor və mentorla birlikdə keçirilən mövzuları praktika
                    edəcəksən.
                  </p>
                </div>
              </div>
            </div>

            <div className="card">
              <div className="image">
                <FaRegLightbulb className="icon" />
              </div>

              <div className="content">
                <div className="title">
                  <h4>Müasirlik</h4>

                  <p>
                    Dərs saatlarından əlavə təşkil edilən Lab günlərində
                    instruktor və mentorla birlikdə keçirilən mövzuları praktika
                    edəcəksən.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* all partners */}
      <section id="section3">
        <div className="container">
          <Partners />
        </div>
      </section>
    </div>
  );
};

export default PartnersPage;
