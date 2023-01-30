import React from "react";
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import styled from "styled-components";
import { Typography } from "@mui/material";
import { Grid, Paper } from "@material-ui/core";
import {Box} from '@material-ui/core'
import Link from '@mui/material/Link';


const UserProfile = () => {
  const NewDiv = styled.div`
       box-shadow: 0 2px 5px 1px #dddddd;
    margin-top: 4rem;
    padding: 40px;
    background: white;
    border-radius: 16px;  
  `;

  const NewImg = styled.img`
  width:50%;
  border-radius:50%;`

  const toDiv = styled.div`
  text-align:center;`
  return (
    <>
      <NewDiv className="container em-profile">
        <Grid>
          <Box className="row">
            <toDiv className="col-md-4">
              <NewImg src="user.jpg" alt=""  />
              <h3>Manish Chauhan</h3>
                <h6>Developer</h6>
            </toDiv>

            <Box className="col-md-6">
              <Box className="profile-head">
                
                <Box className="col-md-8  about-info">
              <Box className="tab-content profile-tab" id="myTabContent">
                <Box className="tab-pane fade show active"  role='tabpanel'>
                  <Box className="row mt-5">
                    <Box className="col-md-6">
                      <label>user ID</label>
                    </Box>
                    <Box className="col-md-6">
                      <p>987654321</p>
                    </Box>
                  </Box>
                  <Box className="row ">
                    <Box className="col-md-6">
                      <label>DOB</label>
                    </Box>
                    <Box className="col-md-6">
                      <p>11/12/1998</p>
                    </Box>
                  </Box>
                  <Box className="row ">
                    <Box className="col-md-6">
                      <label>Email</label>
                    </Box>
                    <Box className="col-md-6">
                      <p>manishrajput000766@gmail.com</p>
                    </Box>
                  </Box>
                  <Box className="row ">
                    <Box className="col-md-6">
                      <label>Phone</label>
                    </Box>
                    <Box className="col-md-6">
                      <p>8866795869</p>
                    </Box>
                  </Box>
                  <Box className="row ">
                    <Box className="col-md-6">
                      <label>Profession</label>
                    </Box>
                    <Box className="col-md-6">
                      <p>React JS Developer</p>
                    </Box>
                  </Box>
                </Box>
              </Box>
            </Box>
              </Box>
            </Box>
           
           <Box className="col-md-2">
           <Typography>Work Link</Typography>
           <Link href="https://www.linkedin.com/in/manish-chauhan-0552601aa">Linkedin</Link>
           </Box>
        

          </Box>
          <Box className="row">
            {/* left side */}
            <Box className="col-md-4">
              <Box className="profile-work">
                <Link href="#"></Link>
              </Box>
            </Box>
            {/* right side */}
            
          </Box>
        </Grid>
      </NewDiv>
    </>
  );
};

export default UserProfile;
