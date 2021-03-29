import React from "react";

export const Form = ({ onSubmit }) => {
  return (
    <form onSubmit={onSubmit}>
      <div className="form-group">
        <label htmlFor="make">Marka</label>
        <input className="form-control" id="make" style={{ color: "black" }} />
      </div>
      <div className="form-group">
        <label htmlFor="model">Model</label>
        <input className="form-control" id="model" style={{ color: "black" }} />
      </div>
      <div className="form-group">
        <label htmlFor="generation">Generacja</label>
        <input
          className="form-control"
          id="generation"
          style={{ color: "black" }}
        />
      </div>
      <div className="form-group">
        <label type="number" htmlFor="year">
          Rocznik
        </label>
        <input className="form-control" id="year" style={{ color: "black" }} />
      </div>
      <div className="form-group">
        <label type="number" htmlFor="mileage">
          Przebieg
        </label>
        <input
          className="form-control"
          id="mileage"
          style={{ color: "black" }}
        />
      </div>
      <div className="form-group">
        <label htmlFor="registrationNumber">Numer rejestracyjny</label>
        <input
          className="form-control"
          id="registrationNumber"
          style={{ color: "black" }}
        />
      </div>
      <div className="form-group">
        <label htmlFor="firstRegistration">Data pierwszej rejestracji</label>
        <input
          type="date"
          className="form-control"
          id="firstRegistration"
          style={{ color: "black" }}
        />
      </div>
      <div className="form-group">
        <label htmlFor="vin">VIN</label>
        <input className="form-control" id="vin" style={{ color: "black" }} />
      </div>
      <div className="form-group">
        <button className="form-control btn btn-primary" type="submit">
          Submit
        </button>
      </div>
    </form>
  );
};
export default Form;
