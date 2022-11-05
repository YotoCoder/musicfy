import { BotonMenu } from "../components/BotonMenu";
import BotonPlayGrande from "../components/BotonPlayGrande";
import { BotonSeguir } from "../components/BotonSeguir";
import { Control } from "../components/Control";
import { ListaDeCanciones } from "../components/ListaDeCanciones";
import { Portada } from "../components/Portada";
import { Titulo } from "../components/Titulo";

export const Reproductor = () => {
  return (
    <div
      style={{
        width: '100%',
        height: '100vh',
        background: 'linear-gradient(180deg, #212121 0%, #1A1A1A 23.44%, #121212 51.56%, #121212 73.96%, #121212 100%)'
      }}
      className="flex flex-col "
    > 

      <BotonMenu />

      <Portada />

      <Titulo />

      <BotonPlayGrande />

      <BotonSeguir />

      <ListaDeCanciones />

      <Control />

    </div>
  );
};
