//import React from "react"
//import {Card} from '@material-ui/core/Button'

import React, { useState } from 'react';
import {Paper, Select, MenuItem, FormControl, InputLabel, Button} from '@mui/material';
import centered from './styles.css'
import InitialView from './components/initialForm';
import FirstSemesterView from './components/firstSemester';
import SecondSemesterView from './components/secondSemester';
import SelectInterestView from './components/selectInterest';
import SevenSemesterView from './components/sevenSemester';
import EightSemesterView from './components/eightSemester';
import FinalPreviewView from './components/finalPreview';

export default function Home() {
  const [view, setView] = React.useState(0);

  const handleSubmit = () => {
    console.log("Clicked")
    setView(view + 1)
  } 

  return (
    <div style={{ backgroundColor: 'maroon', width: '100%', height: '900px'}}>
            {(view == 0) ? 
              <InitialView handleSubmit={handleSubmit}/> : null
            }
            {(view == 1) ? 
              <FirstSemesterView handleSubmit={handleSubmit}/> : null
            }
            {(view == 2) ?
              <SecondSemesterView handleSubmit={handleSubmit}/> : null
            }
            {(view == 3) ?
              <div>
                <SelectInterestView/>
                <br/>
                <Button onClick={handleSubmit} variant="contained">Next Semester</Button> 
              </div> : null
            }
            {(view == 4) ?
              <SevenSemesterView handleSubmit={handleSubmit}/> : null
            }
            {(view == 5) ? 
              <EightSemesterView handleSubmit={handleSubmit}/> : null
            }
            {(view == 6) ? 
              <FinalPreviewView handleSubmit={handleSubmit}/> : null
            }
    </div>
  )
}
