import { useState } from 'react';

import Card from 'react-bootstrap/Card';
import Collapse from 'react-bootstrap/Collapse';
import './Footer.css'
function Footer() {
  const [open, setOpen] = useState(false);

  return (
    <div className='ContainerFooter'>
      <button
        onClick={() => setOpen(!open)}
    
        aria-expanded={open}
      >
        Tecnologias utilizadas en esta pagina web
      </button>
      <div style={{ minHeight: '150px' }}>
        <Collapse in={open} dimension="width">
          <div id="example-collapse-text">
            <Card body style={{ width: '1085px' }}>
             
            </Card>
          </div>
        </Collapse>
      </div>
    </div>
  );
}

export default Footer;