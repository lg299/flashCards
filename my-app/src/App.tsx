import React from 'react';
import { Header } from './components/header/header'
import { TranslationInput } from './components/translation-input/translation-input';
import Grid from '@mui/material/Grid';
import ArrowRightAltOutlinedIcon from '@mui/icons-material/ArrowRightAltOutlined';
import { createStyles, WithStyles, withStyles } from '@mui/styles';
import { parse } from 'papaparse';
import ArrowCircleRightIcon from '@mui/icons-material/ArrowCircleRight';
import Button from '@mui/material/Button';


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

interface AppProps extends WithStyles<typeof styles> { };

interface AppState {
  value: number;
  isTranslationCorrect: boolean;
  data: fields[];
  dataIndex: number;
};

class App extends React.Component<AppProps, AppState> {
  constructor(props: AppProps) {
    super(props);
    this.state = {
      value: 1,
      isTranslationCorrect: false,
      data: [
        {
          spanish: "0",
          english: "0",
        }
      ],
      dataIndex: 0,
    };
  }

  componentDidMount(): void {
    fetch('./example_csv.csv')
      .then(response => response.text())
      .then(responseText => {
        const records: fields[] = []
        const data = parse(responseText);

        for (var i = 0; i < data.data.length; i++) {
          const data_ele = data.data[i] as string
          records.push({
            english: data_ele[1],
            spanish: data_ele[2],
          })
        }
        this.setState({ data: records })
      })
  }

  checkTranslationIsCorrect = (e: any) => {
    if (e.key == "Enter") {
      const input = (document.getElementById("textfield-english") as HTMLInputElement).value
      const correctValue = this.state.data[this.state.dataIndex].english.slice(1, -1)
      console.log("input: ", input)
      console.log("correct: ", correctValue)
      if (input == correctValue) {
        this.setState({ isTranslationCorrect: true })
      }
    }
  }

  nextTranslation = () => {
    (document.getElementById("textfield-english") as HTMLInputElement).value = ""
    this.setState({
      dataIndex: this.state.dataIndex + 1,
      isTranslationCorrect: false,
    })
  }

  render() {
    console.log("-- Render --")
    const { classes } = this.props;
    const { value, data, dataIndex } = this.state;
    const spanish = data[dataIndex].spanish
    const english = data[dataIndex].english

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
                onKeyDown={this.checkTranslationIsCorrect}
                language="spanish"
              />
            </Grid>
            <Grid item xs={2}>
              <ArrowRightAltOutlinedIcon className={classes.arrow} />
            </Grid>
            <Grid item xs={2}>
              <TranslationInput
                label='Input Translation'
                disabled={false}
                onKeyDown={this.checkTranslationIsCorrect}
                language="english"
              />
            </Grid>
            <Grid item xs={3}></Grid>
          </Grid>
          <Grid container spacing={2}>
            <Grid item xs={5}></Grid>
            <Grid item xs={2}>
              {this.state.isTranslationCorrect && <p style={{color: "white", fontWeight: "bold"}}>Yay :)</p>}
   
              <Button 
               startIcon={<ArrowCircleRightIcon />}
               color="secondary"
               variant="text"
               onClick={this.nextTranslation}
               >
                Next
              </Button>
            </Grid>
            <Grid item xs={5}></Grid>
          </Grid>
        </div>
      </div>
    );
  }
}


export default withStyles(styles)(App);
