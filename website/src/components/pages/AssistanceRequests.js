import React from 'react';
import './Pages.css';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
export const AssistanceRequests = () => {
  return (
    <div className='filter-bar'>

    </div>
  );
};

export const AssistanceAction = () => {
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


