import React, { FunctionComponent } from "react";
import IList from "../../apifake/Interfaces/IList";


const filteredList: FunctionComponent<IList> =  ({ id , ownerId, ownerName, animalName}) => {
    return (
        <table id="reportList">
          <thead>
            <tr>
              <th>Dono</th>
              <th>Quantidade</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td> {ownerName}</td>
              <td>{animalName}</td>
            </tr>
          </tbody>
        </table>

    )
}

export default filteredList;