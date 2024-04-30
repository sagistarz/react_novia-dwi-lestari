import "../styles/RateCard.css";

function RateCardItem(props) {
  return (
    <div className="col-6 mt-3">
      <div class="card text-dark">
        <div class="card-body p-4">
          <h5 class="card-title">{props.judul}</h5>
          <p class="card-text">{props.deskripsi}</p>
        </div>
      </div>
    </div>
  );
}

export default RateCardItem;
