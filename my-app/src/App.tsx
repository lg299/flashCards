import React from 'react';
import { Header } from './components/header/header'
import { TranslationInput } from './components/translation-input/translation-input';
import Grid from '@mui/material/Grid';
import ArrowRightAltOutlinedIcon from '@mui/icons-material/ArrowRightAltOutlined';
import { createStyles, WithStyles, withStyles } from '@mui/styles';
import ArrowCircleRightIcon from '@mui/icons-material/ArrowCircleRight';
import Button from '@mui/material/Button';
import data from './data/example_csv.csv';


const styles = createStyles({
  arrow: {
    color: 'white',
    paddingTop: "1rem"
  }, 
  translationStatus: {
    color: "white",
    fontWeight: "bold"
  }
})

interface fields {
  spanish: string
  english: string
  wordOrPhrase?: number
}

interface AppProps extends WithStyles<typeof styles> { };

interface AppState {
  enteredText: boolean;
  isTranslationCorrect: boolean;
  data: fields[];
  dataIndex: number;
};

class App extends React.Component<AppProps, AppState> {
  constructor(props: AppProps) {
    super(props);
    this.state = {
      enteredText: false,
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
    const records: fields[] = []
    for (var i = 0; i < data.length; i++) {
      const data_ele = data[i] as string
      records.push({
        english: data_ele[1].slice(1,-1),
        spanish: data_ele[2].slice(1,-1),
      })
    }
    this.setState({ data: records })
  }

  checkTranslationIsCorrect = (e: KeyboardEvent) => {
    if (e.key == "Enter") {
      const input = (document.getElementById("textfield-english") as HTMLInputElement).value
      const correctValue = this.state.data[this.state.dataIndex].english
      if (input == correctValue) {
        this.setState({ 
          isTranslationCorrect: true,
          enteredText: true,
         })
         return 
      }
      this.setState({ 
        isTranslationCorrect: false,
        enteredText: true,
       })
    }
  }

  nextTranslation = () => {
    (document.getElementById("textfield-english") as HTMLInputElement).value = ""
    if (this.state.dataIndex == this.state.data.length - 1){
      this.setState({
        dataIndex: 0,
        isTranslationCorrect: false,
        enteredText: false,
      })
      return
    }
    this.setState({
      dataIndex: this.state.dataIndex + 1,
      isTranslationCorrect: false,
      enteredText: false,
    })
  }

  render() {
    const { classes } = this.props;
    const { enteredText, data, dataIndex } = this.state;
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
              {this.state.isTranslationCorrect && <p className={classes.translationStatus}>Yay!</p>}
              {!this.state.isTranslationCorrect && this.state.enteredText && <p className={classes.translationStatus}>Try again!</p>}
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