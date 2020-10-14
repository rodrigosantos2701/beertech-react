import React, { FunctionComponent } from "react";
import IOwner from "../../apifake/Interfaces/IOwner";
// import Owners from "../../apifake/Owners";

const ownerSelect: FunctionComponent<IOwner> =  ({ id, name, email}) => {
  return (
    <section id="owners-section">
        <label htmlFor="owners">Donos:</label>
        <select id="owners">
          <option value="1">{name}</option>
        </select>
      </section>

    )
}

export default ownerSelect;