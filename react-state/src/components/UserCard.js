import classes from "./UserCard.module.css";

const UserCard = ({ name, phoneNumber, email }) => {
  return (
    <div className="col-md-4">
      <div className="card">
        <div className="card-body">
          <h5 className="card-title">{name}</h5>
          <p className={classes.card_text}>
            {phoneNumber} - {email}
          </p>
          <a href="#" className="btn btn-primary">
            Go somewhere
          </a>
        </div>
      </div>
    </div>
  );
};

export default UserCard;
