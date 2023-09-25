import { AiFillYoutube } from "react-icons/ai";
import "./Card.css";

function Card({ info }) {
  const { title, description, image, tech, deploy, demo } = info;

  const onClickDemo = () => {
    window.open(demo, "_blank");
  };
  const onClickDeploy = () => {
    window.open(deploy, "_blank");
  };

  return (
    <div className="bodyCard">
      <div className="card-single">
        <h1> {title}</h1>
        <img src={image} alt="imagen" />

        <p>{description}</p>
        <h6>Tecnologias aplicadas:</h6>

        <h1 className="iconTech"> {tech} </h1>

        <div>
          <button onClick={onClickDemo}>
            Ver demo <AiFillYoutube />
          </button>
          <button onClick={onClickDeploy}>Ver deploy</button>
        </div>
      </div>
    </div>
  );
}

export default Card;
