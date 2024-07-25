import "./App.css";
import "./index.scss";
import playmarket from "./assets/playmarket.png";
import apple from "./assets/apple.png";

function App() {
  return (
    <>
      <div className="container">
        <div className="logo">
          <h1>Qaychi.az</h1>
        </div>

        <div className="aboutText">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad incidunt
            voluptate fugit enim repellat quibusdam, tenetur dolorum debitis
            aperiam et autem deserunt harum qui maiores, tempore atque nobis
            quia quae? Repellendus unde reprehenderit repudiandae vero velit
            error, nemo natus asperiores obcaecati excepturi dolores laboriosam
            deleniti alias ut aut, nisi, beatae nam enim doloremque illo
            reiciendis ducimus expedita! Quaerat quas obcaecati qui nobis sit,
            consequuntur earum, repellat laborum placeat maxime aliquam corrupti
            praesentium nemo et molestias, labore aperiam nihil eius cum
            officia? Quo ipsum earum sit distinctio repellendus obcaecati atque
            optio a, animi nihil odio aliquid nulla modi esse! Consequuntur
            incidunt earum placeat eaque alias laudantium laborum quia
            aspernatur expedita sint assumenda magnam quaerat rem eos magni
            eius, repellat laboriosam ducimus modi asperiores debitis quidem
            temporibus repellendus pariatur? Aliquid, dolores perspiciatis nemo
            rerum rem, iure facere nihil vitae qui sunt perferendis numquam?
            Repellat officia, modi totam est nam porro recusandae perferendis
            dicta dolorem velit perspiciatis natus accusamus! Earum autem quia
            quis quisquam totam. Quo vel doloremque beatae voluptatum id non,
            unde reprehenderit et, nemo incidunt quia quis consequatur iusto,
            veritatis rerum consectetur? Aspernatur cum voluptatum itaque
            mollitia nihil impedit, excepturi et quasi esse repellat
            consequuntur aliquid accusamus. Adipisci quam alias vero odit minus,
            ipsa esse explicabo eius recusandae delectus aut architecto eum
            exercitationem maiores consectetur, voluptate repellendus expedita
            ipsam laborum ut numquam voluptates nihil, assumenda corporis.
            Blanditiis in rerum ullam facilis beatae labore quasi provident
            impedit explicabo deserunt dignissimos, quidem veniam nostrum maxime
            molestiae similique enim perferendis reiciendis. Perspiciatis
            aliquam dolorem hic placeat quis praesentium, dolor vitae animi
            laudantium exercitationem voluptatem molestiae expedita! Ut ducimus
            ad eligendi praesentium optio eaque, sapiente, non dolorum nostrum
            tenetur nam officiis natus obcaecati velit. Doloremque inventore,
            perspiciatis tempora cumque tenetur fugiat reiciendis nisi quas
            accusamus eum animi placeat, molestiae illum ullam error atque neque
            amet numquam vel eos ipsam aperiam deserunt voluptas! Error voluptas
            accusamus molestiae dignissimos laborum quos voluptatibus ratione
            eveniet, quaerat repellat nam, sequi, nemo enim ab? Ipsum dolore
            voluptate magnam ullam optio, repellendus deserunt asperiores at,
            voluptatum cumque dolorum iusto odit, architecto maxime ratione?
            Incidunt recusandae doloremque, enim omnis in vitae asperiores
            ducimus nobis rerum eos sapiente qui totam quas dolores.
            Reprehenderit repellendus totam at delectus voluptate mollitia
            molestiae fugit nobis maiores sit vel ipsum praesentium optio
            incidunt recusandae earum eveniet, odio facilis ex, ipsa, dolorem
            eius? Molestias sit perferendis quidem dolorem sequi. Suscipit
            consequuntur, cum aliquam exercitationem dicta cupiditate animi et
            impedit facilis, quos quas repellendus odio provident error maxime
            expedita quia. Asperiores, repudiandae veritatis fugit dolores, odit
            magnam doloremque assumenda natus eum temporibus qui. Et explicabo
            possimus officiis, nihil velit fugiat officia blanditiis accusantium
            hic nam necessitatibus similique minima beatae! Reprehenderit
            dolorem vero vitae cupiditate consequatur atque ab eius eum, itaque,
            nam facere aut laudantium ipsam veniam. Sequi, architecto dolorem,
            alias mollitia sit magnam commodi iure repellendus exercitationem,
            quasi illo repudiandae!
          </p>
        </div>

        <div className="downloadApp">
          <div className="playmarket">
            <img src={playmarket} alt="google" />

            <div>
              <p>GET IT ON</p>
              <p className="name">Google Play</p>
            </div>
          </div>

          <div className="playmarket">
            <img src={apple} alt="google" />

            <div>
              <p>DOWNLOAD ON THE</p>
              <p className="name">App Store</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
