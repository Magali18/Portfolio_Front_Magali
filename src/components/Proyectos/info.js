import PI  from '../../image/Screenshot_14.png'
import PF from '../../image/Screenshot_12.png' 
import { BiLogoPostgresql,BiLogoMongodb,BiLogoNodejs,BiLogoHtml5,BiLogoJavascript,BiLogoFirebase,BiLogoCss3,BiLogoReact,
BiLogoRedux,BiCloudRain,BiLogoTailwindCss} from "react-icons/bi";
import { SiVite,SiExpress,SiMercadopago } from "react-icons/si";

const info = [{
    description:'SPA bootcamp Henry',
    image:PI,
   

    deploy:null,
    demo:'https://www.youtube.com/watch?v=dzkmgVknamE',
    tech:[<BiLogoPostgresql/>,<BiLogoNodejs/>,<BiLogoHtml5/>,<BiLogoJavascript/>,<BiLogoCss3/>,<BiLogoReact />,<BiLogoRedux/>,<SiExpress/>]
},{
    description: 'Proyecto grupal, final bootcamp Henry',
    image: PF,


    demo:'https://www.youtube.com/watch?v=NhQ30hiDNr0',
    deploy:'https://skillhub-production.netlify.app/',
    tech:[<BiLogoMongodb/>,<BiLogoNodejs/>,<BiLogoHtml5/>,<BiLogoJavascript/>,<BiLogoFirebase/>,<BiLogoReact />,<BiLogoRedux/>,<SiVite/>,<SiExpress/>,<BiCloudRain/>,<BiLogoTailwindCss/>,<SiMercadopago/>]
}];
export default info