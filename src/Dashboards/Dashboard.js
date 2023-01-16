import "./Dashboard.css";
import MainDash from "./MainDash";
// import RightSide from "./RightSide";
import Sidebar from "./Sidebar";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function Dashboard({ users, trainers, products, orders }) {
  return (
    <>
      <Navbar />
      <div className="App">
        <div className="AppGlass">
          <Sidebar />
          <MainDash
            users={users}
            trainers={trainers}
            products={products}
            orders={orders}
          />
          {/* <RightSide /> */}
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Dashboard;
