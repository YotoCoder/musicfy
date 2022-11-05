import { useState } from "react";

const BotonPlayGrande = () => {

  const [play, setPlay] = useState(false);

  return (
    <div style={{
        position: 'absolute',

        top: '43%',
        left: '5%',

        color: 'white',
    }}
        onClick={() => setPlay(!play)}
    >
      {play ? (
        <svg width="49" height="50" viewBox="0 0 49 50" fill="none" xmlns="http://www.w3.org/2000/svg">
            <ellipse cx="24.5" cy="25" rx="24.5" ry="25" fill="#1ED760"/>
            <g filter="url(#filter0_d_2_178)">
            <path d="M19 15V35" stroke="black" stroke-width="5" stroke-linejoin="round"/>
            </g>
            <g filter="url(#filter1_d_2_178)">
            <path d="M30 15V35" stroke="black" stroke-width="5" stroke-linejoin="round"/>
            </g>
            <defs>
            <filter id="filter0_d_2_178" x="12.5" y="15" width="13" height="28" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
            <feFlood flood-opacity="0" result="BackgroundImageFix"/>
            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
            <feOffset dy="4"/>
            <feGaussianBlur stdDeviation="2"/>
            <feComposite in2="hardAlpha" operator="out"/>
            <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
            <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_2_178"/>
            <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_2_178" result="shape"/>
            </filter>
            <filter id="filter1_d_2_178" x="23.5" y="15" width="13" height="28" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
            <feFlood flood-opacity="0" result="BackgroundImageFix"/>
            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
            <feOffset dy="4"/>
            <feGaussianBlur stdDeviation="2"/>
            <feComposite in2="hardAlpha" operator="out"/>
            <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
            <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_2_178"/>
            <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_2_178" result="shape"/>
            </filter>
            </defs>
        </svg>
        ) : (
          <svg width="49" height="50" viewBox="0 0 49 50" fill="none" xmlns="http://www.w3.org/2000/svg">
            <ellipse cx="24.5" cy="25" rx="24.5" ry="25" fill="#1ED760"/>
            <path d="M36 24.5L18 13V36L36 24.5Z" fill="black" stroke="black"/>
          </svg>
        )}
    </div>
  )
}

export default BotonPlayGrande