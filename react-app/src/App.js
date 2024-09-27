import PlayerLists from "./components/PlayerLists";
import players from "./players";
const App = () => {
  return (
    <section className="container">
      <div className="row">
        {players.length > 0 ? (
          players.map((player) => {
            return (
              <PlayerLists
                playerName={player.name}
                playerNation={player.nationality}
                playerJersey={player.jerseryNumber}
                playerPosition={player.position}
                playerAge={player.age}
                playerImage={player.image}
              />
            );
          })
        ) : (
          <h1> No player available</h1>
        )}
      </div>
    </section>
  );
};

export default App;
