import React from "react";

const LoadingSpinner = () => {
  return (
    <div>
      <div className="d-flex justify-content-center">
        <div
          style={{ width: "5rem", height: "5rem" }}
          className="spinner-border  spine "
          role="status"
        >
          <span className="visually-hidden">Loading...</span>
        </div>
      </div>
    </div>
  );
};

export default LoadingSpinner;
