import resume from '../document/CvMagaliPereyra.pdf'
import './pdf.css'
const PDF = () => {
  

  return (
    <div className='loli'>
       <div>Podes activar la descarga automatica de mi cv haciendo click en este boton </div> 
      <a href={resume} download='MagaliPereyra.pdf'>
        <button>Descargar.pdf</button>
        </a>
    </div>
  );
};
export default PDF;
