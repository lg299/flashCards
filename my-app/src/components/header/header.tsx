import React from 'react';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles({
  title: {
    color: "white",
    fontWeight: "bold",
    fontSize: "2rem",
    paddingBottom: "2rem",
  },
});

function Header() {
  const styles = useStyles();

  return (
    <div id="header-time">
      <p
        className={styles.title}
      >flashCards</p>
    </div>
  );
}

export default Header

