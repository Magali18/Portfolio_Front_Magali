
import Cards from '../../../src/components/Cards/Cards'
import  Pdf from '../../components/PDF/Pdf'
import './Educacion.css'
const Educacion =()=>{
    return(
        <div className='styleEducacion'>
            <div data-aos="fade-up"
     data-aos-anchor-placement="top-bottom">
         <h1 className='h1Titulo' >Mis Proyectos</h1>
         

            </div>
        
         <Pdf/>
   
         <Cards/>
        
        </div>
    )
};
export default Educacion;
