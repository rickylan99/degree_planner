import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { TextField , Button, Paper} from '@mui/material';

export default function InitialView(props) {
  const [name, setName] = React.useState('');
  const [classification, setClass] = React.useState('');
  const [major, setMajor] = React.useState('');

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleClassChange = (event) => {
    setClass(event.target.value);
  };

  const handleMajorChange = (event) => {
    setMajor(event.target.value);
  };

  return (
    <div className="centered">
      <Paper sx= {{ width: 500, height: 500}} elevation= {18}>
        <div className="centered">
          <Box sx={{ width: 300, marginBottom: 5 }}>
            <h3>Enter your information below to get started:</h3>
            <TextField fullWidth id="outlined-basic" label="Name" variant="outlined" onChange={handleNameChange}/>
          </Box>

          <Box sx={{ width: 300, marginBottom: 5 }}>
            <FormControl fullWidth>
              <InputLabel id="demo-simple-select-label">Major</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={major}
                label="Major"
                onChange={handleMajorChange}
              >
                <MenuItem value={1}>Computer Science</MenuItem>
                <MenuItem value={2}>Computer Engineering (CS Track)</MenuItem>
                <MenuItem value={3}>Computer Engineering (EE Track</MenuItem>
              </Select>
            </FormControl>
          </Box>

          <Box sx={{ width: 300, marginBottom: 5 }}>
            <center> 
              <Button onClick={props.handleSubmit} variant="outlined">Submit</Button> 
            </center>
          </Box>
        </div>
      </Paper>
    </div>
  );
}