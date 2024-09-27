const ErrorComponent = ({ errorMessage }) => {
  return (
    <div className="alert alert-danger" role="alert" style={{ pwidth: "10px" }}>
      {errorMessage}
    </div>
  );
};

export default ErrorComponent;
