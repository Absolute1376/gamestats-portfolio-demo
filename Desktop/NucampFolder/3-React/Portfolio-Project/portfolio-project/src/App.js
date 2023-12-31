import GameCard from "./GameCard";

const gameStats = [
  {
    id: 1,
    name: "Delilah",
    rating: null,
    category: 'Batting'
  },
  {
    id: 2,
    name: "Lilly",
    rating: null,
    category: 'Batting'
  },
];

function App() {
  return (
    <div>
      <h1>Vision Analytics</h1>
      { gameStats.map( g => <GameCard game={g} />
       )}
    </div>
  );
}

export default App;