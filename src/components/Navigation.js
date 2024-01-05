import React from 'react';
import { Link } from 'react-router-dom';

function Navigation() {
  return (
    <nav className="navbar fixed-top bg-body-tertiary">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">SBOM Viewer</Link>
        <div>
          <Link to="/about">About</Link>
          <Link to="/sbom">SBOM</Link>
        </div>
      </div>
    </nav>
  );
}

export default Navigation;
