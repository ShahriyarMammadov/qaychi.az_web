import React, { useEffect, useRef } from "react";
import "./index.scss";
import { FaChevronRight } from "react-icons/fa6";
import massage from "../../assets/massage.png";
import barbershop from "../../assets/barbershop.png";
import beautySaloon from "../../assets/beautySaloon.png";
import fitness from "../../assets/fitness.png";
import lazer from "../../assets/lazer.png";
import { FaScissors, FaCheck } from "react-icons/fa6";
import image1 from "../../assets/section2_1.jpg";
import image2 from "../../assets/section2_2.jpg";

const AboutPage = () => {
  const data = [
    {
      title: "İnam",
      text: "İşimizə və bir-birimizə qarşı inamın formalaşması üçün yüksək mənəvi prinsiplərlə davranırıq.",
      imageURL:
        "https://code.edu.az/wp-content/uploads/2024/03/inclusiveness-1_png.webp",
    },
    {
      title: "İnnovasiya",
      text: "Qlobal innovasiyaları izləyir, məhsullarımızı təkmilləşdirərək müştərilərimizə xidmət göstəririk.",
      imageURL:
        "https://code.edu.az/wp-content/uploads/2024/03/inclusiveness-1_png.webp",
    },
    {
      title: "İnkişaf",
      text: "Əməkdaşlarımızın və məhsullarımızın daimi inkişafını hər zaman təmin edirik.",
      imageURL:
        "https://code.edu.az/wp-content/uploads/2024/03/inclusiveness-1_png.webp",
    },
    {
      title: "İndividuallıq",
      text: "Özünəməxsus proqramlarımız, xidmətimiz və yanaşmamızla sektorda digərlərindən fərqlənirik.",
      imageURL:
        "https://code.edu.az/wp-content/uploads/2024/03/inclusiveness-1_png.webp",
    },
    {
      title: "İnsanlıq",
      text: "Gələcəyini formalaşdırmaq istəyən və şəxsi inkişafa can atan hər kəsi tələbəmiz olaraq görürük.",
      imageURL:
        "https://code.edu.az/wp-content/uploads/2024/03/inclusiveness-1_png.webp",
    },
  ];

  const businessData = [
    {
      name: "Bərbərxanalar",
      description: "Kişi bərbərxaları",
      icon: barbershop,
    },
    {
      name: "Gözəllik salonları",
      description: "Qadın gözəllik salonları",
      icon: beautySaloon,
    },
    {
      name: "Fitnes zalları",
      description: "Kişi və ya qadın fitnes zalları",
      icon: fitness,
    },
    {
      name: "Lazer Salonlar;",
      description: "Kişi bərbərxaları",
      icon: lazer,
    },
    {
      name: "Masaj salonları",
      description: "Kişi və ya qadınlar üçün masaj sa  bərbərxaları",
      icon: massage,
    },
  ];

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
    <div id="aboutPage">
      <div className="container">
        <div className="headText">
          <h1>Haqqımızda</h1>
        </div>

        <section id="section1">
          <h2>2023-cü ildən gələcəyə doğru...</h2>

          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Esse
            nesciunt molestiae tempore, quod inventore libero, error veniam nam,
            recusandae veritatis facere sunt? Veritatis doloribus, assumenda
            mollitia magni recusandae necessitatibus excepturi! Lorem ipsum
            dolor sit amet consectetur adipisicing elit. Maxime sapiente totam
            eos sequi quos, ratione illo culpa molestias at accusamus atque ipsa
            fuga? Magni sit illo consequatur debitis inventore ut voluptatum
            error nam fuga deserunt perspiciatis adipisci totam, nihil
            excepturi! Accusamus neque quidem est eveniet ducimus commodi amet
            ipsa placeat quo harum, nemo et? Deserunt esse veritatis earum sunt
            temporibus tempore perspiciatis, explicabo est, eum cumque
            necessitatibus quas consectetur repellat sit. Dignissimos numquam
            distinctio soluta nam, ipsum unde provident maxime voluptatibus
            placeat tenetur totam, dolor culpa consequatur reprehenderit enim,
            sed omnis mollitia facilis rem vel recusandae quae! Aliquid animi,
            doloribus exercitationem fugit ipsam numquam amet quas maxime
            similique fuga inventore dolorem quam iusto aspernatur possimus eos
            error natus, cumque minus debitis eaque magni nihil delectus vel.
            Doloremque a fugiat, vitae unde asperiores reiciendis, voluptate
            sapiente, sint perferendis fugit culpa. Quasi tempore, facere culpa
            obcaecati adipisci voluptatum incidunt assumenda non officiis.
          </p>
        </section>

        <section id="section4">
          <div className="container">
            <div className="left">
              <h1>2 İllik təcrübə</h1>
              <FaScissors style={{ color: "#FFC02D", fontSize: "20px" }} />
              <p>
                Morbi ut blandit mauris, ac aliquet arcu. Curabitur non nulla
                pharetra, sodales neque ac, ultrices orci. Etiam laoreet sem sed
                posuere mollis. Donec non libero scelerisque, volutpat augue
                quis, sagittis odio. Curabitur dictum mollis libero vel aliquam.
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

        <section id="section2">
          <div className="headText">
            <h2>Bizim dəyərlərimiz</h2>
          </div>

          <div className="contents">
            {data?.map((e, i) => {
              return (
                <div className="content" key={i}>
                  <div className="image">
                    <img src={e?.imageURL} alt={e?.title} />
                  </div>

                  <div className="text">
                    <p className="title">{e?.title}</p>
                    <p>{e?.text}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* <section id="section3">
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
        </section> */}
      </div>
    </div>
  );
};

export default AboutPage;
