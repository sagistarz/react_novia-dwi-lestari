import Button from "./Button";
import avatar from "../assets/ava.png";
import { Navbar } from "react-bootstrap";
import Footer from "./Footer";

function AboutMe() {
  return (
    <div>
      <Navbar />
      <div className="background pt-5 pb-5" style={{ backgroundColor: "#fcecec" }}>
        <div className="container">
          <div className="row text-center align-items-center">
            <div className="col-6">
              <img src={avatar} alt="logo" style={{ width: "300px" }} />
              <h1>
                <i>Novia Dwi Lestari</i>
              </h1>
            </div>
            <div className="col-6">
              <h1>About Me</h1>
              <p>
                Haiii! nama ku Novia Dwi Lestari. Aku merupakan seorang Beauty Creator yang membuat video terkait review produk skincare dan make up.
                <br /> Aku bekerja sebagai beauty creator sejak Juli 2023 - sekarang. Aku lebih aktif pada platform{" "}
                <span>
                  <i>
                    <b>tiktok</b>
                  </i>
                </span>
                , sehingga aku harap kita bisa bekerja sama pada platform tersebut!😊
              </p>
            </div>
          </div>
        </div>
      </div>
      <Footer/>
    </div>
  );
}

export default AboutMe;
