
import {
  Card,
  CardHeader,
  CardBody,
  Typography,
} from "@material-tailwind/react";
import React from "react";

const Card1= ({info})=> {
  const {title,description,image,tech} = info
return (
  <React.Fragment>
        
  <Card className="flex justfiy-center w-full max-w-[26rem] shadow-lg hover:shadow-lg hover:shadow-gray-400 transition-all duration-300 ">
  <div className="flex flex-col justify-center">
    <CardHeader floated={false} color="blue-gray">
      <img src={image} alt="job-image" className="w-96 h-64" />
      <div className="to-bg-black-10 absolute inset-0 h-full w-full bg-gradient-to-tr from-transparent via-transparent to-black/60 " />
    </CardHeader>
    <CardBody>
      <Typography variant="h6" color="gray" className="mb-4 uppercase">
<h2>{title}</h2>   
   </Typography>
      <Typography variant="h4" color="blue-gray" className="mb-2">
    {description}
      </Typography>
      <div className="flex items-center gap-4 my-4">
{ tech  }      </div>
      <div className="flex items-center justify-between mt-6">
        <div className="mb-3 flex items-center gap-1">
         
          
         
        </div>
        <div className="mb-3 flex items-center gap-1">
          
         
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


};
export default Card1;


