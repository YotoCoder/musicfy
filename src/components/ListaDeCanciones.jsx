export const ListaDeCanciones = () => {
  const canciones = [
    {
      nombre: "Smells Like Teen Spirit",
      portada: "../img/nevermind.png",
      duracion: "4:23",
      artista: "Nirvana",
    },
    {
      nombre: "Heart-Shaped Box",
      portada: "../img/inutero.png",
      duracion: "4:41",
      artista: "Nirvana",
    },
    {
      nombre: "Come As You Are",
      portada: "../img/nevermind.png",
      duracion: "5:26",
      artista: "Nirvana",
    },
    {
      nombre: "The Man Who Sol World ",
      portada: "../img/unplugged.png",
      duracion: "3:23",
      artista: "Nirvana",
    },
    {
      nombre: "Heart-Shaped Box",
      portada: "../img/inutero.png",
      duracion: "4:41",
      artista: "Nirvana",
    },
    {
      nombre: "Come As You Are",
      portada: "../img/nevermind.png",
      duracion: "5:26",
      artista: "Nirvana",
    },
    {
      nombre: "The Man Who Sol World ",
      portada: "../img/unplugged.png",
      duracion: "3:23",
      artista: "Nirvana",
    },
    {
      nombre: "Heart-Shaped Box",
      portada: "../img/inutero.png",
      duracion: "4:41",
      artista: "Nirvana",
    },
    {
      nombre: "Come As You Are",
      portada: "../img/nevermind.png",
      duracion: "5:26",
      artista: "Nirvana",
    },
    {
      nombre: "The Man Who Sol World ",
      portada: "../img/unplugged.png",
      duracion: "3:23",
      artista: "Nirvana",
    },
  ];

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
          <tr style={{
            display: 'flex',
            'margin-top': '17px',
          }}>
            <td
              style={{
                width: "10%",
                "font-family": "Abhaya Libre Medium",
                "font-style": "normal",
                "font-weight": 4,
                "font-size": "1rem",
                color: "#B3B3B3",
              }}
            >
              {i + 1}
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
                "font-family": "Abhaya Libre Medium",
                "font-style": "normal",
                "font-weight": 4,
                "font-size": "1rem",
                color: "#FFFFFF",
                width: "67%",
              }}
              className="pr-2"
            >
              {cancion.nombre}
            </td>

            <td
              style={{
                position: "relative",
                "font-family": "Inter",
                "font-style": "normal",
                "font-weight": 400,
                "font-size": ".8125rem",
                "line-height": "1rem",
                color: "#5E5E5E",
              }}
              className="pl-3"
            >
              {cancion.duracion}
            </td>
          </tr>
        );
      })}
    </div>
  );
};
