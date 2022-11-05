export const Menu = () => {
  return (
    <div style={{
        position: 'absolute',
        left: '-90px',
        top: '20px',
        width: '120px',
        height: '96px',
        'zIndex': '1',

        background: 'linear-gradient(0deg, #282828, #282828)',
        'boxShadow': '0px 4px 4px 2px rgba(0, 0, 0, 0.25)'
    }}>
        <div style={{
            position: 'absolute',
            width: '95px',
            height: '92px',
            
            left: '12px',
            top: '4px',
            
            'fontFamily': 'Aleo',
            'fontStyle': 'normal',
            'fontWeight': 400,
            
            'lineHeight': '173.97%',
            /* or 24px */
            
            'letterSpacing': '0.04em',
            
            color: '#FDFDFD'
            
        }}>
            
            <div className="flex flex-row items-stretch">
                <p>Cuenta</p> 
                <p className="relative left-10 top-1">
                <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M5.58333 5.81482L11 1M11 1V4.33333M11 1H7.24999" stroke="#EAEAEA" strokeWidth="1.5"/>
                <path d="M5.16667 1.37037H1V11H11V6.55555" stroke="#EAEAEA" strokeWidth="1.5"/>
                </svg>
                </p>
            </div>
            Configuración

            <p style={{

                position: 'absolute',
                width: '112px',
                left: '-8px',
                top: '54px',

                border: '1px solid #3E3E3E'
            }}></p>
            
            <p style={{
                position: 'absolute',
                top: '60px',
            }}> Log out</p>
            
        </div>
    </div>
  )
}
