import {AiFillYoutube} from  "react-icons/ai";
import {
  Card,
  CardHeader,
  CardBody,
  Typography,
  Button,
} from "@material-tailwind/react";
import React from "react";

const Card1= ({info})=> {
return (
  <React.Fragment>
        
  <Card className="flex justfiy-center w-full max-w-[26rem] shadow-lg hover:shadow-lg hover:shadow-gray-400 transition-all duration-300 ">
  <div className="flex flex-col justify-center">
    <CardHeader floated={false} color="blue-gray">
      <img src={''} alt="job-image" className="w-96 h-64" />
      <div className="to-bg-black-10 absolute inset-0 h-full w-full bg-gradient-to-tr from-transparent via-transparent to-black/60 " />
    </CardHeader>
    <CardBody>
      <Typography variant="h6" color="gray" className="mb-4 uppercase">
<h2>Hola</h2>      </Typography>
      <Typography variant="h4" color="blue-gray" className="mb-2">
    HOLA
      </Typography>
      <div className="flex items-center gap-4 my-4">
     COMO ESTAS
      </div>
      <div className="flex items-center justify-between mt-6">
        <div className="mb-3 flex items-center gap-1">
          <Typography color="gray" className="text-center font-normal">
            <img src={''} alt="location" className="w-8" />
          </Typography>
          <Typography color="gray" className="text-center font-semibold">
            Ubicación:
          </Typography>
          <Typography color="gray" className="text-center font-normal">
          AQUI VIVO
          </Typography>
        </div>
        <div className="mb-3 flex items-center gap-1">
          <Typography color="gray" className="text-center font-normal">
            <img src={''} alt="moneyBag" className="w-9" />
          </Typography>
          <Typography color="gray" className="text-center font-semibold">
            Precio:
          </Typography>
          <Typography color="gray" className="text-center ">
         
          </Typography>
        
        </div>
        <div></div>
      </div>
    </CardBody>
    <a
      href='TODO BIEN'
    >
    
    </a>
  </div>
</Card>
</React.Fragment>
)




  /*
  const {title,description,image, tech,deploy,demo} = info;

  const onClickDemo = () => {
    window.open(demo, '_blank');
  }
  const onClickDeploy =()=>{
    window.open(deploy, '_blank')
  }

  return (
    <div className='bodyCard' > 
   <div className='card-single'>
 <h1> {title}</h1> 
    <img src={image} alt="imagen" />


  
   <p>{description}</p>
   <h6>Tecnologias aplicadas:</h6>

  <h1 className='iconTech'>  {tech} </h1>

   <div >
<button onClick={onClickDemo}>Ver demo <AiFillYoutube/></button>
 <button onClick={onClickDeploy}>Ver deploy</button> 
  </div>
   </div>
   </div>
  );*/
}

export default Card1;


