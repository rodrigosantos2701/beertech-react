import React, { FunctionComponent } from "react";
import IAnimal from "../../apifake/Interfaces/IAnimal";

const animalSelect: FunctionComponent<IAnimal> =  ({ id, name, type, ownerId}) => {
    return (
      <section id="animals-section">
        <label htmlFor="animals">Animais:</label>
        <select id="animals">
        <option value="1">{name}</option>
        </select>
      </section>

    )
}

export default animalSelect;