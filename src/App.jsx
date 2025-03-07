import { useState } from "react";
import carambar from "./assets/carambar.jpg";
import "./App.css";

function App() {
  const randomJokes = [
    "Pourquoi les plongeurs plongent-ils toujours en arrière ? Parce que sinon ils tombent dans le bateau.",
    "Quel est le comble pour un électricien ? De ne pas être au courant.",
    "Pourquoi le livre de maths est-il triste ? Parce qu’il a trop de problèmes.",
  ];

  const [index, setIndex] = useState(null);

  const handleClick = () => {
    setIndex((initialIndex) =>
      initialIndex === null ? 0 : (initialIndex + 1) % randomJokes.length
    );
  };

  return (
    <section>
      <img src={carambar} alt="wrapped carambar" />
      <h1>Welcome to the Carambar website!</h1>
      <button onClick={handleClick}>Random joke</button>
      {index !== null && <p>{randomJokes[index]}</p>}
    </section>
  );
}

export default App;
