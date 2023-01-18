import './Dashboard.css';
import MainDash from './MainDash';
// import RightSide from "./RightSide";
import Sidebar from './Sidebar';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

function Dashboard({ users, trainers, products, orders }) {
  return (
    <>
      <Navbar />
      <div className="App">
        <div className="AppGlass">
          <Sidebar />
          <MainDash users={users} trainers={trainers} />
          {/* <RightSide /> */}
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Dashboard;
