import React from "react";
import { Link } from "react-router-dom";

export default function Card({ id, name, status, species, gender, origin, image, onClose }) {
   return (
      <div>
         <button onClick={() => onClose(id)}>X</button>
         <Link to={`/detail/${id}`}>
          <h2>{name}</h2>
         </Link>
         <h2>Estado: {status}</h2>
         <h2>Especie: {species}</h2>
         <h2>Género: {gender}</h2>
         <h2>Origen: {origin}</h2>
         <img src={image} alt='' />
      </div>
   );
}
