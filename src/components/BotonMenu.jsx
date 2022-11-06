import { useState } from "react";
import { Menu } from "./Menu";

export const BotonMenu = () => {

  const [openMenu, setOpenMenu] = useState(false);

  return (
    <div 
        className=""
        style={{
            position: 'absolute',
            width: '1.4375rem',
            height: '.3125rem',
            left: '88%',
            top: '1.3125rem',
            cursor: 'pointer',
            
        }}
        onClick={() => setOpenMenu(!openMenu)}
    >
        <svg width="23" height="5" viewBox="0 0 23 5" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="2.5" cy="2.5" r="2.5" fill="#A5A5A5"/>
            <circle cx="11.5" cy="2.5" r="2.5" fill="#A5A5A5"/>
            <circle cx="20.5" cy="2.5" r="2.5" fill="#A5A5A5"/>
        </svg>
        <div>
            {openMenu ? <Menu /> : null}

        </div>
    </div>
  )
}
