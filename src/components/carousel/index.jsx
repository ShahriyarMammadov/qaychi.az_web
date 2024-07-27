import React, { useState, useEffect, useRef } from "react";
import "./index.scss";
import DownloadButtons from "../downloadButtons";

const CarouselComponent = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [startPosition, setStartPosition] = useState(0);
  const [currentTranslate, setCurrentTranslate] = useState(0);
  const [prevTranslate, setPrevTranslate] = useState(0);
  const intervalRef = useRef(null);
  const carouselRef = useRef(null);

  const slides = [
    {
      id: 1,
      imageURL: "https://code.edu.az/wp-content/uploads/2024/05/yee_png.webp",
      headText: "Bizimlə daha vaxtınıza qənaət edin!",
      description:
        "Sizdə elə indi tətbiqimizi Play Market və ya App Store-dan endirərkən tətbiqimizin funksionallıqlarından yararlanın.",
    },
    {
      id: 2,
      imageURL:
        "https://code.edu.az/wp-content/uploads/2024/06/CS-Hero-Image_jpg.webp",
      headText: "Sizdə bizə qoşulun, Biznesinizi böyüdün!",
      description:
        "Elə indi biznes hesabı olaraq qeydiyyatdan keçin, salonunuzu 100000-lərlə müştəri ilə bölüşün.",
      googlePlay: "https://play.google.com/store/games?device=windows",
      appStore: "https://www.apple.com/app-store/",
    },
  ];

  useEffect(() => {
    intervalRef.current = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
    }, 4000);

    return () => clearInterval(intervalRef.current);
  }, []);

  const handleMouseDown = (event) => {
    setIsDragging(true);
    setStartPosition(event.clientX);
    setPrevTranslate(currentTranslate);
    stopAutoPlay();
  };

  const handleMouseMove = (event) => {
    if (isDragging) {
      const currentPosition = event.clientX;
      const diff = currentPosition - startPosition;
      setCurrentTranslate(prevTranslate + diff);
    }
  };

  const handleMouseUp = () => {
    setIsDragging(false);
    const movedBy = currentTranslate - prevTranslate;

    if (movedBy < -100 && currentIndex < slides.length - 1) {
      setCurrentIndex(currentIndex + 1);
    } else if (movedBy > 100 && currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    } else {
      setCurrentTranslate(-currentIndex * 100);
    }

    setCurrentTranslate(0);
    setPrevTranslate(0);
    startAutoPlay();
  };

  return (
    <div
      className="carousel-container"
      ref={carouselRef}
      onMouseDown={handleMouseDown}
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUp}
      onMouseLeave={handleMouseUp}
    >
      <div
        className="carousel-wrapper"
        style={{
          transform: isDragging
            ? `translateX(${currentTranslate}px)`
            : `translateX(-${currentIndex * 100}%)`,
          transition: isDragging ? "none" : "transform 0.5s ease-in-out",
        }}
      >
        {slides.map((slide, index) => (
          <div key={slide.id} className="carousel-slide">
            <div className="card">
              <div className="content">
                <h2>{slide?.headText}</h2>
                <p>{slide?.description}</p>

                <DownloadButtons />
              </div>

              <div className="image">
                <img src={slide?.imageURL} alt="image" />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CarouselComponent;
