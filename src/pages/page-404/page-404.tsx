import React from 'react';
import { Link } from 'react-router-dom';

function Page404(): React.JSX.Element {
  return (
    <React.Fragment>
      <div style={{
        display: 'inline-block',
        width: '100%',
        paddingTop: '50px',
        paddingBottom: '50px',
        backgroundColor: '#a1a1a1',
        textAlign: 'center',
        fontSize: '30px'
      }}
      >404. Page not found.
      </div>
      <div style={{
        display: 'inline-block',
        width: '100%',
        paddingTop: '50px',
        textAlign: 'center',
        textDecoration: 'underline'
      }}
      ><Link to={'/'}>Return to main</Link>
      </div>
    </React.Fragment>
  );
}

export default Page404;
