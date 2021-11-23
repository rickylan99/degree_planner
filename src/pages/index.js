//import React from "react"
//import {Card} from '@material-ui/core/Button'

import React, { useState } from 'react';
import {Paper, Select, MenuItem, FormControl, InputLabel} from '@mui/material';
import centered from './styles.css'
import InitialForm from './components/initialForm';
import FirstSemesterForm from './components/firstSemester';

export default function Home() {
  const [view, setView] = React.useState(0);

  const handleSubmit = () => {
    console.log("Clicked")
    setView(view + 1)
  } 

  return (
    <div style={{ backgroundColor: 'maroon', width: '100%', height: '800px'}}>\
      <div className="centered">
        <Paper sx= {{ width: 500, height: 500}} elevation= {18}>
            <div className="centered">
            {(view == 0) ? 
              <InitialForm handleSubmit= {handleSubmit}/> : null
            }
            {(view == 1) ? 
              <FirstSemesterForm/> : null
            }
            </div>
        </Paper>
      </div>
    </div>
  )
}
