import React from 'react';

const Header = () => {
  return (
    <div className="ui fixed menu" style={styles.container}>
      <div className="ui container center" style={styles.header}>
        <h2>Mini Market</h2>
      </div>
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
