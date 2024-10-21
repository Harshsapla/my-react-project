import React, {useState} from 'react'
import PropTypes from 'prop-types';



export default function Textform(props) {
  const handleUpClick = ()=>{
    //console.log("Uppercase was clicked" + text);
    let newText = text.toUpperCase();
    setText(newText)
    props.showAlert("converted to uppercase!" , "success");
  }
  const handleLoClick = ()=>{
    //console.log("Uppercase was clicked" + text); 
    let newText = text.toLowerCase();
    setText(newText)
    props.showAlert("converted to lowercase!" , "success");
  }
  const handleclearclick= ()=>{
    //console.log("Uppercase was clicked" + text);
    let newText = " "
    setText(newText)
  }

  const handleOnChange = ()=>{
    //console.log("On change");
    setText(event.target.value);
  }
  const [ text , setText ] =useState('');

  
  return (
    <div>
      <div className="container" style={{ color : props.mode==='dark'?'white':'#01101c'}} >
      <h1>{props.heading} </h1>
      </div>
      
      <div className="mb-3 ">
  
  
  <textarea className="form-control" value = {text} onChange={handleOnChange} style={{backgroundColor : props.mode==='dark'?'grey':'white' , color:props.mode==='dark'?'white':'#042743'}} id="myBox" rows="12"></textarea>
</div>
<button className = "btn btn-primary mx-2" onClick={handleUpClick}> convert to Uppercase</button>
<button className = "btn btn-primary mx-2" onClick={handleLoClick}> convert to Lowercase</button>
<button className = "btn btn-primary mx-2" onClick={handleclearclick}> clear Text</button>
<div className="container my-2" style={{ color : props.mode==='dark'?'white':'#01101c'}}>
  <h2>Your text summary</h2>
  <p> {text.split(" ").length}words and {text.length}characters</p>
  <p>{0.008 * text.split(" ").length}Minutes read</p>
  <h2>Preview</h2>
  <p>{text.length>0 ? text:"Enter something in the textbox above to preview it here"}</p>
</div>
    </div>
    
  )
}
