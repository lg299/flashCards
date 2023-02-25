import React from 'react';
import './header.css'

const styles = {
    title: {
      color: "white",
      fontWeight: "bold",
      fontSize: "2rem",
    },
  };

function Header(){
    return (
    <div id="header-time">
        <p style={styles.title}>flashCards</p>
    </div>
    );
}

export default Header;