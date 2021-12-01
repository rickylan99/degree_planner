import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { TextField , Button, Paper, Checkbox} from '@mui/material';
import { red, green, blue, orange } from '@mui/material/colors';

const label = { inputProps: { 'aria-label': 'Checkbox demo' } };

export default function SelectInterest(props) {
  return (
    <div>
      <Checkbox
        {...label}
        defaultChecked
        sx={{
          color: orange[800],
          '&.Mui-checked': {
            color: orange[600],
          },
          '& .MuiSvgIcon-root': { fontSize: 28 }
        }}
      />
      <Checkbox
        {...label}
        defaultChecked
        sx={{
          color: green[800],
          '&.Mui-checked': {
            color: green[600],
          },
          '& .MuiSvgIcon-root': { fontSize: 28 }
        }}
      />
      <Checkbox
        {...label}
        defaultChecked
        sx={{
          color: blue[800],
          '&.Mui-checked': {
            color: blue[600],
          },
          '& .MuiSvgIcon-root': { fontSize: 28 }
        }}
      />
      <Checkbox
        {...label}
        defaultChecked
        sx={{
          color: red[800],
          '&.Mui-checked': {
            color: red[600],
          },
          '& .MuiSvgIcon-root': { fontSize: 28 }
        }}
      />
    </div>
  );
}