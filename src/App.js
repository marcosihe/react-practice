import { useEffect, useState } from "react";
import "./App.css";
import CardList from "./components/card/CardList";
import { SearchBox } from "./components/search-box/SearchBox";

function App() {
  const [monsters, setMonsters] = useState([]);
  const [searchField, setSearchField] = useState("");

  const filteredMonsters = monsters.filter((monster) =>
    monster.name.toLowerCase().includes(searchField.toLocaleLowerCase())
  );

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((users) => setMonsters(users));
  }, []);

  return (
    <div className="App">
      <h1>Robot - Monsters</h1>
      <SearchBox setSearchField={setSearchField} />
      <CardList monsters={filteredMonsters}></CardList>
    </div>
  );
}

export default App;
