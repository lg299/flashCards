import React from 'react';
import { Header } from './components/header/header'
import { TranslationInput } from './components/translation-input/translation-input';
import Grid from '@mui/material/Grid';
import ArrowRightAltOutlinedIcon from '@mui/icons-material/ArrowRightAltOutlined';
import { createStyles, WithStyles, withStyles } from '@mui/styles';
import { parse } from 'csv-parse';


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
  data: any;
};

class App extends React.Component<AppProps, AppState> {
  constructor(props: AppProps) {
    super(props);
    this.state = {
      value: 1,
      data: 1,
    };
  }

  componentDidMount(): void {
    fetch( './example_csv.csv' )
        .then( response => response.text())
        .then( responseText => {
          const records: fields[] = []

          const parser = parse({
            delimiter: '|'
          });
    
          parser.on('readable', function () {
              let record;
              while ((record = parser.read()) !== null) {
                  console.log('record: ', record)
                  records.push({"spanish":record[1].slice(1,-1),
                  "english":record[2].slice(1,-1),
                    "wordOrPhrase": record[3].slice(1,-1)});
              }
          });
      
          parser.write(responseText)
          parser.end();

          this.setState({data: records})
      })
  }

  render() {
    const { classes } = this.props;
    const { value, data } = this.state;

    return (
      <div className="App">
      <div>
        < Header />
        { data }
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
