import React, { useState } from 'react';
import Box from '@mui/material/Box';
import { Button, Paper, TextField} from '@mui/material';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';

import {first_year_data} from './../../data/computer-eng-cs/freshman_year_data';


//const preview = [];

//const recommendedCourses = first_year_data.first_semester.recommendedCourses;

//const electives = first_year_data.first_semester.electives;

export default function FirstSemesterView() {
  const [preview, setPreview] = React.useState([]);
  const [recommendedCourses, setRecommendedCourses] = React.useState(first_year_data.first_semester.recommendedCourses);
  const [electives, setElectives] = React.useState(first_year_data.first_semester.electives);

  const [courseEntered, setCourseEntered] = React.useState('');

  const [hours, setHours] = React.useState(0);

  const addCourse = (data) => {

    // check if class was already added
    let alreadyAdded = false
    for(let i = 0; i < preview.length; i++){
      if(preview[i].classNumber == data.classNumber){
        alreadyAdded = true
      }
    }

    if (!alreadyAdded){
      const previewLen = preview.length
      data.id = previewLen

      preview.push(data)

      const newPreview = preview.slice()
      setPreview(newPreview)

      console.log('Finished Adding', preview)
    }

    // const temp_hours = hours + data.classHours
    setHours(hours + data.classHours)

  }

  const removeCourse = (data) => {

    // removing specified row
    preview.splice(data.id, 1)
    const newPreview = preview.slice()

    // resetting row IDs to be sequential
    for(let i = 0; i < newPreview.length; i++){
      newPreview[i].id = i
    }

    setPreview(newPreview)
    setHours(hours - data.classHours)
  }

  const handleCourseChange = (event) => {
    setCourseEntered(event.target.value)
  }

  const handleCourseAddition = (event) => {
    console.log("Add course", courseEntered)
    setCourseEntered('')
  }

  return (
    <div className="centered">
      <center>
        <h1> FRESHMAN YEAR - 1st SEMESTER </h1>
      </center>
      <Paper sx= {{ width: 350, height: 600, float: "left", overflow: 'auto'}} elevation= {18}>
        <center>
          <h3>Preview of Freshman Year First Semester: </h3>
          <h4>Total Hours: {hours}</h4>
        </center>
        <Table stickyHeader sx={{ width: 300, maxHeight: 600 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Class Number</TableCell>
              <TableCell>Name</TableCell>
              <TableCell>Hours</TableCell>
              <TableCell align="right"></TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            { preview.map((row) => (
              <TableRow
                key={row.id}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {row.classNumber}
                </TableCell>
                <TableCell>{row.className}</TableCell>
                <TableCell>{row.classHours}</TableCell>
                <TableCell>
                  <Button onClick={() => {removeCourse(row)}} sx={{ width: 2.5 }} variant="contained" color="success">Remove</Button>
                </TableCell>
              </TableRow>
            )) }
          </TableBody>
        </Table>
      </Paper>

      <Paper sx= {{ width: 350, height: 240, float: "right", marginLeft: 5, marginBottom: 2, overflow: 'auto'}} elevation= {18}>
        <Box sx={{ width: 300, maxHeight: 300 }}>
          <center>
            <h3 >Recommened Courses: </h3>
          </center>
          <Table sx={{ width: 300, maxHeight: 300}} aria-label="sticky table">
          <TableHead>
            <TableRow>
              <TableCell>Class Number</TableCell>
              <TableCell>Name</TableCell>
              <TableCell>Hours</TableCell>
              <TableCell align="right"></TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {recommendedCourses.map((row) => (
              <TableRow
                key={row.name}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {row.classNumber}
                </TableCell>
                <TableCell>{row.className}</TableCell>
                <TableCell>{row.classHours}</TableCell>
                <TableCell align="left">
                  <Button onClick={() => {addCourse(row)}} sx={{ width: 1.5 }} variant="contained" color="success">Add</Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
        </Box>
      </Paper>
      <Paper sx= {{ width: 350, height: 240, float: "right", marginLeft: 5, marginBottom: 2,  overflow: 'auto'}} elevation= {18}>
        <Box sx={{ width: 300 }}>
          <center>
            <h3>Electives: (Select 1)</h3>
          </center>
          <Table sx={{ width: 300 , maxHeight: 300 }} aria-label="sticky table">
          <TableHead>
            <TableRow>
              <TableCell>Class Number</TableCell>
              <TableCell>Name</TableCell>
              <TableCell>Hours</TableCell>
              <TableCell align="right"></TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {electives.map((row) => (
              <TableRow
                key={row.name}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {row.classNumber}
                </TableCell>
                <TableCell>{row.className}</TableCell>
                <TableCell>{row.classHours}</TableCell>
                <TableCell align="left">
                  <Button onClick={() => {addCourse(row)}} sx={{ width: 1.5 }} variant="contained" color="success">Add</Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
        </Box>
      </Paper>
      <Paper sx= {{ width: 350, height: 175, float: "right", marginLeft: 5, overflow: 'auto'}} elevation= {18}>
        <Box sx={{ width: 300 }}>
          <center>
            <h3> Add other course: </h3>
          </center>
          <TextField sx={{ marginLeft: 2, marginBottom: 2}} fullWidth id="outlined-basic" label="Course Number" variant="outlined" value={courseEntered} onChange={handleCourseChange}/>
          <br/>
          <center> 
            <Button onClick={handleCourseAddition} variant="contained" color="success">Add</Button> 
          </center>
        </Box>
      </Paper>
    </div>
  );
}