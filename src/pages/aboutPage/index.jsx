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
import { Helmet } from "react-helmet";

const AboutPage = () => {
  const data = [
    {
      title: "Müştəri Məmnuniyyəti",
      text: "İşimizə və bir-birimizə qarşı inamın formalaşması üçün yüksək mənəvi prinsiplərlə davranırıq.",
      imageURL:
        "https://code.edu.az/wp-content/uploads/2024/03/inclusiveness-1_png.webp",
    },
    {
      title: "İnnovasiya və Yenilik",
      text: "Qlobal innovasiyaları izləyir, məhsullarımızı təkmilləşdirərək müştərilərimizə xidmət göstəririk.",
      imageURL:
        "https://code.edu.az/wp-content/uploads/2024/03/inclusiveness-1_png.webp",
    },
    {
      title: "Keyfiyyət və Etibarlılıq",
      text: "Əməkdaşlarımızın və məhsullarımızın daimi inkişafını hər zaman təmin edirik.",
      imageURL:
        "https://code.edu.az/wp-content/uploads/2024/03/inclusiveness-1_png.webp",
    },
    {
      title: "Peşəkarlıq və Dəstək",
      text: "Özünəməxsus proqramlarımız, xidmətimiz və yanaşmamızla sektorda digərlərindən fərqlənirik.",
      imageURL:
        "https://code.edu.az/wp-content/uploads/2024/03/inclusiveness-1_png.webp",
    },
    {
      title: "Individualliq",
      text: "Gələcəyini formalaşdırmaq istəyən və şəxsi inkişafa can atan hər kəsi tələbəmiz olaraq görürük.",
      imageURL:
        "https://code.edu.az/wp-content/uploads/2024/03/inclusiveness-1_png.webp",
    },
  ];

  const rightSectionRef = useRef(null);

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });

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
      <Helmet>
        <meta charSet="utf-8" />
        <title>Qaychi | Haqqımızda</title>
        <link rel="canonical" href="https://qaychi.az" />
      </Helmet>

      <div className="container">
        <div className="headText">
          <h1>Haqqımızda</h1>
        </div>

        <section id="section1">
          <h2>2023-cü ildən gələcəyə doğru...</h2>

          <p>
            Biz, <span>Qaychi</span>, gözəllik sahəsindəki peşəkar xidmətləri
            daha da mükəmməl etmək üçün yaradılmış bir innovasiya layihəsiyik.
            Mobil tətbiqimiz, berberlər, gözəllik salonları və dırnaq ustaları
            üçün nəzərdə tutulmuşdur. Əsas məqsədimiz, bu peşəkar xidmətlərin
            idarə edilməsini asanlaşdırmaq və müştəri təcrübəsini artırmaqdır.
            Tətbiqimiz, müasir texnologiyalarla təmin edilmiş, istifadəsi rahat
            və intuitiv bir platformadır. Müxtəlif xidmətlər üçün təyinatlar,
            görüşlər və müştəri əlaqələri idarəetmə funksiyaları təklif edirik.
            Hər bir istifadəçi, tətbiqimiz vasitəsilə xidmətləri sürətlə tapa
            bilər, ətraflı məlumat əldə edə bilər və birbaşa əlaqə quraraq öz
            ehtiyaclarına uyğun seçimlər edə bilər. <br /> Biz, müştəri
            məmnuniyyətini ön planda saxlayaraq, xidmətlərin keyfiyyətini
            artırmağa çalışırıq. Mobil tətbiqimiz, gözəllik salonlarının iş
            yükünü azaltmağa və işlərini daha effektiv şəkildə idarə etməyə
            imkan tanıyır. Tətbiqimiz həmçinin, müştəri təcrübəsini şəxsi
            ehtiyaclara uyğun şəkildə fərdiləşdirərək, xidmətlərin keyfiyyətini
            yüksəltmək məqsədini güdür. İşimizdə ən son texnoloji yenilikləri
            tətbiq edərək, müştərilərimizə ən yaxşı nəticələri təqdim etməyi
            hədəfləyirik. Bizimlə əməkdaşlıq edən gözəllik mütəxəssisləri,
            xidmətlərində daha yüksək standartları təmin edə bilmək üçün
            tətbiqimizdən maksimum istifadə edə bilərlər. Gözəllik sektorunda
            bir addım öndə olmaq üçün davamlı inkişafı və yenilikləri izləyirik.
            <br />
            Şirkətimiz, peşəkar komandası ilə müştərilərinə optimal həllər
            təqdim etməyi özünə məqsəd qoyur. Bizim tətbiqimiz, gözəllik
            xidmətlərinin daha şəffaf, rahat və müasir bir şəkildə həyata
            keçirilməsinə kömək edir. Qaychi olaraq, sizə daha yaxşı xidmət
            təqdim etmək üçün daima çalışırıq. Bizim məqsədimiz, gözəllik
            sektorunun inkişafını dəstəkləmək və müştəri təcrübəsini
            artırmaqdır. Tətbiqimizlə tanış olun və gözəllik xidmətlərinizin
            idarə edilməsində yeni bir dövrə qədəm qoyun!
          </p>
        </section>

        <section id="section4">
          <div className="container">
            <div className="left">
              <h1>Xidmətlərimizdə Niyə Daha Effektivik?</h1>
              <FaScissors style={{ color: "#FFC02D", fontSize: "20px" }} />
              <p>
                Qaychi tətbiqi, gözəllik xidmətlərini daha sürətli və effektiv
                şəkildə əldə etməyiniz üçün nəzərdə tutulmuşdur. Sizin
                rahatlığınız üçün, rezervasiya prosesini asanlaşdırır və
                sürətləndiririk. Tətbiqimiz vasitəsilə, xidmətlərə dərhal
                təyinat edə bilirsiniz və gözləmə vaxtınızı minimuma endiririk.
                Mekanları asanlıqla tapmaq üçün intuitiv xəritə funksiyalarımız
                mövcuddur. Beləliklə, ən yaxın və ən uyğun gözəllik salonlarını
                tez bir zamanda tapa bilərsiniz. Xidmətlərin vaxtını dəqiq təyin
                edərək, sizin vaxtınıza qənaət edirik və hər bir görüşü planlı
                şəkildə təşkil edirik. Bizim tətbiqimizdə müştəri rəyləri və
                qiymətləndirmələri ilə xidmətlərin keyfiyyəti haqqında ətraflı
                məlumat əldə etmək mümkündür.
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
                    <p>Dərzi xidmətləri</p>
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
