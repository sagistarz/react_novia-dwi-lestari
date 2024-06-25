import 'bootstrap/dist/css/bootstrap.min.css';
import styles from "../../assets/css/styles.module.css";

export default function Header() {
    return(
        <div>
            <div className="col-xl-12 text-center">
              <img src="https://brandlogos.net/wp-content/uploads/2021/09/bootstrap-logo.png" alt="Logo" width="auto" height="57px" />
            </div>
            <div className="font col-xl-12 text-center">
              <h1 className="font-weight-medium">Create Product</h1>
              <p className="font-weight-light color-primary">Below is an example form built entirely with Bootstrap’s form controls. Each required form group has a validation state that can be triggered by attempting to submit the form without completing it.</p>
            </div>
        </div>
    )
}