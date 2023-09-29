import resume from '../document/Curriculum_Magali_Pereyra.pdf'
import './pdf.css'
import { TfiSave } from "react-icons/tfi";

const PDF = () => {
  

  return (
    <div className='loli'>
 

      <p>Podés DESCARGAR los detalles de mi experiencia laboral y educación, en formato PDF, haciendo click aquí :
      <a href={resume} download='MagaliPereyra.pdf' ><TfiSave/>

       
        </a>
        </p>
    </div>
  );
};
export default PDF;
