import React from 'react';
import { Link } from 'react-router-dom';

import styles from './page-404.module.css';

function Page404(): React.JSX.Element {
  return (
    <React.Fragment>
      <div className={styles.title}>
        404. Page not found.
      </div>
      <div className={styles.link}>
        <Link to={'/'}>Return to main</Link>
      </div>
    </React.Fragment>
  );
}

export default Page404;
