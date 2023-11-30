import React, { useEffect, useState } from 'react';
import './Pages.css';
import { useLocation } from 'react-router-dom';
import axios from 'axios';
const app = axios.create({
  baseURL: 'http://localhost:3001'
});

const months = ["Jan", "feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sept", "Oct", "Nov", "Dec"];

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
  const loc = useLocation();
  const [data, setData] = useState([]);
  useEffect(() => {
    app.post('/assist', { type: "needs", page: loc.state ? loc.state.page : 0 })
      .then(async (response) => {
        setData(JSON.parse(response.data));
      })
      .catch();
  }, [])

  data.map((item, index) => {
    item.CreatedAt = new Date(item.CreatedAt);
    console.log(item.CreatedAt);
  })
  return (
    <div className="content-page">
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
            <tbody>
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


