import ServiceItem from "./RateCardItem";

function RateCard() {
  return (
    <div className="background pt-5 pb-5" style={{ backgroundColor: '#fcecec' }}>
      <div className="container">
        <h1>Rate Card April 2024</h1>
        <div className="row">
          <ServiceItem judul="1x VT" deskripsi="Rp 150.000" />
          <ServiceItem judul="1x VT + Kerkun" deskripsi="Rp 160.000" />
          <p className="text-center mt-4">
            <i>Bundling get special price!</i>
          </p>
          {/* <ServiceItem judul="tiga" deskripsi="ini tiga" /> */}
          {/* <ServiceItem judul="empat" deskripsi="ini empat" /> */}
        </div>
      </div>
    </div>
  );
}

export default RateCard;
