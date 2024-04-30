import React from 'react';
import "../styles/BrandLogo.css";

// daftar logo
const logos = [
  "acneno", "azarine", "biotalk", "bnb", "cleora", "dazzleme",
  "dearcalysta", "dorskin", "elsheskin", "glad2glow", "hanasui",
  "instaperfect", "jevarine", "makeover", "mokomoko", "moriganic",
  "narsis", "ohmyskin", "onix", "pinkflash", "pinkrabbit", "reveline",
  "saniye", "scarlett", "seamakeup", "skintific", "somethinc", "spexsymbol",
  "tavi", "torrential", "vio", "you"
];

function Collaboration() {
  return (
    <div className="background pt-5 pb-5" style={{ backgroundColor: '#fcecec' }}>
      <div className="container text-center">
        <div className="row d-flex justify-content-center">
          <h1 className="mb-5"><i className="bi bi-flower3"></i>Brand Collaboration<i className="bi bi-flower3"></i></h1>
          
          {/* pake map buat nampilin logo */}
          {logos.map((logo, index) => (
            <div key={index} className="col-1 me-2 mb-4 brand-logo">
              <img src={require(`../assets/logo/${logo}.png`)} alt="logo" />
            </div>
          ))}
          
        </div>
      </div>
    </div>
  );
}

export default Collaboration;
