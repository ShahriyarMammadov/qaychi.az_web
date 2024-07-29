import React, { useEffect, useRef } from "react";
import "./index.scss";
import { FaScissors, FaCheck } from "react-icons/fa6";
import image1 from "../../assets/section2_1.jpg";
import image2 from "../../assets/section2_2.jpg";
import CarouselComponent from "../../components/carousel";
import Top10Saloon from "../../components/top10Saloon";
import Partners from "../../components/partners";

const HomePage = () => {
  const rightSectionRef = useRef(null);

  useEffect(() => {
    const handleMouseMove = (e) => {
      if (rightSectionRef.current) {
        const { left, top, width, height } =
          rightSectionRef.current.getBoundingClientRect();
        const x = ((e.clientX - left) / width - 0.5) * 20;
        const y = ((e.clientY - top) / height - 0.5) * 20;

        rightSectionRef.current.querySelectorAll("img").forEach((img) => {
          img.style.transform = `translate(${x}px, ${y}px)`;
        });
      }
    };

    const rightSection = rightSectionRef.current;
    rightSection.addEventListener("mousemove", handleMouseMove);

    return () => {
      rightSection.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <div id="homePage">
      <section id="section1">
        <div className="container">
          <CarouselComponent />
        </div>
      </section>

      <section id="section2">
        <div className="container">
          <div className="left">
            <h2>Haqqımızda</h2>
            <h1>2 İllik təcrübə</h1>
            <FaScissors style={{ color: "#FFC02D", fontSize: "20px" }} />
            <p>
              Morbi ut blandit mauris, ac aliquet arcu. Curabitur non nulla
              pharetra, sodales neque ac, ultrices orci. Etiam laoreet sem sed
              posuere mollis. Donec non libero scelerisque, volutpat augue quis,
              sagittis odio. Curabitur dictum mollis libero vel aliquam.
              Suspendisse id eleifend sapien. Proin sed lobortis nisl.
            </p>
            <div className="services">
              <div className="left">
                <div>
                  <FaCheck className="checkIcon" />
                  <p>Saç kəsimi</p>
                </div>
                <div>
                  <FaCheck className="checkIcon" />
                  <p>Vaxt itirmədən rezervasiya</p>
                </div>
                <div>
                  <FaCheck className="checkIcon" />
                  <p>Üz baxımı</p>
                </div>
              </div>

              <div className="right">
                <div>
                  <FaCheck className="checkIcon" />
                  <p>Manikur</p>
                </div>
                <div>
                  <FaCheck className="checkIcon" />
                  <p>Padikur</p>
                </div>
                <div>
                  <FaCheck className="checkIcon" />
                  <p>7/24 onlayn dəstək</p>
                </div>
              </div>
            </div>
          </div>

          <div className="rightContainer" ref={rightSectionRef}>
            <img src={image1} alt="Haircut Image" />
            <img src={image2} alt="Beard Trim Image" className="altImage" />
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
              <p>Əməkdaş olan salonlar</p>
              <p>2800+</p>
            </div>

            <div>
              <p>Aktiv istifadəçilər</p>
              <p>15000+</p>
            </div>

            <div>
              <p>Əməkdaş olan salonlar</p>
              <p>1500+</p>
            </div>

            <div>
              <p>Əməkdaş olan salonlar</p>
              <p>1500+</p>
            </div>
          </div>
        </div>
      </section>

      <section id="section4">
        <div className="container">
          <h3>Top 8 salon</h3>

          <Top10Saloon />
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
