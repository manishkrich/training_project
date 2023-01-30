import React, {useState}from 'react';
import { AppBar , Tabs } from '@mui/material';
import { Tab, Toolbar } from '@material-ui/core';
import BatchPredictionIcon from '@mui/icons-material/BatchPrediction';
import DrawerComp from './DrawerComp';
import PersistentDrawerLeft from './Persistant'

const Header = () => {
    const [value,setValue] = useState()
    
  return (
    <>
      <AppBar sx={{background : '#6C0BA9'}}>
       
        <PersistentDrawerLeft/>
        {/* <DrawerComp /> */}
      </AppBar>
    </>
  )
}

export default Header
