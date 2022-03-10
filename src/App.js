import { useState } from 'react';
import './App.css';
import About from './components/About';
import Alert from './components/Alert';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

function App() {
  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);
  const [greenColor, setGreenColor] = useState(false);

  const toggleBodyColor = () => {
    if (!greenColor) {
      document.body.style.backgroundColor = '#1a771a';
      showAlert('Green background has been set', 'success');
    } else {
      document.body.style.backgroundColor = (mode === 'light' ? 'white' : '#042743');
    }
    setGreenColor(!greenColor);
  }

  const showAlert = (message, type) => {
    setAlert({
      message,
      type
    });
    setTimeout(() => {
      setAlert(null);
    }, 2000);
  }

  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = '#042743';
      showAlert("Dark Mode has been set", "success");
    } else {
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Light Mode has been set", "success");
    }
    setGreenColor(false);
  }
  return (
    <Router>
      <Navbar appName="TextUtils" aboutText="About" mode={mode} toggleMode={toggleMode} toggleBodyColor={toggleBodyColor}
        greenColor={greenColor} />
      <Alert alert={alert} />
      <div className="container my-3">

        <Routes>
          <Route exact path="/about"
            element={<About mode={mode}/>}>
          </Route>
          
          <Route exact path="/"
            element={<TextForm heading="Enter the Text to Analyze below" mode={mode} showAlert={showAlert} />}>
          </Route>
        </Routes>
        
        {/* <About/> */}
      </div>
    </Router>
  );
}

export default App;
