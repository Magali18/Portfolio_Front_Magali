import resume from '../document/CvMagaliPereyra.pdf'
import './pdf.css'
import {BiSave} from "react-icons/bi";

const PDF = () => {
  

  return (
    <div className='loli'>
 
 
      <p>Podes DESCARGAR los detalles de mi experiencia laboral y educacion en formato PDF haciendo click aqui :
      <a href={resume} download='MagaliPereyra.pdf' ><BiSave/>

       
        </a>
        </p>
    </div>
  );
};
export default PDF;
