import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { TextField , Button} from '@mui/material';

export default function InitialForm(props) {
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
    <div>
      <Box sx={{ width: 300, marginBottom: 5 }}>
        <h3>Enter your information below to get started:</h3>
        <TextField fullWidth id="outlined-basic" label="Name" variant="outlined" onChange={handleNameChange}/>
      </Box>
      
      <Box sx={{ width: 300, marginBottom: 5 }}>
        <FormControl fullWidth sx={{marginBotton: 5}}>
          <InputLabel id="demo-simple-select-label">Classification</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={classification}
            label="Classification"
            onChange={handleClassChange}
          >
            <MenuItem value={1}>Freshman</MenuItem>
            <MenuItem value={2}>Sophmore</MenuItem>
            <MenuItem value={3}>Junior</MenuItem>
            <MenuItem value={4}>Senior</MenuItem>
          </Select>
        </FormControl>
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
          <Button onClick={props.handleSubmit} variant="outlined">Outlined</Button> 
        </center>
      </Box>
    </div>
  );
}