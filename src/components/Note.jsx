import React from "react";
import ArchiveIcon from '@mui/icons-material/Archive';
import {  Grid, styled, Typography } from "@material-ui/core";



const Note = (props) => {
    const deleteNote = () => {
        props.deleteItem(props.id);
    }

    
  return (
    <Grid style={{position: 'relative'}}>
      <Typography variant="h2">{props.title}</Typography>
      <br />
      <Typography>{props.content} </Typography>
      
        <Grid  style={{position : 'absolute', right : 0 , top : 0, height : '200px'}} onClick={deleteNote}>
        <ArchiveIcon style={{color : 'indianred'}} className="deleteIcon" />

        </Grid>
      
    </Grid>
  );
};

export default Note;
