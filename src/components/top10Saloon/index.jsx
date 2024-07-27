import React from "react";
import "./index.scss";
import { Link } from "react-router-dom";

const Top10Saloon = () => {
  const data = [
    {
      name: "İsanın gözəllik salonu",
      location: "Azərbaycan, Bakı, Nərimanov",
      coverImageURL:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTco-Ox11TirmfubkP41UX4YoEZRUbvMzreuA&s",
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
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTco-Ox11TirmfubkP41UX4YoEZRUbvMzreuA&s",
    },
    {
      name: "Samirin masaj salonu",
      location: "Azərbaycan, Bakı, Binə",
      coverImageURL:
        "https://media.istockphoto.com/id/1411972233/tr/foto%C4%9Fraf/empty-dirt-street-in-an-old-western-town-with-various-wooden-buildings-3d-illustration.jpg?s=612x612&w=0&k=20&c=8rhGQTvAn1kvXJYbK4rMQrEAxWqoOw1xczmd19rpox0=",
    },
    {
      name: "Ramilin kişi salonu",
      location: "Azərbaycan, Bakı, Gənclik",
      coverImageURL:
        "https://content.jdmagicbox.com/comp/chandigarh/x5/0172px172.x172.170608000831.y8x5/catalogue/hair-saloon-chandigarh-t1bimr8jba.jpg",
    },
    {
      name: "Ramilin kişi salonu",
      location: "Azərbaycan, Bakı, Gənclik",
      coverImageURL:
        "https://content.jdmagicbox.com/comp/chandigarh/x5/0172px172.x172.170608000831.y8x5/catalogue/hair-saloon-chandigarh-t1bimr8jba.jpg",
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
        "https://avatars.mds.yandex.net/get-altay/9827997/2a0000018a8c5e7469ea21505cbc15415277/orig",
    },
  ];

  return (
    <div id="top10SaloonComponent">
      {data?.map((e, i) => {
        return (
          <Link className="card" to={"/"}>
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
