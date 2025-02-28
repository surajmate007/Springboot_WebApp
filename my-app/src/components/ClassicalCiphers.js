import axios from 'axios'
import React, {useState} from 'react'

export default function ClassicalCiphers(props) {

    const handleEncClick = async ()=> {
        console.log(`${props.algo} Encryption is clicked"`)

        // Check for empty input
        if (inputText === "" || (inputKey === "" && props.algo !== 'Atbash')) {
            window.alert("Please enter text and key before proceeding.");
            return;
        }
        
        let result = "";
        try{
            if(props.algo === "Ceaser"){
                const response = await axios.post('/api/ceaserEnc', {
                    text : inputText, key : inputKey
                });
                result = response.data;
                if(result !== "") setResult(result);
            }
            else if(props.algo === "Vignere"){
                const response = await axios.post('/api/vignereEnc', {
                    text : inputText, key : inputKey
                });
                result = response.data;
                if(result !== "") setResult(result);
            }
            else if(props.algo === "RailFence"){
                const response = await axios.post('/api/railfenceEnc', {
                    text : inputText, key : inputKey
                });
                result = response.data;
                if(result !== "") setResult(result);
            }
            else if(props.algo === "Atbash"){
                const response = await axios.post('/api/atbashEnc', {
                    text : inputText
                });
                result = response.data;
                if(result !== "") setResult(result);
            }
        }

        catch (error){
            console.error("Error occured while making a request " + error)
        }
    }

    const handleDecClick = async ()=> {
        console.log(`${props.algo} Decryption is clicked`)

        // Check for empty input
        if (inputText === "" || (inputKey === "" && props.algo !== 'Atbash')) {
            window.alert("Please enter text and key before proceeding.");
            return;
        }

        let result = "";
        try{
            if(props.algo === "Ceaser"){
                const response = await axios.post('/api/ceaserDec', {
                    text : inputText, key : inputKey
                });
                result = response.data;
                if(result !== "") setResult(result)
            }
            else if(props.algo === "Vignere"){
                const response = await axios.post('/api/vignereDec', {
                    text : inputText, key : inputKey
                });
                result = response.data;
                if(result !== "") setResult(result)
            }
            else if(props.algo === "RailFence"){
                const response = await axios.post('/api/railfenceDec', {
                    text : inputText, key : inputKey
                });
                result = response.data;
                if(result !== "") setResult(result);
            }
            else if(props.algo === "Atbash"){
                const response = await axios.post('/api/atbashDec', {
                    text : inputText
                });
                result = response.data;
                if(result !== "") setResult(result);
            }
        }

        catch (error){
            console.error("Error occured while making a request " + error)
        }
    }


    const handleOnChangeText = (event) =>{
        console.log("handling onChange of text")
        setText(event.target.value)
    }

    const handleOnChangeKey = (event) =>{
        console.log("handling onChange of Key")
        setKey(event.target.value)
    }

    const handleCopy = ()=> {
        navigator.clipboard.writeText(outputResult);
        console.log("text copied to clipboard")
    }

    const [inputText, setText] = useState("")
    const [inputKey, setKey] = useState("")
    const [outputResult, setResult] = useState("")

    // Determine heading based on the algorithm
    let heading;
    let keyType;
    let keyHeading;

    switch (props.algo) {
        case 'Ceaser':
            heading = "Caesar Cipher";
            keyType = "number";
            keyHeading = "Enter Numeric Key";
            break;

        case 'Vignere':
            heading = "Vigenère Cipher";
            keyType = "text";
            keyHeading = "Enter Text Key";
            break;

        case 'RailFence':
            heading = "Rail Fence Cipher";
            keyType = "number";
            keyHeading = "Enter Numeric key";
            break;

        case 'Atbash':
            heading = "Atbash Cipher";
            keyType = "";
            keyHeading = "No Key Needed";
            break;
        default:
            heading = "Cipher Algorithm";
    }



    return (
        <>
            <figure className="text-center my-4">
            <span className="badge text-bg-primary"><h2>{heading}</h2></span>
                <div className="form-label"> <h4>Enter Text</h4></div>
                <div className="mb-3">
                    <textarea className="form-control" style={{ width: '700px', height: '200px', margin: '0 auto', border:'2px solid' }} value={inputText} onChange={handleOnChangeText} id="myBox" rows="3"></textarea>
                </div>

                <div className="form-label"><h4>{keyHeading}</h4></div>
                <div className="mb-3">
                    <input type={keyType} className="form-control" style={{ width: '700px', height: '40px', margin: '0 auto', border:'2px solid'}} value={inputKey} onChange={handleOnChangeKey}></input>
                </div>

                <div>
                    <button className="btn btn-success mx-3" onClick={handleEncClick}><h5>Encrypt Text</h5></button>
                    <button className="btn btn-danger mx-3" onClick={handleDecClick}><h5>Decrypt Text</h5></button>
                </div>

                <div className="mb-3 my-3">
                    <textarea className="form-control" style={{ width: '700px', height: '200px', margin: '0 auto', border:'2px solid' }} value={outputResult} readOnly id="myBox" rows="3"></textarea>
                </div>

                <div>
                    <button className="btn btn-success" onClick={handleCopy}><h5>Copy Result</h5></button>
                </div>
                
            </figure>

        </>
    )
}
