//import React from "react"
//import {Card} from '@material-ui/core/Button'

import React, { useState } from 'react';
import {Paper, Select, MenuItem, FormControl, InputLabel} from '@mui/material';
import centered from './styles.css'
import InitialView from './components/initialForm';
import FirstSemesterView from './components/firstSemester';

export default function Home() {
  const [view, setView] = React.useState(0);

  const handleSubmit = () => {
    console.log("Clicked")
    setView(view + 1)
  } 

  return (
    <div style={{ backgroundColor: 'maroon', width: '100%', height: '800px'}}>
            {(view == 0) ? 
              <InitialView handleSubmit= {handleSubmit}/> : null
            }
            {(view == 1) ? 
              <FirstSemesterView/> : null
            }
    </div>
  )
}
