import React, { useState } from 'react'

export default function TextForm(props) {
    const convertUpperCase = () => {
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("Text has been coverted to uppercase", "success");
    }

    const convertLowerCase = () => {
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert("Text has been coverted to lower case", "success");
    }

    const textChanged = (event) => {
        setText(event.target.value);
    }

    const clearText = () => {
        setText('');
        props.showAlert("Text has been cleared", "success");
    }

    const invertCase = () => {
        let s = '';

        for (let i = 0; i < text.length; i++) {
            const element = text.charAt(i);
            if (element === element.toLowerCase()) {
                s = s + element.toUpperCase();
            } else {
                s = s + element.toLowerCase();
            }
        }


        setText(s);
        props.showAlert("Text has been inverted", "success");
    }

    const removeExtraSpaces = () => {
        let newString = text.replace(/\s+/g, ' ').trim();

        setText(newString);
        props.showAlert("Extra Spaces have been removed", "success");
    }
    const [text, setText] = useState('');

    const calculateWords = () => {

        return text.split(/\s+/).filter(x => x.length > 0).length;
    }
    return (
        <>
            <div className="container" style={{ color: props.mode === 'light' ? 'black' : 'white' }}>
                <h4>{props.heading}</h4>

                <div className="mb-3">
                    <textarea className="form-control" id="myText" rows="8" value={text} onChange={textChanged}></textarea>
                </div>

                <button disabled={text.length === 0} className="btn-primary mx-2 my-2" onClick={convertUpperCase}>Convert to Uppercase</button>
                <button disabled={text.length === 0} className="btn-primary mx-2 my-2" onClick={convertLowerCase}>Convert to LowerCase</button>
                <button disabled={text.length === 0} className="btn-primary mx-2 my-2" onClick={clearText}>Clear Text</button>
                <button disabled={text.length === 0} className="btn-primary mx-2 my-2" onClick={invertCase}>Invert Case</button>
                <button disabled={text.length === 0} className="btn-primary mx-2 my-2" onClick={removeExtraSpaces}>Remove Extra Spaces</button>
            </div>
            <div className="container my-3" style={{ color: props.mode === 'light' ? 'black' : 'white' }}>
                <h5>Your Text Summary</h5>
                <p><b>{calculateWords()}</b> words and <b>{text.length}</b> characters</p>
                <p><b>{0.008 * calculateWords()}</b> minutes read (with average reading speed)</p>
                <h5>Preview</h5>
                <p>{text.length > 0 ? text : 'Nothing to preview'}</p>

            </div>
        </>
    )
}
