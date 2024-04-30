import Button from "./Button";

function SocialMedia() {
  return (
    <div className="section">
      <div className="container text-dark text-center">
        <div className="row align-items-center">
          <h1 className="mb-4">Social Media Account</h1>
          <div className="col-3">
            {/* <h2>Tiktok </h2> */}
            <img className="avatar" src="https://i.ibb.co/9Y0ByM6/Whats-App-Image-2024-04-16-at-02-04-21.jpg" alt="tiktok" />
            <p>
              <Button text="find me" warna="warning" link="https://tiktok.com/@nopyay" />
            </p>
          </div>
          <div className="col-3">
            {/* <h2>Instagram </h2> */}
            <img className="avatar" src="https://i.ibb.co/Fnv8bGj/Whats-App-Image-2024-04-16-at-02-11-04.jpg" alt="instagram" />
            <p>
              <Button text="find me" warna="warning" link="https://instagram.com/nopyay" />
            </p>
          </div>
          <div className="col-6">
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat maiores eligendi voluptates esse veniam velit, voluptatum nisi aut quisquam voluptas. Placeat possimus vel, earum neque eos illum aut ex quos</p>
            <Button text="download cv" warna="warning" link="https://getbootstrap.com/docs/5.0/components/buttons/" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default SocialMedia;
