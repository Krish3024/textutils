import React, { useState } from 'react'

export default function TextForm(props) {
    const handleUpClick = () => {
        console.log("Uppercase was clicked " + text);
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("Converted to upper Case", "success");
    }
    const handleLowClick = () => {
        console.log("Uppercase was clicked " + text);
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert("Converted to lower Case", "success");
    }
    const handleClearClick = () => {
        console.log("Clear was clicked ");
        let newText = '';
        setText(newText);
        props.showAlert("Message Cleared", "success");
    }
    const handleOnChange = (event) => {
        console.log("Uppercase was clicked")
        setText(event.target.value)
    }
    const handleCopy = () =>{
        console.log("I am Copy");
        var text = document.getElementById("myBox");
        text.select();
        text.setSelectionRange(0, 9999);
        navigator.clipboard.writeText(text.value);
        props.showAlert("Message Copied", "success");
    }
    const handleSpaces = () =>{
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "))
        props.showAlert("Extra Spaces removed", "success");
    }
    const [text, setText] = useState('');
    // setText("New Text"); 
    return (
        <>
            <div className='container' style={{color: props.mode==='dark'?'white':'black'}}>
                <h1>{props.heading}</h1>
                <div className="mb-3">
                    <textarea className="form-control" onChange={handleOnChange} style={{backgroundColor: props.mode==='dark'?'#343a40':'white'}} id="myBox" rows="8" value={text}></textarea>
                </div>
                <button className="btn btn-primary mx-1" onClick={handleUpClick} >Convert to UpperCase</button>
                <button className="btn btn-primary mx-1" onClick={handleLowClick} >Convert to LowerCase</button>
                <button className="btn btn-outline-primary mx-1" onClick={handleClearClick} >Clear</button>
                <button className="btn btn-outline-primary mx-1" onClick={handleCopy} >Copy Text</button>
                <button className="btn btn-outline-primary mx-1" onClick={handleSpaces} >Remove Extra Spaces</button>
            </div>
            <div className="container my-3" style={{color: props.mode==='dark'?'white':'black'}}>
                <h1>Your Text Summary</h1>
                <p>{text.split(" ").length} words, {text.length} characters</p>
                <p>{0.125 * text.split(" ").length} minutes read</p>
                <h2>Preview</h2>
                <p>{text.length>0?text:"Enter something above to preview"}</p>
            </div>
        </>
    )
}
