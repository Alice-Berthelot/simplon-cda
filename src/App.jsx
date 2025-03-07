import { useEffect, useState } from "react";
import carambar from "./assets/carambar.jpg";
import "./App.css";

function App() {
  const [jokes, setJokes] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3310/api/jokes")
      .then((response) => response.json())
      .then((data) => setJokes(data))
      .catch((error) => console.log("Error fetching data:", error));
  }, []);

  const [randomJoke, setRandomJoke] = useState(null);

  const handleClick = () => {
    const randomIndex = Math.floor(Math.random() * jokes.length);
    setRandomJoke(jokes[randomIndex]);
  };

  return (
    <section>
      <img src={carambar} alt="wrapped carambar" />
      <h1>Welcome to the Carambar website!</h1>
      <button onClick={handleClick}>Random joke</button>
      {randomJoke !== null && (
        <>
          <h2>{randomJoke.question}</h2>
          <p>{randomJoke.answer}</p>
          <p>{randomJoke.id}</p>
        </>
      )}
    </section>
  );
}

export default App;
