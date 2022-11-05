import { useState } from "react";

export const BotonSeguir = () => {

  const [seguir, setSeguir] = useState(false);

  return (
    <div style={{
        position: 'absolute',

        top: '44%',
        left: '70%',

        color: 'white',
    }}>
        <button style={{
            'box-sizing': 'border-box',

            width: '5.6875rem',
            height: '2rem',
            left: '15.8125rem',
            top: '18.5rem',
            
            background: '#131313',
            border: '1px solid #616161',
            'border-radius': '.1875rem',
            'font-family': 'Abhaya Libre Medium',
            'font-style': 'normal',
            'font-weight': 500,
            'font-size': '13px',
            'line-height': '15px',
            'letter-spacing': '0.055em',

            color: '#E2E2E2'
        }} 

          onClick={() => setSeguir(!seguir)}
        
        > 
            {seguir ? 'SIGUIENDO' : 'SEGUIR'}
            
        </button>
    </div>
  )
}
