import React, { useEffect, useRef } from "react";
import "./index.scss";
import { FaScissors, FaCheck } from "react-icons/fa6";
import image1 from "../../assets/section2_1.jpg";
import image2 from "../../assets/section2_2.jpg";

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
          <div className="description">
            <div className="logo">
              <FaScissors className="icon" />
              <h3>Qaychi.az</h3>
            </div>
            <div className="description">
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis
                accusantium facilis minima eaque, est vel, pariatur suscipit
                quia quaerat dolorem corporis aperiam? Facere nobis aliquid iste
                debitis eveniet aut eligendi
              </p>
              <button className="appointmentButton">Rezerv Et</button>
            </div>
          </div>
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
    </div>
  );
};

export default HomePage;
