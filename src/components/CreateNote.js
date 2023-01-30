import React, { useState } from "react";
import * as yup from "yup";
import { Formik, Form } from "formik";
import { Grid, Button, TextField, Box } from "@material-ui/core";
import AddIcon from "@mui/icons-material/Add";
import styled from "@emotion/styled";

const PREFIX = "CreateNote";

const classes = {
  plusIcon: `${PREFIX}-plusIcon`,
  addbtn: `${PREFIX}-addbtn`,
  box: `${PREFIX}-box`,
};

const StyleGrid = styled(Grid)(({ theme }) => {
  return {
    position: "relative",
    [`& .${classes.plusIcon}`]: {
      backgroundColor: "blue",
      borderRadius: "50%",
      color: "white",
      padding: 3,
      width: 40,
      height: "auto",
    },
    [`& .${classes.addbtn}`]: {
      position: "absolute",
      right: "1%",
      top: "40rem",
    },
    [`& .${classes.box}`]: {
      textAlign: "center",
      height: "300px",
      width : '300px',
      boxShadow: "0px 0px 11px 0px #dddddd",
      padding: "10px 20px",
      background: "white",
      borderRadius: 16,
      position:'absolute',
      top: '20rem',
      right:'2rem'
    },
  };
});

let initialValues = {
  title: '',
  content: '',
};

const signInSchema = yup.object().shape({
  title: yup.string().required("this field not be blank"),
  content: yup.string()
    .required("content must not be blank")
    .min(8, "content should me more than 8 characters"),
});

const CreateNote = () => {
  const [expand, setExpand] = useState(false);

  return (
    <StyleGrid container>
      <Formik
        initialValues={initialValues}
        enableReinitialize
        validationSchema={signInSchema}
        onSubmit={(values) => {
          console.log(values);
        }}
      >
        {({ handleSubmit, handleChange, touched, errors, values }) => {
          return (
            expand && (
              <Form onSubmit={handleSubmit}>

              <Grid container>
                
                <Box className={classes.box}>
                    <Grid xs={12} className='mt-3'>
                    <TextField
                      name="title"
                      placeholder="Title"
                      variant="outlined"
                      fullWidth
                    />
                    </Grid>
                    <Grid xs={12} className='mt-3'>
                    <TextField
                      name="content"
                      placeholder="Write a Note"
                      multiline
                      variant="outlined"
                      fullWidth
                      minRows={5}
                    />
                    </Grid>
                    <Grid xs={12} className='mt-3'>
                    <Button variant="contained" color="primary" type="submit">
                      Submit
                    </Button>
                    </Grid>
                    
                </Box>
              </Grid>
              </Form>

            )
          );
        }}
      </Formik>
      <Button onClick={() => setExpand(true)} className={classes.addbtn}>
        <AddIcon className={classes.plusIcon} />
      </Button>
    </StyleGrid>
  );
};

export default CreateNote;
