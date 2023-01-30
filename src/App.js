import "./App.css";
import SignIn from "./components/SignIn";
import { ThemeProvider } from 'styled-components'
import ErrorBoundary from "./components/ErrorBoundary";
import Notes from "./components/Notes";
import {  Route, Routes } from "react-router-dom";
import About from "./components/About";
import Archieve from "./components/Archieve";
import Trash from "./components/Trash";
import UserProfile from "./components/UserProfile";

function App() {
  const theme = {
    color: {
      textColor : "red",
      bg:"radial-gradient (100% 100% at 100% 0,#5adaff 0 ,#5468ff 100%)"
    },
  };


  return (
    
      <ThemeProvider theme={theme}>
        <ErrorBoundary>
          <Routes>
            <Route path="/" element={<SignIn/>}/>
            <Route path="/notes" element={<Notes/>}/>
            <Route path="/about" element={<About/>}/>
            <Route path="/archieve" element={<Archieve/>}/>
            <Route path="/trash" element={<Trash/>}/>
            <Route path="/user" element={<UserProfile/>}/>
          </Routes>
        </ErrorBoundary>
      </ThemeProvider>
    
  );
}

export default App;
