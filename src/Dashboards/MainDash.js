import React from "react";
import Cards from "./Cards";
import Table from "./Table";
import "./Dashboard.css";

const MainDash = () => {
  return (
    <div className="MainDash">
      <h1>Dashboard</h1>
      <Cards />
      <Table />
    </div>
  );
};

export default MainDash;
