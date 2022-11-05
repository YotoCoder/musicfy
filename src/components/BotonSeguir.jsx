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
            position: 'absolute',
            'boxSizing': 'border-box',

            width: '7.6875rem',
            height: '2rem',
            left: '-30px',
            
            background: '#131313',
            border: '1px solid #616161',
            'borderRadius': '.1875rem',
            'fontFamily': 'Abhaya Libre Medium',
            'fontStyle': 'normal',
            'fontWeight': 500,
            'fontWeight': '13px',
            'lineHeight': '15px',
            'letterSpacing': '0.055em',

            color: '#E2E2E2',
            value: 'xd',
        }} 

          onClick={() => setSeguir(!seguir)}
        
        > 
            {seguir ? 'SIGUIENDO' : 'SEGUIR'}
            
        </button>
    </div>
  )
}
