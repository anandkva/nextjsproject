// Loading.tsx
import React from "react";

const Loading: React.FC = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="col d-flex justify-content-center">
          <div className="spinner-border" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Loading;
