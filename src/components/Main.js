import React, { Component } from 'react';
import '../App.css';
import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Fab from '@material-ui/core/Fab';
import { filterColors, selectedTexts } from '../actions'
import { connect } from 'react-redux'

const styles = theme => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing.unit * 2,
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
    red: {
      backgroundColor: '#f44336',
      color: '#fff',
    },
    yellow:{
      backgroundColor: '#ffff00',
    },
    green: {
      backgroundColor: '#4caf50',
      color:'#fff',
    },
    textArea: {
      width: '100%'
    }
});

class Main extends Component {
  constructor(props) {
    super(props);
    this.state={
      selectedText: '',
      textsArray: [],
      filteredArray: [],
    }
  }

  componentDidMount(){
    document.onmouseup = () => {
      this.setState({
        selectedText:window.getSelection().toString()
      })
    };
  }


  highlight(theColor, text) {
    var inputText = document.getElementById("sel");
    var innerHTML = inputText.innerHTML;
    var index = innerHTML.indexOf(text);
    if (index >= 0) {
     innerHTML = innerHTML.substring(0,index) + "<span class='"+theColor+"'>" + innerHTML.substring(index,index+text.length) + "</span>" + innerHTML.substring(index + text.length);
     inputText.innerHTML = innerHTML;
    }
    var myObj = {'string': text, 'color': theColor};


    this.setState({
      textsArray: [...this.state.textsArray, myObj],
      filteredArray: [...this.state.filteredArray, myObj],
    })

    this.props.selectedTexts(myObj);

  }


  
  render() {
    const { classes } = this.props;
    return (
      <div className="App">
        <div className={classes.root}>
      <Grid container spacing={24}
        direction="row"
        justify="center"
        alignItems="center"
      >
        <Grid item xs={7}  container
          direction="row"
          justify="flex-start"
          alignItems="center"
        >
          <Button variant="contained" className={classes.red} id="redButton" onClick={ () => this.highlight('Main-red-3', this.state.selectedText) }>
            RED
          </Button>
          <Button variant="contained" className={classes.yellow} onClick={ () => this.highlight('Main-yellow-4', this.state.selectedText) }>
            YELLOW
          </Button>
          <Button variant="contained" className={classes.green} onClick={ () => this.highlight('Main-green-5', this.state.selectedText) }>
            GREEN
          </Button>
          </Grid>
          <Grid item xs={7}>
          <code contentEditable="true" id="sel" suppressContentEditableWarning>
          We love innovation, but not just for the sake of it. Technological breakthroughs should have an impact on people’s lives and make them better, right? New ideas and solutions don’t come easy. You need the drive to see and do things differently. Technology needs a kick in the butt every now and then. So we want to be the game changers. We want to deliver that kick, and take the lead. Because there’s always a better solution, and we find it.  
          </code>
          </Grid>
          <Grid item xs={7}  container
            direction="row"
            justify="flex-start"
            alignItems="center"
          >
            <Fab aria-label="Add" className={classes.red} onClick={ () => this.props.filterColors(this.state.textsArray, 'Main-red-3') }>
              <span>R</span>
            </Fab>
            <Fab aria-label="Edit" className={classes.yellow} onClick={ () => this.props.filterColors(this.state.textsArray, 'Main-yellow-4') }>
              <span>Y</span>
            </Fab>
            <Fab aria-label="Edit" className={classes.green} onClick={ () => this.props.filterColors(this.state.textsArray, 'Main-green-5') }>
              <span>G</span>
            </Fab>
          </Grid>
          <Grid item xs={7}>
            <code contentEditable="true" id="sel" suppressContentEditableWarning className={classes.textArea}>
              {
                this.props.filteredArray ?
                  this.props.filteredArray.map(item => item.string).join(', ')
                    :
                  this.state.filteredArray.filter(Boolean).map(function(d, idx){
                   return (<span key={idx}><span className={d.color}>{d.string}</span><span> , </span></span>)
                  })
              }
            </code>
          </Grid>
        </Grid>
    </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
    return {
        selectedText: state.selectedText,
        textsArray: state.textsArray,
        filteredArray: state.filterReducer.filteredArray,
    }
  };
  
  const mapDispatchToProps = (dispatch) => {
    return {
      filterColors: (value, color) => dispatch(filterColors(value, color)),
      selectedTexts: (value) => dispatch(selectedTexts(value)),
    }
  };
  
export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(Main));