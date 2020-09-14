import React from "react";
export const ContentCard = ({ header, children }) => (
  <div className="card">
    <header className="card-header">
      <p className="card-header-title is-centered"> {header} </p>
    </header>
    <div className="card-content">
      <div className="content"> {children} </div>
    </div>
  </div>
);
