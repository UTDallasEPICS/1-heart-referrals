import React, { useEffect, useState } from 'react';
import './Pages.css';
import { useLocation, useNavigate } from 'react-router-dom';
import axios from 'axios';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
const app = axios.create({
  baseURL: 'http://localhost:3001'
});

const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sept", "Oct", "Nov", "Dec"];

export const AssistanceRequests = () => {
  return (
    <div className='filter-bar'>

    </div>
  );
};

export const AssistanceAction = () => {
  const loc = useLocation();
  const [page, setPage] = useState(0);
  const [data, setData] = useState([]);
  const [count, setCount] = useState(0);
  const nav = useNavigate();


  useEffect(() => {

    const token = sessionStorage.getItem('needPage');
    if (token) { setPage(parseInt(token)); sessionStorage.removeItem('needPage') }
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
  }, []);

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
      <div className="top-bar">
        <button className="top-btn filter-btn">Placeholder <i className="fas fa-caret-up"></i></button>
        <button className="top-btn filter-btn">Placeholder <i className="fas fa-caret-up"></i></button>
        <p>{page * 50 + 1}-{(page + 1) * 50 <= count ? (page + 1) * 50 : count} of {count}</p>
        <button onClick={() => { page > 0 && setPage(page - 1) }} className="page-btn"><i className="fas fa-caret-up"></i></button>
        <button onClick={() => { (page + 1) * 50 < count && setPage(page + 1) }} className="page-btn"><i style={{ transform: 'rotate(180deg)' }} className="fas fa-caret-up"></i></button>
      </div>
      {count === 0 ?
        <h3 style={{ textAlign: "center", paddingTop: "2%" }}>No New Cases</h3> :
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
              <tbody onClick={() => { sessionStorage.setItem('needPage', page); nav('/assistanceRequests/assistanceAction/client', { state: { client: item.ClientId, type: "need", page: page } }) }}>
                <tr>
                  <td width="45%">{item.FirstName} {item.LastName}</td>
                  <td width="40%">{item.ServicesSeeking}</td>
                  <td width="15%">{months[item.CreatedAt.getMonth()]} {item.CreatedAt.getDate()}</td>
                </tr>
              </tbody>
            )
          })}
        </table>}
    </div>

  );
};

export const Closed = () => {
  return (
    <div className='content-page' >

      <Dropdown data-bs-theme="dark">
        <Dropdown.Toggle className='down-button' id="dropdown-button-dark-example1" variant="secondary">
          Care Coordinator
        </Dropdown.Toggle>

        <Dropdown.Menu>
          <Dropdown.Item href="#/action-1" active>Action</Dropdown.Item>
          <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
          <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>

      <Dropdown data-bs-theme="dark">
        <Dropdown.Toggle className='down-button' id="dropdown-button-dark-example1" variant="secondary">
          Resolution (All)
        </Dropdown.Toggle>

        <Dropdown.Menu>
          <Dropdown.Item href="#/action-1" active>Action</Dropdown.Item>
          <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
          <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>

      <Dropdown data-bs-theme="dark">
        <Dropdown.Toggle className='down-button' id="dropdown-button-dark-example1" variant="secondary">
          Service Type
        </Dropdown.Toggle>

        <Dropdown.Menu>
          <Dropdown.Item href="#/action-1" active>Action</Dropdown.Item>
          <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
          <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
    </div>
  );
};

export const Processed = () => {
  return (
    <div className='content-page' >

      <Dropdown data-bs-theme="dark">
        <Dropdown.Toggle className='down-button' id="dropdown-button-dark-example1" variant="secondary">
          Care Coordinator
        </Dropdown.Toggle>

        <Dropdown.Menu>
          <Dropdown.Item href="#/action-1" active>Action</Dropdown.Item>
          <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
          <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>

      <Dropdown data-bs-theme="dark">
        <Dropdown.Toggle className='down-button' id="dropdown-button-dark-example1" variant="secondary">
          Service Type
        </Dropdown.Toggle>

        <Dropdown.Menu>
          <Dropdown.Item href="#/action-1" active>Action</Dropdown.Item>
          <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
          <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
    </div>
  );
};

export const AssistanceClient = () => {
  const nav = useNavigate();
  const loc = useLocation();

  const [client, setClient] = useState({});
  useEffect(() => {
    app.post('/client', { client: loc.state.client })
      .then((response) => {
        setClient(JSON.parse(response.data));
      })
      .catch();
  }, [loc.state.client]);

  return (
    <div className="content-page">
      <div className="top-bar">
        <button className="top-btn back-btn" onClick={() => { nav(-1) }}> <i className="fas fas fa-chevron-left" />Back</button>
      </div>
      <div style={{ display: "flex", flexDirection: "row", minHeight: "100%", minWidth: "auto" }}>
        <div className="case-info">
          Hello
        </div>
        <div className="client-info">
          Hi
        </div>
      </div>
      {loc.state.client}
    </div >
  );
}


