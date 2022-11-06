import { useAtom } from "jotai";
import { useEffect, useState } from "react";
import { currentAtom, playAtom } from "../store/Store";


const audio = [
  new Audio("../music/smells.mp3"),
  new Audio("../music/come.mp3"),
]

export const ListaDeCanciones = () => {


  const canciones = [
    {
      nombre: "Smells Like Teen Spirit",
      portada: "../img/nevermind.png",
      duracion: "4:23",
      artista: "Nirvana",
      url: "../music/smells.mp3",
    },
    {
      nombre: "Heart-Shaped Box",
      portada: "../img/inutero.png",
      duracion: "4:41",
      artista: "Nirvana",
      url: "../music/heart.mp3",
    },
    {
      nombre: "Come As You Are",
      portada: "../img/nevermind.png",
      duracion: "5:26",
      artista: "Nirvana",
      url: "../music/come.mp3",
    },
    {
      nombre: "The Man Who Sol World ",
      portada: "../img/unplugged.png",
      duracion: "3:23",
      artista: "Nirvana",
      url: "../music/The-man.mp3"
    },
    {
      nombre: "Heart-Shaped Box",
      portada: "../img/inutero.png",
      duracion: "4:41",
      artista: "Nirvana",
      url: "../music/heart.mp3",
    },
    {
      nombre: "Come As You Are",
      portada: "../img/nevermind.png",
      duracion: "5:26",
      artista: "Nirvana",
      url: "../music/come.mp3",
    },
    {
      nombre: "The Man Who Sol World ",
      portada: "../img/unplugged.png",
      duracion: "3:23",
      artista: "Nirvana",
      url: "../music/The-man.mp3"
    },
    {
      nombre: "Heart-Shaped Box",
      portada: "../img/inutero.png",
      duracion: "4:41",
      artista: "Nirvana",
      url: "../music/heart.mp3",
    },
    {
      nombre: "Come As You Are",
      portada: "../img/nevermind.png",
      duracion: "5:26",
      artista: "Nirvana",
      url: "../music/come.mp3",
    },
    {
      nombre: "The Man Who Sol World ",
      portada: "../img/unplugged.png",
      duracion: "3:23",
      artista: "Nirvana",
      url: "../music/The-man.mp3"
    },
  ];

  const [current, setCurrent] = useAtom(currentAtom);

  const [play, setPlay] = useAtom(playAtom);

  const handlePlay = (index) => {
    
    if (current === index) {
      if (play) {
        audio[index].pause();
        setPlay(false);
      } else {
        audio[index].play();
        setPlay(true);
      }
    } else {
      audio[current].pause();
      audio[current].currentTime = 0;
      audio[index].play();
      setCurrent(index);
      setPlay(true);
    }
  }

  useEffect(() => {
    if (play) {
      audio[current].play();
    } else {
      audio[current].pause();
    }
  }, [play]);

  return (
    <div
      style={{
        position: "absolute",
        width: "18.125rem",
        height: "20.5rem",
        left: "2.0625rem",
        top: "21.875rem",
        color: "white",
      }}
    >
      {canciones.map((cancion, i) => {
        return (
          <div onClick={() => handlePlay(i)}>
            <tr style={{
              display: 'flex',
              'marginTop': '17px',
            }}>
              <td
                style={{
                  width: "10%",
                  "fontFamily": "Abhaya Libre Medium",
                  "fontStyle": "normal",
                  "fontWeight": 4,
                  "fontSize": "1rem",
                  color: "#B3B3B3",
                }}
              >
                {
                  ( current === i && play )
                    ? <>
                        <svg id="loading-bar" xmlns="http://www.w3.org/2000/svg" width="16" height="20" viewBox="0 0 36 22">
                          <g>
                            <rect id="loading-bar-left" width="5" height="30"/>
                            <rect id="loading-bar-middle" width="5" height="30" x="10"/>
                            <rect id="loading-bar-right" width="5" height="30" x="20"/>
                          </g>
                        </svg>
                      </>
                    : <> {i+1} </>
                }
              </td>

              <td
                style={{
                  position: "relative",
                  width: "23%",
                  top: "-0.5rem",
                }}
              >
                <img src={cancion.portada} width={40} height={40} alt="play" />
              </td>

              <td
                style={{
                  position: "relative",
                  "fontFamily": "Abhaya Libre Medium",
                  "fontStyle": "normal",
                  "fontWeight": 4,
                  "fontSize": "1rem",
                  color: (current === i && play) ? "#1ed660" : "white",
                  width: "67%",
                }}
                className="pr-2"
              >
                {cancion.nombre}
              </td>

              <td
                style={{
                  position: "relative",
                  "fontFamily": "Inter",
                  "fontStyle": "normal",
                  "fontWeight": 400,
                  "fontSize": ".8125rem",
                  "lineHeight": "1rem",
                  color: "#5E5E5E",
                }}
                className="pl-3"
              >
                {cancion.duracion}
              </td>
            </tr>
          </div>
        );
        
      })}
      
    </div>
  );
};
