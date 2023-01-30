import React from 'react';
import { Drawer, ListItemButton } from '@mui/material';
import { IconButton, List, ListItemIcon, ListItemText } from '@material-ui/core';
import { useState } from 'react';
import MenuIcon from '@mui/icons-material/Menu';

const DrawerComp = () => {
   const [openDrawer,setOpenDrawer] =  useState(false)
  return (
    <>
    <Drawer open={openDrawer} onClose={() => setOpenDrawer(false)}>
        <List>
            <ListItemButton>
                <ListItemIcon>
                    <ListItemText>About</ListItemText>
                    <ListItemText>Inbox</ListItemText>
                    
                    <ListItemText>Archieve</ListItemText>
                    <ListItemText>Trash</ListItemText>
                </ListItemIcon>
            </ListItemButton>
        </List>
    </Drawer>
      <IconButton onClick={()=> setOpenDrawer(!openDrawer)}>
        <MenuIcon></MenuIcon>
      </IconButton>
    </>
  )
}

export default DrawerComp
