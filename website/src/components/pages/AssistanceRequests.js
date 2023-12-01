import React, { useEffect, useState } from 'react';
import './Pages.css';
import { useLocation } from 'react-router-dom';
import axios from 'axios';
import { Button } from '../Button';
const app = axios.create({
  baseURL: 'http://localhost:3001'
});

const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sept", "Oct", "Nov", "Dec"];

export const AssistanceRequests = () => {
  return (
    <div className='filter-bar'>
      <h1>ASSISTANCE REQUESTS dcgdssdjhgjcgsdjcgsdugcusdcjdcjudhcudhcduchud</h1>
      <h1>ASSISTANCE REQUESTS dcgdssdjhgjcgsdjcgsdugcusdcjdcjudhcudhcduchud</h1>

      <body> hjfckushdhfcsihfcisehfjcsjdhckufbdvjkdf </body>
    </div>
  );
};

export const AssistanceAction = () => {
  const [page, setPage] = useState(0);
  const [data, setData] = useState([]);
  const [count, setCount] = useState(0);

  useEffect(() => {
    app.get('/assist', {})
      .then(async (response) => {
        setCount(JSON.parse(response.data));
      })
      .catch();
    app.post('/assist', { type: "needs", page: page })
      .then(async (response) => {
        setData(JSON.parse(response.data));
      })
      .catch();
  }, [])

  useEffect(() => {
    app.post('/assist', { type: "needs", page: page })
      .then(async (response) => {
        setData(JSON.parse(response.data));
      })
      .catch();
  }, [page])

  data.map((item, index) => {
    item.CreatedAt = new Date(item.CreatedAt);
  });
  return (
    <div className="content-page">
      <div className="filter-bar">
        <button className="filter-btn">Placeholder <i className="fas fa-caret-up"></i></button>
        <button className="filter-btn">Placeholder <i className="fas fa-caret-up"></i></button>
        <p>{page * 50 + 1}-{(page + 1) * 50 <= count ? (page + 1) * 50 : count}</p>
        <button onClick={() => { page > 0 && setPage(page - 1) }} className="page-btn"><i className="fas fa-caret-up"></i></button>
        <button onClick={() => { (page + 1) * 50 <= count && setPage(page + 1) }} className="page-btn"><i style={{ transform: 'rotate(180deg)' }} className="fas fa-caret-up"></i></button>
      </div>
      <table className="data-table">
        <thead>
          <tr>
            <th>CLIENT NAME</th>
            <th>SERVICE TYPE</th>
            <th>LAST UPDATED</th>
          </tr>
        </thead>
        {data.map((item, index) => {
          return (
            <tbody onClick={() => { }}>
              <tr>
                <td>{item.FirstName} {item.LastName}</td>
                <td>{item.ServicesSeeking}</td>
                <td>{months[item.CreatedAt.getMonth()]} {item.CreatedAt.getDate()}</td>
              </tr>
            </tbody>
          )
        })}
      </table>
    </div>
  );
};

export const Closed = () => {
  return (
    <div className='closed'>
      <h1>ASSISTANCE REQUESTS/Closed</h1>
    </div>
  );
};

export const Processed = () => {
  return (
    <div className='processed'>
      <h1>ASSISTANCE REQUESTS/Processed</h1>
    </div>
  );
};


