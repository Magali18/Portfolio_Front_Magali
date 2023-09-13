import {
  PDFDownloadLink,
  Document,
  Page,
  PDFViewer,
} from "@react-pdf/renderer";
import CVPDF from "../document/Curriculum vitae - Magali Pereyra.pdf";

const pdf = () => {
  return (
  
        <div>
          <PDFViewer>
            <CVPDF />
          </PDFViewer>
        </div>

  );
};
console.log(pdf())
const PDF = () => {
  

  return (
    <div>
      <PDFDownloadLink document={CVPDF} fileName="Cv_Develop_MagaliPereyra.pdf">
        <button>Descargar_CV_PDF.</button>
      </PDFDownloadLink>
    </div>
  );
};
export default PDF;
