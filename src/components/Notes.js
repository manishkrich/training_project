import React from "react";
import Header from "./Header";
import CreateNote from "./CreateNote";
import Note from "./Note";
import { useState } from "react";
import { Grid } from "@mui/material";
import styled from "styled-components";

const Notes = () => {
  const [addItem, setAddItem] = useState([]);

  const addNote = (note) => {
    setAddItem((prevData) => {
      return [...prevData, note];
    });
  
  };
  const onDelete = (id) => {
    setAddItem((olddata) =>
    olddata.filter((currdata , indx) => {
      return indx !== id;
    }))
  }

  const NewGrid = styled(Grid)`
    background: white;
    box-shadow: 0px 1px 15px 0px lightgrey;
    max-width : 90%;
    position : relative;
    margin : 20px;
    height : 200px;
    margin-left : auto;
 `

    const WrapGrid = styled(Grid)`
    width : 100%;
    margin-left : 20px;
    
  `

  return (
    <>
      <Header />
      <CreateNote passNote={addNote} />
      
      <WrapGrid container spacing={3} className=' mt-5' style={{marginLeft : '0px' ,  width : '100%'}} >
      {addItem.map((val, index) => {        
        return (
          <NewGrid item xs={3}  style={{margin : '20px'}}>
          <Note
            key={index}
            id={index}
            title={val.title}
            content={val.content}
            deleteItem = {onDelete}
          />
          </NewGrid>
        );
      })}
      </WrapGrid>
    </>
  );
};

export default Notes;
