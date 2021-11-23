//import React from "react"
//import {Card} from '@material-ui/core/Button'

import * as React from 'react';
import {Paper} from '@mui/material';
import centered from './styles.css'


export default function Home() {
  return (
    <div style={{ backgroundColor: 'maroon', width: '100%', height: '800px'}}>\
      <div class="centered">
        <Paper sx= {{ width: 500, height: 500}} elevation= '18'>
            <div class="centered">
              Add first form here
            
            </div>
        </Paper>
      </div>
    </div>
  )
}
