import React from "react";
import howManyParks from "./parks/howManyParks";
import MesaVerde from "./parks/MesaVerde";
import {trees, wildlife} from "./parks/RockyMountain";
import elevation from "./parks/RockyMountain";

function ColoradoStateParks() {
  howManyParks(); // => "42 parks!"
  MesaVerde();
  wildlife();
  elevation();
  return (
  <>
    <h1>Colorado State Parks!</h1>
    <div id="parks">
      <h2>Rocky Mountain Natinoal Park!</h2>
      <label>Trees:</label>
      <p>{trees}</p>
    </div>
  </>
  )
}

// function TreeMap

export default ColoradoStateParks;