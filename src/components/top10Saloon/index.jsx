import React from "react";
import "./index.scss";
import { Link } from "react-router-dom";

const Top10Saloon = () => {
  const data = [
    {
      name: "İsanın gözəllik salonu",
      location: "Azərbaycan, Bakı, Nərimanov",
      coverImageURL:
        "https://pageneon.com/cdn/shop/products/Man-Barber-Shop-Neon-Sign-Led-Light-Pink.jpg?v=1678692807&width=1200",
    },
    {
      name: "Samirin masaj salonu",
      location: "Azərbaycan, Bakı, Binə",
      coverImageURL:
        "https://media.istockphoto.com/id/1411972233/tr/foto%C4%9Fraf/empty-dirt-street-in-an-old-western-town-with-various-wooden-buildings-3d-illustration.jpg?s=612x612&w=0&k=20&c=8rhGQTvAn1kvXJYbK4rMQrEAxWqoOw1xczmd19rpox0=",
    },
    {
      name: "İsanın gözəllik salonu",
      location: "Azərbaycan, Bakı, Nərimanov",
      coverImageURL:
        "https://media.timeout.com/images/105816717/1536/1152/image.webp",
    },
    {
      name: "Samirin masaj salonu",
      location: "Azərbaycan, Bakı, Binə",
      coverImageURL:
        "https://www.revealhairstudiorye.com/wp-content/uploads/2021/01/Untitled-design.jpg",
    },
    {
      name: "Ramilin kişi salonu",
      location: "Azərbaycan, Bakı, Gənclik",
      coverImageURL:
        "https://bakstone.az/site/assets/files/6468/yilmaz_b_y_g_nclik_1_02.jpg",
    },
    {
      name: "Ramilin kişi salonu",
      location: "Azərbaycan, Bakı, Gənclik",
      coverImageURL:
        "https://classpass-res.cloudinary.com/image/upload/f_auto/q_auto/cqx2q2rqztjuvtqs0zq9.jpg",
    },
    {
      name: "Şəhriyarın masaj salonu",
      location: "Azərbaycan, Bakı, Nərimanov",
      coverImageURL:
        "https://avatars.mds.yandex.net/get-altay/9827997/2a0000018a8c5e7469ea21505cbc15415277/orig",
    },
    {
      name: "Şəhriyarın masaj salonu",
      location: "Azərbaycan, Bakı, Nərimanov",
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
