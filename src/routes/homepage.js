import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../style.css';
import ErrorBoundary from './ErrorBoundary';
function Homepage() {
  const [hasError, setHasError] = useState(false);

  if (hasError) {
    throw new Error(
      `Uh Oh!.....  there is an error somewhere in this page 😔 \n Refresh the page😩 `
    );
  }
  return (
    <>
    <div className="homepage">
      <h1>Welcome to my home page</h1>
      <p> This is my AltSchool Second Semester Project</p>
      <dl>
        <dt>Counter App</dt>

        <dd>This is a simple counter app built using React</dd>
      </dl>
      <p className="count">
        Check out my{' '}
        <Link className="linksto" to="/counter">
          Counter App
        </Link>
      </p>
      <p className="count">
        To see the 404 error page, click the link. It leads to a manually
        generated invalid path{' '}
        <Link className="linksto" to="^">
          404 Error Page
        </Link>
      </p>
      <p>Test the Error Boundary the button </p>
      
        <button className="errorbtn" onClick={() => setHasError(true)}>
          Errorboundary Test
        </button>
      </div>
    </>
  );
}
export default Homepage;
