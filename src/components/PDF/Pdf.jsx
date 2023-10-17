import React, { useState } from 'react';
import resume from '../document/Curriculum_Magali_Pereyra.pdf';
import './pdf.css';
import { TfiSave } from 'react-icons/tfi';

const PDF = () => {
  const [loading, setLoading] = useState(false);

  const handleDownloadClick = () => {
    setLoading(true);

    setTimeout(() => {
      setLoading(false);
    }, 2000); 


    const link = document.createElement('a');
    link.href = resume;
    link.download = 'MagaliPereyra.pdf';
    link.click();
  };

  return (
    <div className="loli">
      <p>
        Podés DESCARGAR los detalles de mi experiencia laboral y educación, en formato PDF, haciendo click aquí :
        <a href={resume} download="MagaliPereyra.pdf" onClick={handleDownloadClick}>
          <TfiSave />
        </a>
      </p>
      {loading && <div className="loader">Loading...</div>}
    </div>
  );
};

export default PDF;
