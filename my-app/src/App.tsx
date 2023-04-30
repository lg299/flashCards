import React from 'react';
import { Header } from './components/header/header'
import { TranslationInput } from './components/translation-input/translation-input';
import Grid from '@mui/material/Grid';
import ArrowRightAltOutlinedIcon from '@mui/icons-material/ArrowRightAltOutlined';
import { createStyles, WithStyles, withStyles } from '@mui/styles';
import { parse } from 'papaparse';


const styles = createStyles({
  arrow: {
    color: 'white',
    paddingTop: "1rem"
  }
})

interface fields { 
  spanish: string
  english: string
  wordOrPhrase?: number
}

interface AppProps extends WithStyles<typeof styles> {};

interface AppState {
  value: number;
  data: fields[];
};

class App extends React.Component<AppProps, AppState> {
  constructor(props: AppProps) {
    super(props);
    this.state = {
      value: 1,
      data: [
        {
          spanish: "0", 
          english: "0",
        }
      ],
    };
  }

  componentDidMount(): void {
    fetch( './example_csv.csv' )
        .then( response => response.text())
        .then( responseText => {
          const records: fields[] = []
          const data = parse(responseText);

          console.log('respsonse text: ', data.data, typeof data.data)
          for (var i = 0; i < data.data.length; i++) {
            const data_ele = data.data[i] as any
            records.push({
              english: data_ele[1],
              spanish: data_ele[2],
            })
        }
        this.setState({data: records})
      })
  }

  render() {
    console.log("-- Render --")
    const { classes } = this.props;
    const { value, data } = this.state;
    const spanish = data[0].spanish
    const english = data[0].english

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
              label={spanish}
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
