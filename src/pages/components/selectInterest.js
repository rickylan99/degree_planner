import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import FormLabel from '@material-ui/core/FormLabel';
import FormControl from '@material-ui/core/FormControl';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormHelperText from '@material-ui/core/FormHelperText';
import Checkbox from '@material-ui/core/Checkbox';
import { Button, Paper, TextField} from '@mui/material';
import Box from '@mui/material/Box';
import { red, green, blue, orange } from '@mui/material/colors';



const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  formControl: {
    margin: theme.spacing(3),
  },
}));

export default function CheckboxesGroup(props) {
  const classes = useStyles();
  const [state, setState] = React.useState({
    Software: false,
    DataScience: false,
    Cybersecurity: false,
    GameDevelopment: false,
  });

  const handleChange = (event) => {
    setState({ ...state, [event.target.name]: event.target.checked });
  };

  const { Software, DataScience, Cybersecurity, GameDevelopment } = state;
  const error = [Software, DataScience, Cybersecurity, GameDevelopment].filter((v) => v).length !== 2;

  return (
    <div className='centered'>
      <Paper sx= {{ width: 350, height: 280, overflow: 'auto'}} elevation= {18}>
        <Box sx={{ width: 300 }}>
          <FormControl required error={error} component="fieldset" className={classes.formControl}>
            <FormLabel component="legend">Pick Two Areas of Interest</FormLabel>
            <FormGroup>
              <FormControlLabel
                control={<Checkbox checked={Software} onChange={handleChange} name="Software" />}
                label="Software Engineering"
              />
              <FormControlLabel
                control={<Checkbox checked={DataScience} onChange={handleChange} name="DataScience" />}
                label="Data Science"
              />
              <FormControlLabel
                control={<Checkbox checked={Cybersecurity} onChange={handleChange} name="Cybersecurity" />}
                label="Cybersecurity"
              />
              <FormControlLabel
                control={<Checkbox checked={GameDevelopment} onChange={handleChange} name="GameDevelopment" />}
                label="Game Development"
              />
            </FormGroup>
            <FormHelperText>Only pick 2</FormHelperText>
          </FormControl>
        </Box>
      </Paper>

      <Box sx={{ width: 200, marginTop: 5, marginLeft: 5}}>
          <center> 
            <Button onClick={props.handleSubmit} variant="contained">Next Semester</Button> 
          </center>
        </Box>
    </div>
  );
}