import './Educacion.css'
import info from '../../components/Proyectos/info'

const Educacion =()=>{

    return(
        <div className='styleEducacion'>
              {info.map((item, index) => (
      <div className='containEducation'>
          <div key={index}>
            <h2>{item.title}</h2>
            <p>{item.description}</p>
            <img className='imagenProyecto' src={item.image} alt={item.title} />
            <p>SKILLS TECH:</p>
            <div className='iconTechs'>
              {item.tech.map((techIcon, techIndex) => (
                <h3 key={techIndex}>{techIcon}</h3>
              ))}
            </div>
          </div>
          </div>
        ))}


    </div>
    )
};
export default Educacion;
