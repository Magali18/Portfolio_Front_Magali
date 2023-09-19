import './Card.css'




function Card ({info}) {
  const {title,description,image, tech} = info;


  return (
    <div className='bodyCard' > 
   <div className='card-single'>
 <h1> {title}</h1> 
    <img src={image} alt="imagen" />


  
   <p>{description}</p>
   <h6>Tecnologias aplicadas:</h6>

  <h1 className='iconTech'>  {tech} </h1>
   
   <button>Ver demo</button>
   <button>Ver deploy</button>
 
   </div>
   </div>
  );
}

export default Card;


