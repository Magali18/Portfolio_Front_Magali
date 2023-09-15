import resume from '../document/CvMagaliPereyra.pdf'
const PDF = () => {
  

  return (
    <div>
       <div>Podes activar la descarga automatica de mi cv haciendo click en este boton </div> 
      <a href={resume} download='MagaliPereyra.pdf'>
        <button>Descargar.pdf</button>
        </a>
    </div>
  );
};
export default PDF;
