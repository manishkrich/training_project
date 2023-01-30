import * as React from "react";
import { styled, useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import CssBaseline from "@mui/material/CssBaseline";
import MuiAppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import MailIcon from "@mui/icons-material/Mail";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { Button } from "@material-ui/core";
import MenuItem from "@mui/material/MenuItem";
import Popover from "@mui/material/Popover";
import PersonIcon from '@mui/icons-material/Person';

const drawerWidth = 240;

const Main = styled("main", { shouldForwardProp: (prop) => prop !== "open" })(
  ({ theme, open }) => ({
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: `-${drawerWidth}px`,
    ...(open && {
      transition: theme.transitions.create("margin", {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen,
      }),
      marginLeft: 0,
    }),
  })
);

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  transition: theme.transitions.create(["margin", "width"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: `${drawerWidth}px`,
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
  justifyContent: "flex-end",
}));

export default function PersistentDrawerLeft() {
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);
  const [value, setValue] = useState();
  const [nav, setNav] = React.useState("");
  const [anchorEl, setAnchorEl] = React.useState(null);

  const navigate = useNavigate();

  const goToAbout = () => {
    navigate("/about");
  };
  const goToArchieve = () => {
    navigate("/archieve");
  };
  const goToTrash = () => {
    navigate("/trash");
  };
  const goToSignin = () => {
    navigate("/");
  };
  const goToNotes = () => {
    navigate("/notes");
  };

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  const toUserProfile = () => {
    navigate("/user");
  };

  const toAbout = () => {
    navigate("/about");
  };

  // const NewButton = styled(Button)`
  //   position: absolute;
  //   right:0;
  // `;

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const newOpen = Boolean(anchorEl);
  const id = newOpen ? "simple-popover" : undefined;

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar position="fixed" open={open}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            sx={{ mr: 2, ...(open && { display: "none" }) }}
          >
            <MenuIcon />
          </IconButton>

          <Typography variant="h6" noWrap component="div" onClick={goToNotes}>
            Note Manager
          </Typography>

          {/* <NewFormControl > 
            <AccountCircleIcon />
            <NewSelect onChange={handleChange}>
              <MenuItem value={toAbout}>About</MenuItem>
              <MenuItem value={toUserProfile}>User Profile</MenuItem>
              <MenuItem value={goToSignin}>Logout</MenuItem>
            </NewSelect>
          </NewFormControl> */}
          <Button
            aria-describedby={id}
            variant="text"
            onClick={handleClick}
            id="demo-positioned-button"
            style={{position : 'absolute',right : 0}}
            aria-controls={newOpen ? 'demo-positioned-menu' : undefined}

            aria-haspopup="true"

            aria-expanded={newOpen ? 'true' : undefined}
          >
            <PersonIcon
              onClick={handleClick}
              size="small"
              style={{color: 'white'}}
              sx={{ ml: 2 }}
              aria-controls={newOpen ? "account-menu" : undefined}
              aria-haspopup="true"
              aria-expanded={newOpen ? "true" : undefined}
            >
              <AccountCircleIcon />

            </PersonIcon>
            </Button>

          <Popover
            id={id}
            open={newOpen}
            anchorEl={anchorEl}
            onClose={handleClose}
            anchorOrigin={{
              vertical: "bottom",
              horizontal: "left",
            }}
          >
            <Box sx={{padding : '15px' }}>
            <MenuItem  onClick={toAbout}>About</MenuItem>
              <MenuItem  onClick={toUserProfile}>User Profile</MenuItem>
              <MenuItem  onClick={goToSignin}>Logout</MenuItem>
            </Box>
          </Popover>

        </Toolbar>
      </AppBar>
      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          "& .MuiDrawer-paper": {
            width: drawerWidth,
            boxSizing: "border-box",
          },
        }}
        variant="persistent"
        anchor="left"
        open={open}
      >
        <DrawerHeader>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === "ltr" ? (
              <ChevronLeftIcon />
            ) : (
              <ChevronRightIcon />
            )}
          </IconButton>
        </DrawerHeader>
        <Divider />
        <List>
          {["Inbox", "Archieved" , "Trash"].map((text, index) => (
            <ListItem key={text} disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  {index % 2 === 0 ? <MailIcon />  : <InboxIcon />}
                </ListItemIcon>
                <ListItemText primary={text} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
        {/* <List>
          {["Trash"].map((text, index) => (
            <ListItem key={text} disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                </ListItemIcon>
                <ListItemText primary={text} />
              </ListItemButton>
            </ListItem>
          ))}
        </List> */}
      </Drawer>
    </Box>
  );
}
