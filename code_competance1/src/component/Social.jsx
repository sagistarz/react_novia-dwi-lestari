import insight from "../assets/insight.png";
import gmv1 from "../assets/gmv-1.png";
import gmv2 from "../assets/gmv-2.png";
import account from "../assets/account.png";

function Social() {
  const items = [
    { src: account, alt: "account", title: "Account" },
    { src: insight, alt: "insight", title: "Insight" },
    { src: gmv1, alt: "gmv-1", title: "GMV 1" },
    { src: gmv2, alt: "gmv-2", title: "GMV 2" },
  ];

  return (
    <div className="section pt-5 pb-5">
      <div className="container">
        <div className="row text-center">
          <h1 className="mb-5" >
            <i class="bi bi-flower3"></i>Social Media<i class="bi bi-flower3"></i>
          </h1>
          {items.map((item, index) => (
            <div key={index} className={`col-${index === 0 ? '3' : '3'}`}>
              <h3><i>{item.title}</i></h3>
              <img src={item.src} alt={item.alt} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Social;
