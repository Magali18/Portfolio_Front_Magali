import resume from '../document/CvMagaliPereyra.pdf'
import './pdf.css'
import {BiSolidFilePdf} from "react-icons/bi";

const PDF = () => {
  

  return (
    <div className='loli'>
      <BiSolidFilePdf/>
      <a href={resume} download='MagaliPereyra.pdf'>
        <button>Descargar.pdf</button>
        </a>
    </div>
  );
};
export default PDF;
