import { useState } from 'react'

//import reactLogo from './assets/react.svg'
//import viteLogo from '/vite.svg'
//import { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Textform from './components/Textform';
//import About from './components/about';
import Alert from './components/Alert';



function App() {
  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);
   const showAlert = (message , type)=>{
    setAlert({
      msg : message,
      type : type
    })
    setTimeout(() => {
      setAlert(null);
    }, 1000);

   }
   const toggleMode = ()=>{
    if(mode == 'light'){
      setMode ('dark');
      document.body.style.backgroundColor = '#01101c';
      showAlert("Dark mode has been enabled", "success");

    }
    else{
      setMode ('light') ;
      document.body.style.backgroundColor = 'white';
      showAlert("light mode has been enabled", "success");
    }
   }
  return (
    <> 
    
   
  
<Navbar title = "Textutils " aboutText = "About Textutils"  mode= {mode} toggleMode={toggleMode}/

>


<Alert alert ={alert}/>
<div className="container">
<Textform  showAlert ={showAlert} heading = "Enter the text to Analyze Below" mode = {mode} ></Textform>
{/*<About/>*/}
</div>


      </>
  );
  
}
 

export default App;


