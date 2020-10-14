import React, { useState, useEffect } from 'react';
import OwnerSelect from "./Components/ownerSelect";
import AnimalSelect from "./Components/animalSelect";
import FilteredList from "./Components/filteredList";
// import IOwners from "./apifake/Interfaces/IOwner";
// import IAnimal from "./apifake/Interfaces/IAnimal";

import Owners from './apifake/Owners';
import Animals from './apifake/Animals';

import "./style.css";
import IOwner from './apifake/Interfaces/IOwner';

// chamadas de api fake
const owners: Owners = new Owners();
const animals: Animals = new Animals();

// owners.getAll(); // retorna promise
// animals.getByOwnerId(); // retorna promise


function App() {


  const [ownerState, setOwnerState] = useState<IOwner[]>([]);


  const getData = async () => {
    let data = await owners.getAll();
    console.log(data);
    setOwnerState(data)
  }

  useEffect(() => {
    getData()

  }, []);


  return (
    <div className="App">

      <OwnerSelect id={1} name="Dono=>1" email="teste@teste.com" />

      <AnimalSelect id={1} name="Animal=>1" type="cat" ownerId={1} />


      <section id="report">
        <button>Ordenar donos com mais animais</button>

        <FilteredList id={1} ownerName="fulano=>1" animalName="cat" ownerId={1} />

      </section>
    </div>
  );
}

export default App;
