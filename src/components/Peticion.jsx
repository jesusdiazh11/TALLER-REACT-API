import { useEffect, useState } from "react";
import Card from "./Card";

const Peticion = () => {
  return (
    <div className="text-center width-100">
      <h1 className="">PETICION AL API DE BREAKING BAD</h1>
      <div className="container-sm d-flex justify-content-evenly">
        <button className="btn btn-outline-danger">Anterior</button>
        <button className="btn btn-outline-success">Siguiente</button>
      </div>
      <div className="container">
      <Card/>
      </div>
    </div>
  );
};

export default Peticion;
