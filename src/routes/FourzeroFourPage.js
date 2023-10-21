import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../style.css';

function FourZeroFourPage() {
  return (
    <div className="error-page">
      <h3>Error! </h3>
      <h3>404</h3>
      <h3>page not found</h3>
      <p>
        <Link className="" to="/">
          Home page{' '}
        </Link>
      </p>
    </div>
  );
}
export default FourZeroFourPage;
