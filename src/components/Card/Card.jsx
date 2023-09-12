import React from "react";
import "./Card.css"


const Card = ({info}) => {
 const{title,description,image,demo} = info
console.log(info)

  return (
    <div className="card-single">
      <p>{title} </p>
      <p>{description}</p>
      <p>{image}</p>
      <p>{demo}</p>

      

    </div>
  );
};

export default Card;
