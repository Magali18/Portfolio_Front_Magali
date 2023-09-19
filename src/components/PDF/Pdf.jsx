import resume from '../document/CvMagaliPereyra.pdf'
import './pdf.css'
import { TfiSave } from "react-icons/tfi";

const PDF = () => {
  

  return (
    <div className='loli'>
 
 
      <p>Podes DESCARGAR los detalles de mi experiencia laboral y educacion en formato PDF haciendo click aqui :
      <a href={resume} download='MagaliPereyra.pdf' ><TfiSave/>

       
        </a>
        </p>
    </div>
  );
};
export default PDF;
