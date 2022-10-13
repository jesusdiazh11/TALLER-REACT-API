import { useEffect, useState } from "react";
import Card from "./Card";

const Peticion = () => {
  const [personsajes, setPersonajes] = useState([]);
  const [paginacion, setPaginacion] = useState(0);

  const obtenerPersonajes = async () => {
    const res = await fetch(
      `https://www.breakingbadapi.com/api/characters?limit=10&offset=${paginacion}0`
    );
    const data = await res.json();
    setPersonajes(data);
  };

  useEffect(() => {
    obtenerPersonajes();
  }, [paginacion]);

  const siguiente = () => {
    setPaginacion(paginacion + 1);
  };

  const atras = () => {
    setPaginacion(paginacion - 1);
  };
  return (
    <div className="">
      <div className="d-flex flex-column align-items-center">
        <h1 className="">PETICION AL API DE BREAKING BAD</h1>
        <div className="container-sm d-flex justify-content-evenly">
          <button
            className="btn btn-outline-danger"
            disabled={paginacion === 0}
            onClick={atras}
          >
            Anterior
          </button>
          <button
            className="btn btn-outline-success"
            disabled={paginacion === 6}
            onClick={siguiente}
          >
            Siguiente
          </button>
        </div>
      </div>

      <div className="d-flex flex-wrap justify-content-around">
        {personsajes.map(({ char_id, name, img }) => (
          <Card key={char_id} char_id={char_id} name={name} img={img} />
        ))}
      </div>
    </div>
  );
};

export default Peticion;
