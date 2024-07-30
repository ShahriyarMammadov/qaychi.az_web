import React from "react";
import "./index.scss";
import { Link } from "react-router-dom";
import image3 from "../../assets/image1.jpg";

const Top10Saloon = () => {
  const data = [
    {
      name: "Mark BarberShop",
      location: "Azərbaycan, Bakı, Nərimanov",
      coverImageURL:
        "https://pageneon.com/cdn/shop/products/Man-Barber-Shop-Neon-Sign-Led-Light-Pink.jpg?v=1678692807&width=1200",
    },
    {
      name: "Aura Tailor's salon",
      location: "Azərbaycan, Bakı, Binə",
      coverImageURL: image3,
    },
    {
      name: "Jack's BarberShop",
      location: "Azərbaycan, Bakı, Suraxanı",
      coverImageURL:
        "https://media.timeout.com/images/105816717/1536/1152/image.webp",
    },
    {
      name: "X Beauty Saloon",
      location: "Azərbaycan, Bakı, Binə",
      coverImageURL:
        "https://www.revealhairstudiorye.com/wp-content/uploads/2021/01/Untitled-design.jpg",
    },
    {
      name: "Relax Massage Saloon",
      location: "Azərbaycan, Bakı, Gənclik",
      coverImageURL:
        "https://bakstone.az/site/assets/files/6468/yilmaz_b_y_g_nclik_1_02.jpg",
    },
    {
      name: "Promise Tatoo Salon",
      location: "Azərbaycan, Bakı, Gənclik",
      coverImageURL:
        "https://pageneon.com/cdn/shop/products/Man-Barber-Shop-Neon-Sign-Led-Light-Purple.jpg?v=1678692807&width=1200",
    },
    {
      name: "XBeauty Saloon",
      location: "Azərbaycan, Bakı, Nərimanov",
      coverImageURL:
        "https://i.etsystatic.com/32858250/r/il/4ce4f7/5340628983/il_1588xN.5340628983_5rok.jpg",
    },
    {
      name: "Aqua BarberShop",
      location: "Azərbaycan, Bakı, Yasamal",
      coverImageURL:
        "https://classpass-res.cloudinary.com/image/upload/f_auto/q_auto/cqx2q2rqztjuvtqs0zq9.jpg",
    },
  ];

  return (
    <div id="top10SaloonComponent">
      {data?.map((e, i) => {
        return (
          <Link className="card" to={"/"} key={i}>
            <div className="image">
              <img src={e?.coverImageURL} alt={e?.name} />
            </div>

            <div className="content">
              <p>{e?.name}</p>
              <p>{e?.location}</p>
            </div>
          </Link>
        );
      })}
    </div>
  );
};

export default Top10Saloon;
