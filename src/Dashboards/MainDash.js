import React from "react";
import Cards from "./Cards";
import Table from "./Table";
import "./Dashboard.css";

const MainDash = ({ users, trainers, products, orders }) => {
  return (
    <div className="MainDash">
      <h1>Dashboard</h1>
      <Cards
        users={users}
        trainers={trainers}
        products={products}
        orders={orders}
      />
      <Table
        users={users}
        trainers={trainers}
        products={products}
        orders={orders}
      />
    </div>
  );
};

export default MainDash;
