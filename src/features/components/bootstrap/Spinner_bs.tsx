function Spinner() {
  return (
    <div
      className="d-flex justify-content-center align-items-center"
      style={{ marginTop: "40px" }}
    >
      <div className="spinner-border" role="status">
        <span className="visually-hidden">Loading...</span>
      </div>
    </div>
  );
}

export default Spinner;
