import { useAtom } from "jotai";
import { useState } from "react";
import { playAtom } from "../store/Store";

export const Control = () => {
    const tiempo_actual = '2:50'
    const tiempo_total = '4:23'

    const [play, setPlay] = useAtom(playAtom);

    const [like, setLike] = useState(false);

    const [repeat, setRepeat] = useState(false);

    const [random, setRandom] = useState(false);

  return (
    <div className=""
         style={{
            'boxSizing': 'border-box',
            position: 'absolute',
            width: '100%',
            height: '4.5rem',
            left: '0px',
            top: 'calc(100% - 4.5rem)',
            background: '#181818',
            'borderTop': '.0313rem solid #5E5E5E',
          }}
    >

        <div style={{
            position: 'absolute',
            width: '19.3125rem',
            height: '1rem',
            left: 'calc(55% - 19.3125rem/2 + .0313rem)',
            top: 'calc(80% - 1px + 1px)',
            
            }}>
                {/* Corazon de like */}
                    <div style={{
                        position: 'absolute',
                        width: '1rem',
                        height: '1rem',
                        left: '-27px',
                        top: '-35px',
                        }}
                        onClick={() => setLike(!like)} 
                        >
                        {like ? (
                            <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path opacity="0.7" d="M6.85297 2.04065C5.28499 0.870821 3.09453 1.03618 1.71993 2.42813V2.42813C0.212264 3.95484 0.212264 6.40999 1.71993 7.93669L2.41771 8.64329L2.41181 8.64929L7.52959 13.8317V13.8317C7.53281 13.8284 7.53812 13.8284 7.54134 13.8317V13.8317L12.6591 8.64929L12.6532 8.64329L13.351 7.93669C14.8587 6.40999 14.8587 3.95484 13.351 2.42813V2.42813C11.9764 1.03618 9.78594 0.870821 8.21796 2.04065L7.53547 2.54984L6.85297 2.04065Z" stroke="white" strokeLinejoin="round"/>
                        </svg>
                        ) : (
                            <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path opacity="0.7" d="M6.85297 2.04065C5.28499 0.870821 3.09453 1.03618 1.71993 2.42813C0.212264 3.95484 0.212264 6.40999 1.71993 7.93669L2.41771 8.64329L2.41181 8.64929L7.52959 13.8317C7.53281 13.8284 7.53812 13.8284 7.54134 13.8317L12.6591 8.64929L12.6532 8.64329L13.351 7.93669C14.8587 6.40999 14.8587 3.95484 13.351 2.42813C11.9764 1.03618 9.78594 0.870821 8.21796 2.04065L7.53547 2.54984L6.85297 2.04065Z" fill="#1ED760" stroke="#1ED760" strokeLinejoin="round"/>
                            </svg>
                        )}
                        
                    </div>
                {/* fin corazon like */}


                {/* Boton random */}
                    <div style={{
                        position: 'absolute',
                        left: '1.875rem',
                        top: '-2.0625rem',
                    }}
                        onClick={() => setRandom(!random)}
                    >
                        {random ? (
                            <div style={{
                                position: 'absolute',
                                top: '1px',
                            }}>
                                <svg width="16" height="12" viewBox="0 0 16 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M3.89519 4.11159L4.65259 3.24599C3.46239 1.83939 1.73119 1.082 0 1.082V2.16399C1.4066 2.16399 2.81319 2.81319 3.78699 3.89519L3.89519 4.11159ZM12.0102 9.19697C10.7118 9.19697 9.52157 8.65597 8.54778 7.79038L7.89858 8.65597C8.98057 9.73797 10.4954 10.279 12.0102 10.279V11.902L15.7972 9.73797L12.0102 7.57398V9.19697ZM12.0102 2.70499V4.32799L15.7972 2.16399L12.0102 0V1.623C10.279 1.623 8.54777 2.38039 7.46578 3.78699L3.78699 8.00678C2.81319 9.08877 1.4066 9.73797 0 9.73797V10.82C1.73119 10.82 3.46239 10.0626 4.54439 8.65597L8.22318 4.43619C9.19697 3.35419 10.6036 2.70499 12.0102 2.70499Z" fill="#1ED760"/>
                                </svg>
                                
                                <div style={{
                                    position: 'absolute',
                                    top: '17px',
                                    left: '6px',

                                }}>
                                    <svg width="4" height="4" viewBox="0 0 4 4" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M3.5 2C3.5 2.82843 2.82843 3.5 2 3.5C1.17157 3.5 0.5 2.82843 0.5 2C0.5 1.17157 1.17157 0.5 2 0.5C2.82843 0.5 3.5 1.17157 3.5 2Z" fill="#1ED760"/>
                                    </svg>
                                
                                </div>
                            </div>
                            
                        ) : (
                            <svg width="16" height="13" viewBox="0 0 16 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M3.89519 5.01344L4.65259 4.14785C3.46239 2.74125 1.73119 1.98385 0 1.98385V3.06585C1.4066 3.06585 2.81319 3.71505 3.78699 4.79704L3.89519 5.01344ZM12.0102 10.0988C10.7118 10.0988 9.52157 9.55783 8.54777 8.69223L7.89858 9.55783C8.98057 10.6398 10.4954 11.1808 12.0102 11.1808V12.8038L15.7972 10.6398L12.0102 8.47583V10.0988ZM12.0102 3.60685V5.22984L15.7972 3.06585L12.0102 0.901855V2.52485C10.279 2.52485 8.54777 3.28225 7.46578 4.68884L3.78699 8.90863C2.81319 9.99063 1.4066 10.6398 0 10.6398V11.7218C1.73119 11.7218 3.46239 10.9644 4.54439 9.55783L8.22318 5.33804C9.19697 4.25605 10.6036 3.60685 12.0102 3.60685Z" fill="#BABABA"/>
                            </svg>
                        )}
                    </div>
                {/* Fin boton random */}
                

                {/* Boton anterior */}
                <div style={{
                    position: 'absolute',
                    transform: 'rotate(-180deg)',
                    width: '1.5rem',
                    height: '1.5rem',
                    left: '3.9375rem',
                    top: '-2.75rem',
                    
                }}>
                    <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M14 14V1H12V14H14Z" fill="#BABABA" stroke="#BABABA"/>
                        <path d="M1 1L11 7V8L1 14V1Z" fill="#BABABA" stroke="#BABABA"/>
                    </svg>

                </div>
                {/* fin boton anterior */}


                {/* boton de play */}
                <div style={{
                        position: 'absolute',
                        width: '1.5rem',
                        height: '1.5rem',
                        left: '6.875rem',
                        top: '-2.8125rem',
                        
                    }}
                        onClick={() => setPlay(!play)}
                    >
                        {play ?(
                            <svg width="34" height="34" viewBox="0 0 34 34" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <circle cx="17" cy="17" r="17" fill="white"/>
                            <g filter="url(#filter0_d_2_215)">
                            <path d="M13 10V25" stroke="black" strokeWidth="4" strokeLinejoin="round"/>
                            </g>
                            <g filter="url(#filter1_d_2_215)">
                            <path d="M21 10V25" stroke="black" strokeWidth="4" strokeLinejoin="round"/>
                            </g>
                            <defs>
                            <filter id="filter0_d_2_215" x="7" y="10" width="12" height="23" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                            <feFlood floodOpacity="0" result="BackgroundImageFix"/>
                            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                            <feOffset dy="4"/>
                            <feGaussianBlur stdDeviation="2"/>
                            <feComposite in2="hardAlpha" operator="out"/>
                            <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
                            <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_2_215"/>
                            <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_2_215" result="shape"/>
                            </filter>
                            <filter id="filter1_d_2_215" x="15" y="10" width="12" height="23" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                            <feFlood floodOpacity="0" result="BackgroundImageFix"/>
                            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                            <feOffset dy="4"/>
                            <feGaussianBlur stdDeviation="2"/>
                            <feComposite in2="hardAlpha" operator="out"/>
                            <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
                            <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_2_215"/>
                            <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_2_215" result="shape"/>
                            </filter>
                            </defs>
                            </svg>
                            
                        ) : (
                            <svg width="34" height="34" viewBox="0 0 34 34" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <circle cx="17" cy="17" r="17" fill="white"/>
                            <path d="M24.5 17L12.5 9V25L24.5 17Z" fill="black" stroke="black"/>
                            </svg>
                        )}
                        

                    </div>
                {/* fin boton play */}


                {/* Boton siguiente */}
                <div style={{
                        position: 'absolute',
                        width: '1.5rem',
                        height: '1.5rem',
                        left: 'calc(6.875rem + 3.5625rem)',
                        top: '-2.1875rem',
                    }}>
                        <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M14 14V1H12V14H14Z" fill="#BABABA" stroke="#BABABA"/>
                            <path d="M1 1L11 7V8L1 14V1Z" fill="#BABABA" stroke="#BABABA"/>
                        </svg>

                    </div>
                {/* fin boton siguiente */}


                {/* Boton repeat */}
                <div style={{
                        position: 'absolute',
                        width: '1.5rem',
                        height: '1.5rem',
                        left: '12.5rem',
                        top: '-2.6875rem',
                    }}
                        onClick={() => setRepeat(!repeat)}
                    
                    >   
                        {repeat ? (
                            <div>
                                <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M12.869 12.705H17.738V14.328L21.525 12.164L17.738 10V11.623H12.869C10.164 11.623 8 13.787 8 16.492C8 17.1412 8.1082 17.7904 8.4328 18.4396L9.4066 17.8986C9.1902 17.4658 9.082 17.033 9.082 16.492C9.082 14.4362 10.8132 12.705 12.869 12.705ZM22.7152 14.5444L21.7414 15.0854C21.9578 15.5182 22.066 15.951 22.066 16.492C22.066 18.5478 20.3348 20.279 18.279 20.279H13.41V18.656L9.623 20.82L13.41 22.984V21.361H18.279C20.984 21.361 23.148 19.197 23.148 16.492C23.148 15.8428 23.0398 15.1936 22.7152 14.5444Z" fill="#1ED760"/>
                                </svg>

                                <div style={{
                                    position: 'absolute',
                                    top: '1.75rem',
                                    left: '.875rem',

                                }}>
                                    <svg width="4" height="4" viewBox="0 0 4 4" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M3.5 2C3.5 2.82843 2.82843 3.5 2 3.5C1.17157 3.5 0.5 2.82843 0.5 2C0.5 1.17157 1.17157 0.5 2 0.5C2.82843 0.5 3.5 1.17157 3.5 2Z" fill="#1ED760"/>
                                    </svg>
                                </div>
                            </div>
                        ) : (
                            <div style={{
                                position: 'absolute',
                                top: '10px',
                                left: '8px',
                            }}>
                                <svg width="16" height="13" viewBox="0 0 16 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M4.86899 2.70499H9.73797V4.32799L13.525 2.16399L9.73797 0V1.623H4.86899C2.16399 1.623 0 3.78699 0 6.49198C0 7.14118 0.1082 7.79038 0.432799 8.43958L1.4066 7.89858C1.1902 7.46578 1.082 7.03298 1.082 6.49198C1.082 4.43619 2.81319 2.70499 4.86899 2.70499ZM14.7152 4.54439L13.7414 5.08539C13.9578 5.51818 14.066 5.95098 14.066 6.49198C14.066 8.54778 12.3348 10.279 10.279 10.279H5.40998V8.65598L1.623 10.82L5.40998 12.984V11.361H10.279C12.984 11.361 15.148 9.19697 15.148 6.49198C15.148 5.84278 15.0398 5.19359 14.7152 4.54439Z" fill="#BABABA"/>
                                </svg>
                            </div>
                        )}
                        
                        

                    </div>
                {/* fin boton repeat */}
                    

                {/* tiempo actual del tema */}
                <div style={{
                        position: 'absolute',
                        left: 'calc(4% - 2.5rem)',
                        top: 'calc(0% - .5rem)',
                        'fontFamily': 'Inter',
                        'fontStyle': 'normal',
                        'fontWeight': 400,
                        'fontSize': '.8125rem',
                        //'lineHeight': '1rem',
                        color: '#5E5E5E'
                    }}>
                    {tiempo_actual}
                </div>
                

                {/* base de barra de progreso */}
                <div
                    style={{
                        position: 'absolute',
                        left: 'calc(18% - 2.5rem)',
                        width: '14.625rem',
                        height: '.25rem',
                        background: '#5E5E5E',
                        'borderRadius': '.1875rem'
                    }}
                >
                </div>
                
                {/* tiempo total de la canción */}
                <div style={{
                        position: 'absolute',
                        left: 'calc(100% - 2.5rem)',
                        top: 'calc(0% - .5rem)',
                        
                        'fontFamily': 'Inter',
                        'fontStyle': 'normal',
                        'fontWeight': 400,
                        'fontSize': '.8125rem',
                        'lineHeight': '1rem',
                        
                        color: '#5E5E5E'
                    }}>
                    {tiempo_total}
                </div>

                {/* progreso de la canción */}
                <div style={{
                    position: 'absolute',
                    left: 'calc(18% - 2.5rem)',
                    width: '12.625rem',
                    height: '.25rem',
                    background: '#ffffff',
                    'borderRadius': '.1875rem'
                }}>
                    {/* ruedita al final de la barra de progreso */}
                    
                    <div style={{
                        position: 'absolute',
                        width: '.625rem',
                        height: '.625rem',
                        background: '#ffffff',
                        'borderRadius': '50%',
                        left: 'calc(100% - .625rem)',
                        top: 'calc(0% - .1875rem)'
                    }}>

                    </div>
                </div>
                {/* fin progreso de la canción */}
            </div>
    </div>
  )
}
