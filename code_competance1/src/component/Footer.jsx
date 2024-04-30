import logo1 from "../assets/3.png";

function Footer() {
  return (
    <div className="background pt-5 pb-5" style={{ backgroundColor: "#fcecec" }}>
      <div className="container">
        <div className="row text-center text-dark">
          <div className="col-4">
            <img src={logo1} alt="logo" style={{ width: "280px" }} />
          </div>
          <div className="col-4">
            <h3>Reach me</h3>
            <h6>
              <i class="bi bi-telephone-fill"></i> : (+62) 859-0000-1111
            </h6>
            <h6>
              <i class="bi bi-geo-alt-fill"></i> : 
              Jl. Cikini Raya No. 123 Jakarta Pusat 10330
            </h6>
          </div>
          <div className="col-4">
            <h4>Find me on social media!</h4>
            <div className="background" style={{ borderRadius: "50px", backgroundColor: "#e299aa" }}>
              <a target="_blank" href="https://www.instagram.com/nopyay" className="social-media">
                <i class="bi bi-instagram"></i>
              </a>
              <a target="_blank" href="https://www.tiktok.com/@nopyay" className="social-media">
                <i class="bi bi-tiktok"></i>
              </a>
              <a target="_blank" href="https://www.twitter.com/@nopyayy" className="social-media">
                <i class="bi bi-twitter"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
