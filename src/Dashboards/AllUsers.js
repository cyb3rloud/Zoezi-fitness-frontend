import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import './Dashboard.css';
import { useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Sidebar from './Sidebar';
// import { UilArrowCircleRight } from "@iconscout/react-unicons";

function createData1(name, trackingId, date, status, client_goal) {
  return { name, trackingId, date, status, client_goal };
}

const users = [
  createData1('DR. Stockmann', 38, '110kg', '+254712345678', 'Lose Weight'),
  createData1('DR. Stockmann', 38, '110kg', '+254712345678', 'Lose Weight'),
  createData1('DR. Stockmann', 38, '110kg', '+254712345678', 'Lose Weight'),
];

export default function BasicTable({ users }) {
  const navigate = useNavigate();

  return (
    <>
      <Navbar />
      <div className="tables">
        <Sidebar />
        <div className="full-table">
          <h3>Users</h3>
          <TableContainer component={Paper} style={{ boxShadow: '0px 13px 20px 0px #80808029' }}>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
              <TableHead>
                <TableRow>
                  <TableCell>Name</TableCell>
                  <TableCell align="left">Age</TableCell>
                  <TableCell align="left">Weight</TableCell>
                  <TableCell align="left">Email</TableCell>
                  <TableCell align="left">Contact</TableCell>
                  <TableCell align="left">client_goal</TableCell>
                </TableRow>
              </TableHead>
              <TableBody style={{ color: 'white' }}>
                {users?.map((user) => (
                  <TableRow key={user?.id} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                    <TableCell component="th" scope="row">
                      {user?.firstname} {user?.lastname}
                    </TableCell>
                    <TableCell align="left">{user?.age}</TableCell>
                    <TableCell align="left">{user?.current_weight}</TableCell>
                    <TableCell align="left">{user?.email}</TableCell>
                    <TableCell align="left">
                      <span className="status">{user?.contact}</span>
                    </TableCell>
                    <TableCell align="left" className="Details">
                      {user?.client_goal}
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
          <div className="t-button">
            <button
              className="table-button"
              onClick={() => {
                console.log('clicked');
                navigate('/AddUser');
              }}
            >
              Add User
            </button>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
