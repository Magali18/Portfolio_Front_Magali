import resume from '../document/CvMagaliPereyra.pdf'
import './pdf.css'
import {BiSolidFilePdf} from "react-icons/bi";

const PDF = () => {
  

  return (
    <div className='loli'>
      <h1> <BiSolidFilePdf/></h1>
 
      <a href={resume} download='MagaliPereyra.pdf'>
        <button>Descargar</button>
        </a>
    </div>
  );
};
export default PDF;
