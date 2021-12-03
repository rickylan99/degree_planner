import React, { useState } from 'react';
import Box from '@mui/material/Box';
import { Button, Paper, TextField} from '@mui/material';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { withStyles } from "@material-ui/core/styles";

import {preview_data} from './../../data/computer-eng-cs/preview_data';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

const WhiteTextTypography = withStyles({
  root: {
    color: "#FFFFFF"
  }
})(Typography);

//const preview = [];

//const recommendedCourses = first_year_data.first_semester.recommendedCourses;

//const electives = first_year_data.first_semester.electives;

export default function FinalPreviewView(props) {
  const [freshman1, setFreshman1] = React.useState(preview_data.freshmanYear.firstSemester);
  const [freshman2, setFreshman2] = React.useState(preview_data.freshmanYear.secondSemester);

  const [sophomore1, setSophomore1] = React.useState(preview_data.sophomoreYear.firstSemester);
  const [sophomore2, setSophmore2] = React.useState(preview_data.sophomoreYear.secondSemester);

  const [junior1, setJunior1] = React.useState(preview_data.juniorYear.firstSemester);
  const [junior2, setJunior2] = React.useState(preview_data.juniorYear.secondSemester);

  const [senior1, setSenior1] = React.useState(preview_data.seniorYear.firstSemester);
  const [senior2, setSenior2] = React.useState(preview_data.seniorYear.secondSemester);

  const [courseEntered, setCourseEntered] = React.useState('');

  const [hours, setHours] = React.useState(0);

  const [openAddCourse, setOpenAddCourse] = React.useState(false);
  const handleOpenAddCourse = () => setOpenAddCourse(true);
  const handleCloseAddCourse = () => setOpenAddCourse(false);


  const [description, setDescription] = React.useState('')
  const [prerec, setPrerec] = React.useState('')
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = (data) => {
    setDescription(data.description)
    setPrerec(data.prerec)
    setOpen(true);
  };

  const handleClose = () => {
    setDescription('')
    setPrerec('')
    setOpen(false);
  };

  

  return (
    <div>
      <br/>
      <br/>
      <center>
        <WhiteTextTypography variant="h4">
          PREVIEW DEGREE PLAN
        </WhiteTextTypography>
      </center>
      <br/>
      <center>
        <Box sx= {{ width: 300, height: 50, float: "left", marginBottom: 2, marginLeft: 15}}>
          <WhiteTextTypography variant="h5">
            FRESHMAN YEAR
          </WhiteTextTypography>
        </Box>
        <Box sx= {{ width: 300, height: 50, float: "left", marginBottom: 2, marginLeft: 5}}>
          <WhiteTextTypography variant="h5">
            SOPHOMORE YEAR
          </WhiteTextTypography>
        </Box>
        <Box sx= {{ width: 300, height: 50, float: "left", marginBottom: 2, marginLeft: 5}}>
          <WhiteTextTypography variant="h5">
            JUNIOR YEAR
          </WhiteTextTypography>
        </Box>
        <Box sx= {{ width: 300, height: 50, float: "left", marginBottom: 2, marginLeft: 5}}>
          <WhiteTextTypography variant="h5">
            SENIOR YEAR
          </WhiteTextTypography>
        </Box>
        <br/>
        <Paper sx= {{ width: 300, height: 300, float: "left", marginBottom: 2, marginLeft: 15, overflow: 'auto'}} elevation= {18}>
          <center>
            <h3>First Semester:</h3>
            <h4>Total Hours: {hours}</h4>
          </center>
          <Table stickyHeader sx={{ width: 300, maxHeight: 300 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell>Class Number</TableCell>
                <TableCell>Name</TableCell>
                <TableCell>Hours</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              { freshman1.map((row) => (
                <TableRow
                  key={row.id}
                  sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                >
                  <TableCell component="th" scope="row">
                    {row.classNumber}
                  </TableCell>
                  <TableCell onClick={() => {handleClickOpen(row)}}>{row.className}</TableCell>
                  <TableCell>{row.classHours}</TableCell>
                </TableRow>
              )) }
            </TableBody>
          </Table>
        </Paper>

        <Paper sx= {{ width: 300, height: 300, float: "left", marginBottom: 2, marginLeft: 5, overflow: 'auto'}} elevation= {18}>
          <center>
            <h3>First Semester:</h3>
            <h4>Total Hours: {hours}</h4>
          </center>
          <Table stickyHeader sx={{ width: 300, maxHeight: 300 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell>Class Number</TableCell>
                <TableCell>Name</TableCell>
                <TableCell>Hours</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              { sophomore1.map((row) => (
                <TableRow
                  key={row.id}
                  sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                >
                  <TableCell component="th" scope="row">
                    {row.classNumber}
                  </TableCell>
                  <TableCell onClick={() => {handleClickOpen(row)}}>{row.className}</TableCell>
                  <TableCell>{row.classHours}</TableCell>
                </TableRow>
              )) }
            </TableBody>
          </Table>
        </Paper>

        <Paper sx= {{ width: 300, height: 300, float: "left", marginBottom: 2, marginLeft: 5, overflow: 'auto'}} elevation= {18}>
          <center>
            <h3>First Semester:</h3>
            <h4>Total Hours: {hours}</h4>
          </center>
          <Table stickyHeader sx={{ width: 300, maxHeight: 300 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell>Class Number</TableCell>
                <TableCell>Name</TableCell>
                <TableCell>Hours</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              { junior1.map((row) => (
                <TableRow
                  key={row.id}
                  sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                >
                  <TableCell component="th" scope="row">
                    {row.classNumber}
                  </TableCell>
                  <TableCell onClick={() => {handleClickOpen(row)}}>{row.className}</TableCell>
                  <TableCell>{row.classHours}</TableCell>
                </TableRow>
              )) }
            </TableBody>
          </Table>
        </Paper>

        <Paper sx= {{ width: 300, height: 300, float: "left", marginBottom: 2, marginLeft: 5, overflow: 'auto'}} elevation= {18}>
          <center>
            <h3>First Semester:</h3>
            <h4>Total Hours: {hours}</h4>
          </center>
          <Table stickyHeader sx={{ width: 300, maxHeight: 300 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell>Class Number</TableCell>
                <TableCell>Name</TableCell>
                <TableCell>Hours</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              { senior1.map((row) => (
                <TableRow
                  key={row.id}
                  sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                >
                  <TableCell component="th" scope="row">
                    {row.classNumber}
                  </TableCell>
                  <TableCell onClick={() => {handleClickOpen(row)}}>{row.className}</TableCell>
                  <TableCell>{row.classHours}</TableCell>
                </TableRow>
              )) }
            </TableBody>
          </Table>
        </Paper>
        <br/>
        <Paper sx= {{ width: 300, height: 300, float: "left", marginBottom: 2, marginLeft: 15, overflow: 'auto'}} elevation= {18}>
          <center>
            <h3>First Semester:</h3>
            <h4>Total Hours: {hours}</h4>
          </center>
          <Table stickyHeader sx={{ width: 300, maxHeight: 300 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell>Class Number</TableCell>
                <TableCell>Name</TableCell>
                <TableCell>Hours</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              { freshman2.map((row) => (
                <TableRow
                  key={row.id}
                  sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                >
                  <TableCell component="th" scope="row">
                    {row.classNumber}
                  </TableCell>
                  <TableCell onClick={() => {handleClickOpen(row)}}>{row.className}</TableCell>
                  <TableCell>{row.classHours}</TableCell>
                </TableRow>
              )) }
            </TableBody>
          </Table>
        </Paper>

        <Paper sx= {{ width: 300, height: 300, float: "left", marginBottom: 2, marginLeft: 5, overflow: 'auto'}} elevation= {18}>
          <center>
            <h3>First Semester:</h3>
            <h4>Total Hours: {hours}</h4>
          </center>
          <Table stickyHeader sx={{ width: 300, maxHeight: 300 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell>Class Number</TableCell>
                <TableCell>Name</TableCell>
                <TableCell>Hours</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              { sophomore2.map((row) => (
                <TableRow
                  key={row.id}
                  sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                >
                  <TableCell component="th" scope="row">
                    {row.classNumber}
                  </TableCell>
                  <TableCell onClick={() => {handleClickOpen(row)}}>{row.className}</TableCell>
                  <TableCell>{row.classHours}</TableCell>
                </TableRow>
              )) }
            </TableBody>
          </Table>
        </Paper>

        <Paper sx= {{ width: 300, height: 300, float: "left", marginBottom: 2, marginLeft: 5, overflow: 'auto'}} elevation= {18}>
          <center>
            <h3>First Semester:</h3>
            <h4>Total Hours: {hours}</h4>
          </center>
          <Table stickyHeader sx={{ width: 300, maxHeight: 300 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell>Class Number</TableCell>
                <TableCell>Name</TableCell>
                <TableCell>Hours</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              { junior2.map((row) => (
                <TableRow
                  key={row.id}
                  sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                >
                  <TableCell component="th" scope="row">
                    {row.classNumber}
                  </TableCell>
                  <TableCell onClick={() => {handleClickOpen(row)}}>{row.className}</TableCell>
                  <TableCell>{row.classHours}</TableCell>
                </TableRow>
              )) }
            </TableBody>
          </Table>
        </Paper>

        <Paper sx= {{ width: 300, height: 300, float: "left", marginBottom: 2, marginLeft: 5, overflow: 'auto'}} elevation= {18}>
          <center>
            <h3>First Semester:</h3>
            <h4>Total Hours: {hours}</h4>
          </center>
          <Table stickyHeader sx={{ width: 300, maxHeight: 300 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell>Class Number</TableCell>
                <TableCell>Name</TableCell>
                <TableCell>Hours</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              { senior2.map((row) => (
                <TableRow
                  key={row.id}
                  sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                >
                  <TableCell component="th" scope="row">
                    {row.classNumber}
                  </TableCell>
                  <TableCell onClick={() => {handleClickOpen(row)}}>{row.className}</TableCell>
                  <TableCell>{row.classHours}</TableCell>
                </TableRow>
              )) }
            </TableBody>
          </Table>
        </Paper>
      </center>


      <Dialog
      open={open}
      onClose={handleClose}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          {"Course Description"}
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            {description}
          </DialogContentText>
          <br/>
          <DialogContentText id="alert-dialog-description">
            {prerec}
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Ok</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}