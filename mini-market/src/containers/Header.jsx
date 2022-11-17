import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <div className="ui fixed menu" style={styles.container}>
      <Link to={'/'}>
        <div className="ui container center" style={styles.header}>
          <h2>Mini Market</h2>
        </div>
      </Link>
    </div>
  );
};

export default Header;

const styles = {
  container: {
    marginBottom: 50,
  },
  header: {
    padding: 20,
  },
};
