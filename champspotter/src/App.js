import Banner from "./components/Banner";
import Position from "./components/Position";
import Form from "./components/Form";
import { useState } from "react";

function App() {
  const positions = [
    {
      name: "Top",
      primaryColor: "#DF7401",
      secondaryColor: "#F3E2A9",
    },
    {
      name: "Bottom",
      primaryColor: "#0B0B61",
      secondaryColor: "#819FF7",
    },
    {
      name: "Middle",
      primaryColor: "#8904B1",
      secondaryColor: "#DA81F5",
    },
    {
      name: "Jungle",
      primaryColor: "#0B610B",
      secondaryColor: "#81F7D8",
    },
  ];

  const [champions, setChampions] = useState([]);

  const onNewChampion = (champion) => {
    setChampions([...champions, champion]);
  };

  return (
    <div className="App">
      <Banner />
      <Form
        positions={positions.map((position) => position.name)}
        onSubmittingChampion={(champion) => onNewChampion(champion)}
      />
      {positions.map((position) => (
        <Position
          key={position.name}
          position={position.name}
          primaryColor={position.primaryColor}
          secondaryColor={position.secondaryColor}
          champions={champions.filter(champion => champion.position === position.name)}
        />
      ))}
    </div>
  );
}

export default App;
