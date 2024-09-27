const PlayerLists = (props) => {
  console.log(props);
  return (
    <div className="col-md-3">
      <div className="card" style={{ width: "18rem" }}>
        <img src={props.playerImage} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">{props.playerName}</h5>
          <p className="card-text">{props.playerNation}</p>
          <p className="card-text">{props.playerJersey}</p>
          <p className="card-text">{props.playerPosition}</p>
          <p className="card-text">{props.playerAge}</p>{" "}
          <a href="#" className="btn btn-primary">
            Go somewhere
          </a>
        </div>
      </div>
    </div>
  );
};

export default PlayerLists;
