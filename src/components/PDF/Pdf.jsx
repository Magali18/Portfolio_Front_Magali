import resume from '../document/CvMagaliPereyra.pdf'
const PDF = () => {
  

  return (
    <div>
      <a href={resume} download='MagaliPereyra.pdf'>
        <button>Descargar_CV_PDF.</button>
        </a>
    </div>
  );
};
export default PDF;
