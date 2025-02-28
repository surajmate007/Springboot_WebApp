import { eventWrapper } from '@testing-library/user-event/dist/utils'
import axios from 'axios'
import { useState } from "react"
import React from 'react'

export default function AdvancedCiphers(props) {

    const handleEncClick = async ()=> {
        console.log(`${props.algo} Encryption is clicked"`)
        
        // let cipherText = "";
        // let secretKey = "";
        try{
            if(props.algo === "AES"){
                // Check for empty input
                if (inputText === "" || (inputKey === "" && inputKeySize === 0)) {
                    window.alert("Please enter text and key before proceeding");
                    return;
                }
                console.log("AES encryption is getting called");
                console.log(inputText);
                console.log(inputKey)
                console.log(inputKeySize)
                const response = await axios.post('/api/aesEnc', {
                    text : inputText, key : inputKey, keySize : inputKeySize
                });
                const {cipherText, secretKey} = response.data;
                console.log("cipherText : " + cipherText + ", secretKey : " + secretKey);
                if(cipherText !== "") setResult(cipherText);
                if(secretKey !== "") setSecretKey(secretKey);
            }
            else if(props.algo === "RSA"){
                if (inputText === "" || keyPath === "") {
                    window.alert("Please enter text and key path before proceeding");
                    return;
                }
                console.log("RSA encryption is getting called");
                const response = await axios.post('/api/rsaEnc', {
                    text : inputText, key : keyPath
                });
                const {cipherText} = response.data;
                console.log("cipherText : " + cipherText);
                if(cipherText !== "") setResult(cipherText);
            }
            else{
                
            }
        }

        catch (error){
            console.error("Error occured while making a request " + error)
        }
    }

    const handleDecClick = async ()=> {
        console.log(`${props.algo} Decryption is clicked`)

        

        try{
            if(props.algo === "AES"){
                console.log("AES decryption is clicked");
                // Check for empty input
                if (inputText === "" || inputKey === "") {
                    window.alert("Please enter text and key before proceeding.");
                    return;
                }
                const response = await axios.post('/api/aesDec', {
                    text : inputText, key : inputKey
                });
                const {cipherText, secretKey} = response.data;  
                let plainText = cipherText;
                if(plainText === "-1"){
                    window.alert("Invalid Secret key, please enter valid secret key");
                }
                else if(plainText !== ""){
                    setResult(plainText);
                }
            }
            else if(props.algo === "RSA"){
                console.log("RSA decryption is clicked");
                // Check for empty input
                if (inputText === "" || keyPath === "") {
                    window.alert("Please enter text and key before proceeding.");
                    return;
                }
                const response = await axios.post('/api/rsaDec', {
                    text : inputText, key : keyPath
                })
                const {cipherText} = response.data;
                let plainText = cipherText;
                if(plainText === -1){
                    window.alert("Invalid Secret key path, please enter valid key path");
                }
                else if(plainText !== ""){
                    setResult(plainText);
                }
            }
        }

        catch (error){
            console.error("Error occured while making a request " + error);
        }
    }




    const handleRSAKeyGenerate = async()=> {
        console.log('RSA Key Pair Generation is Clicked')
        
        try{
            const response = await axios.post('/api/generateRSAKeyPair', {
            })
            window.alert("RSA Key Pair Generated Successfully");
        }
        catch(error){
            window.alert("RSA Key Pair Generation Failed");
            console.log('Error occured during RSA key pair generation ' + error);
        }
    }

    const handleOnChangeText = (event) => {
        console.log("Handling onChange text");
        setText(event.target.value);
    }

    const handleOnChangeKey = (event) => {
        console.log("Handling onChnage of key");
        setKey(event.target.value);
    }

    const handleOnChangeKeyPath = (event) => {
        console.log('Handling onChnage of RSA Key Path')
        setKeyPath(event.target.value);
    }

    const handleKeySelect128 = () =>{
        console.log("Handling 128 bit key select");
        setKeySize(128);
        setKey("128 Bit Key Generation Selected");
    } 
    const handleKeySelect192 = () =>{
        console.log("Handling 192 bit key select");
        setKeySize(192);
        setKey("192 Bit Key Generation Selected");
    } 
    const handleKeySelect256 = () =>{
        console.log("Handling 256 bit key select");
        setKeySize(256);
        setKey("256 Bit Key Generation Selected");
    }
    const handleOnClickKey = () => {
        console.log("Handling click on key area");
        setKeySize(0);
    }

    const handleCopy = ()=> {
        navigator.clipboard.writeText(outputResult);
        console.log("text copied to clipboard")
    }

    const handleKeyCopy = (event) => {
        navigator.clipboard.writeText(secretKey);
        console.log("key copied to clipboard")
    } 


    const [inputText, setText] = useState("")
    const [inputKey, setKey] = useState("")
    const [outputResult, setResult] = useState("")
    const [inputKeySize, setKeySize] = useState(0)
    const [secretKey, setSecretKey] = useState("");
    const [keyPath, setKeyPath] = useState("");

    // Determine heading based on the algorithm
    let heading;

    switch (props.algo) {
        case 'AES':
            heading = "AES Cipher";
            // keyHeading = "Select Key Size to autogenerate Key";
            break;

        case 'RSA':
            heading = "RSA Cipher";
            // keyHeading = "Upload Public or Private Key or Generate Public Key";
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

            
            {props.algo === "AES" ? (
                <>
                    <div className="form-label" aria-label="Basic radio toggle button group"><h4>Select Key Size to autogenerate Key</h4></div>
                    <div>
                        <button className="btn btn-outline-primary mx-3 my-3" onClick={handleKeySelect128}><h5>128 Bit</h5></button>
                        <button className="btn btn-outline-primary mx-3 my-3" onClick={handleKeySelect192}><h5>192 Bit</h5></button>
                        <button className="btn btn-outline-primary mx-3 my-3" onClick={handleKeySelect256}><h5>256 Bit</h5></button>
                    </div>

                    <div className="form-label"><h3></h3></div>
                    <div className="form-label"><h4>Insert Your Own AES Key</h4></div>
                    <div className="mb-3">
                        <input className="form-control" style={{ width: '700px', height: '40px', margin: '0 auto', border:'2px solid'}} value={inputKey} onChange={handleOnChangeKey} onClick={handleOnClickKey}></input>
                    </div>
                </>

            ) : (
                <div className="d-flex justify-content-center align-items-center">
                    <div className="mb-3">
                        <button className="btn btn-outline-primary mx-3 my-3" onClick={handleRSAKeyGenerate}><h5> Generate RSA Key-Pair</h5></button>
                        <textarea className="form-control" style={{ width: '500px', height: '40px', margin: '0 auto', border:'2px solid' }} value={keyPath} onChange={handleOnChangeKeyPath} id="myBox" placeholder='Set Key File path' rows="3"></textarea>
                    </div>
            </div>
            )}

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
            {(props.algo === "AES" && inputKeySize !== 0) ? (
                <>
                    <div className="mb-3 my-3">
                        <textarea className="form-control" style={{ width: '700px', height: '100px', margin: '0 auto', border:'2px solid' }} value={secretKey} readOnly id="myBox" rows="3"></textarea>
                    </div>
                    <div>
                        <button className="btn btn-success" onClick={handleKeyCopy} value={secretKey}><h5>Copy Secret Key</h5></button>
                    </div>
                </>
            ) : (
                <></>
            )}
  
        </figure>
    
    </>
  )
}
