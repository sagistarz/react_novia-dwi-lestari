import "../styles/Button.css";

function Button(props) {
  const classButton = "btn btn-saya btn-" + props.warna;
  return (
    <a href={props.link} class={classButton}>
      {props.text}
    </a>
  );
}

export default Button;
