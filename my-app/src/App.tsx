import React from 'react';
import './App.css';
import Header from './components/header/header'
import TranslationInput from './components/translation-input/translation-input';
import Grid from '@mui/material/Grid';
import ArrowRightAltOutlinedIcon from '@mui/icons-material/ArrowRightAltOutlined';
import { createStyles, WithStyles, withStyles } from '@mui/styles';
import loadData from './utils/parse_csv'

const styles = createStyles({
  arrow: {
    color: 'white',
    paddingTop: "1rem"
  }
})

interface AppProps extends WithStyles<typeof styles> {};

interface AppState {
  value: number;
  data: any;
};

class App extends React.Component<AppProps, AppState> {
  constructor(props: AppProps) {
    super(props);
    this.state = {
      value: 1,
      data: loadData(),
    };
  }
  
  render() {
    const { classes } = this.props;
    const { value } = this.state;

    return (
      <div className="App">
      <div>
        < Header />
      </div>
      <div>
        <Grid container spacing={2}>
          <Grid item xs={3}></Grid>
          <Grid item xs={2}>
            <TranslationInput
              label='Quiero una pizza'
              disabled={true}
            />
          </Grid>
          <Grid item xs={2}>
            <ArrowRightAltOutlinedIcon className={classes.arrow} />
          </Grid>
          <Grid item xs={2}>
            <TranslationInput
              label='Input Translation'
              disabled={false}
            />
          </Grid>
          <Grid item xs={3}></Grid>
        </Grid>
      </div>
    </div>
    );
  }
}


export default withStyles(styles)(App);
