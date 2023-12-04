import React from 'react';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';

export const InternalCases = () => {
  return (
    <></>
  );
};

export const OpenCase = () => {
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
        Primary Worker
      </Dropdown.Toggle>

      <Dropdown.Menu>
        <Dropdown.Item href="#/action-1" active>Action</Dropdown.Item>
        <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
        <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>

    <Dropdown data-bs-theme="dark">
      <Dropdown.Toggle className='down-button' id="dropdown-button-dark-example1" variant="secondary">
        Program
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

export const ClosedCase = () => {
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
        Primary Worker
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
export const AllCase = () => {
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
          Primary Worker
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
  
      <Dropdown data-bs-theme="dark">
        <Dropdown.Toggle className='down-button' id="dropdown-button-dark-example1" variant="secondary">
          Status
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

