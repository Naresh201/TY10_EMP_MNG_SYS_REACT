import React from 'react'
import { Link, Route, Switch } from "react-router-dom";
import { Home } from './Home';
import LoginForm from './LoginForm';

 function EmployeeManagementSysteml() {
    return (
        <>
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
          <div className="container-fluid">
            <Link className="navbar-brand" to="/">
             EMS
            </Link>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNav"
              aria-controls="navbarNav"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav">
                <li className="nav-item">
                  <Link className="nav-link active" aria-current="page" to="/LoginForm">
                  Create Account
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/show accounts">
                   Show Accounts
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
        <Switch>
      <Route exact  path="/" component={Home} />
      <Route path="/LoginForm" component={LoginForm}/> 
        </Switch>
      </>
       
    )
};

export default React.memo(EmployeeManagementSysteml);
