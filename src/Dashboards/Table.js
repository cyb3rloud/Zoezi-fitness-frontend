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
import { UilArrowCircleRight } from '@iconscout/react-unicons';

function createData(name, trackingId, date, status) {
  return { name, trackingId, date, status };
}

const rows = [
  createData('Lasania Chiken Fri', 18908424, '2 March 2022', 'Approved'),
  createData('Big Baza Bang ', 18908424, '2 March 2022', 'Pending'),
  createData('Mouth Freshner', 18908424, '2 March 2022', 'Approved'),
];

const makeStyle = (status) => {
  if (status === 'Approved') {
    return {
      background: 'rgb(145 254 159 / 47%)',
      color: 'green',
    };
  } else if (status === 'Pending') {
    return {
      background: '#ffadad8f',
      color: 'red',
    };
  } else {
    return {
      background: '#59bfff',
      color: 'white',
    };
  }
};

export default function BasicTable({ users, trainers }) {
  const navigate = useNavigate();

  return (
    <>
      <div className="Tables">
        <div className="table">
          <h3>Users</h3>
          <TableContainer component={Paper} style={{ boxShadow: '0px 13px 20px 0px #80808029' }}>
            <div className="t-button">
              <button
                className="m-button"
                onClick={() => {
                  navigate('/AllUsers');
                }}
              >
                See more <UilArrowCircleRight />
              </button>
            </div>
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
                {users.slice(-3).map((user, i) => (
                  <TableRow key={`${user.id}-${i}`} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                    <TableCell component="th" scope="row">
                      {user.firstname} {user.lastname}
                    </TableCell>
                    <TableCell align="left">{user.age}</TableCell>
                    <TableCell align="left">{user.current_weight}</TableCell>
                    <TableCell align="left">{user.email}</TableCell>
                    <TableCell align="left">
                      <span className="status">{user.contact}</span>
                    </TableCell>
                    <TableCell align="left" className="Details">
                      {user.goal}
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
                navigate('/AddUser');
              }}
            >
              Add User
            </button>
          </div>
        </div>
        <div className="table">
          <h3>Trainers</h3>
          <TableContainer component={Paper} style={{ boxShadow: '0px 13px 20px 0px #80808029' }}>
            <div className="t-button">
              <button
                className="m-button"
                onClick={() => {
                  navigate('/AllTrainers');
                }}
              >
                See more <UilArrowCircleRight />
              </button>
            </div>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
              <TableHead>
                <TableRow>
                  <TableCell>Name</TableCell>

                  <TableCell align="left">Clients</TableCell>

                  <TableCell align="left">Workouts</TableCell>
                  <TableCell align="left">Email</TableCell>
                  <TableCell align="left">Contact</TableCell>
                </TableRow>
              </TableHead>
              <TableBody style={{ color: 'white' }}>
                {trainers.slice(-3).map((trainer, i) => (
                  <TableRow key={`${trainer.id}-${i}`} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                    <TableCell component="th" scope="row">
                      {trainer.firstname} {trainer.lastname}
                    </TableCell>

                    <TableCell align="left">{trainer.users?.length}</TableCell>

                    <TableCell align="left">{trainer.exercises.length}</TableCell>
                    <TableCell align="left">
                      <span className="status">{trainer.email}</span>
                    </TableCell>
                    <TableCell align="left" className="Details">
                      {trainer.phone}
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
                navigate('/AddTrainer');
              }}
            >
              Add Trainer
            </button>
          </div>
        </div>
        {/* <div className="table">
          <h3>Products</h3>
          <TableContainer component={Paper} style={{ boxShadow: '0px 13px 20px 0px #80808029' }}>
            <div className="t-button">
              <button
                className="m-button"
                onClick={() => {
                  navigate('/AllProducts');
                }}
              >
                See more <UilArrowCircleRight />
              </button>
            </div>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
              <TableHead>
                <TableRow>
                  <TableCell>Product Name</TableCell>
                  <TableCell align="left">Description</TableCell>
                  <TableCell align="left">Price</TableCell>
                  <TableCell align="left">Quantity</TableCell>
                  <TableCell align="left">Status</TableCell>
                </TableRow>
              </TableHead>
              <TableBody style={{ color: 'white' }}>
                {users.slice(-3).map((user, i) => (
                  <TableRow key={`${user.email}-${i}`} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                    <TableCell component="th" scope="row">
                      {user.name}
                    </TableCell>
                    <TableCell align="left">{user.trackingId}</TableCell>
                    <TableCell align="left">{user.date}</TableCell>
                    <TableCell align="left">
                      <span className="status">{user.status}</span>
                    </TableCell>
                    <TableCell align="left" className="Details">
                      {user.client_goal}
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
                navigate('/AddProduct');
              }}
            >
              Add Product
            </button>
          </div>
        </div> */}
        <div className="table">
          <h3>Recent Orders</h3>
          <TableContainer component={Paper} style={{ boxShadow: '0px 13px 20px 0px #80808029' }}>
            <div className="t-button">
              <button
                className="m-button"
                onClick={() => {
                  navigate('/AllOrders');
                }}
              >
                See more <UilArrowCircleRight />
              </button>
            </div>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
              <TableHead>
                <TableRow>
                  <TableCell>Product</TableCell>
                  <TableCell align="left">Tracking ID</TableCell>
                  <TableCell align="left">Date</TableCell>
                  <TableCell align="left">Status</TableCell>
                  <TableCell align="left"></TableCell>
                </TableRow>
              </TableHead>
              <TableBody style={{ color: 'white' }}>
                {rows.map((row) => (
                  <TableRow key={row.name} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                    <TableCell component="th" scope="row">
                      {row.name}
                    </TableCell>
                    <TableCell align="left">{row.trackingId}</TableCell>
                    <TableCell align="left">{row.date}</TableCell>
                    <TableCell align="left">
                      <span className="status" style={makeStyle(row.status)}>
                        {row.status}
                      </span>
                    </TableCell>
                    <TableCell align="left" className="Details">
                      Details
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
                navigate('/AddOrder');
              }}
            >
              Add Order
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
