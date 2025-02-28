import React from 'react';
import './App.css';
import HomePage from './components/HomePage';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import ClassicalCiphers from './components/ClassicalCiphers';
import Navbar from './components/Navbar';
import Border from './components/Border';
import AdvancedCiphers from './components/AdvancedCiphers';
import EncryptionLearning from './components/ClassicalLearning';
import ClassicalLearning from './components/ClassicalLearning';
import AdvancedLearning from './components/AdvancedLearning';
import About from './About';


function App() {
  return (
    <>
      <Router>

          <Navbar title = 'Cryptography'/>
          <Border/>

          <Routes>
            <Route exact path="/" element={<HomePage/>}>
            </Route>
          </Routes>

          <Routes>
            <Route exact path='/about' element={<About/>}>
            </Route>
          </Routes>
        
          <Routes>
            <Route exact path="/ceaserEncDec" element={<ClassicalCiphers algo='Ceaser'/>}>
            </Route>
          </Routes>

          <Routes>
              <Route exact path='/vignereEncdec' element={<ClassicalCiphers algo='Vignere'/>}>
              </Route>
          </Routes>

          <Routes>
              <Route exact path='/railfenceEncDec' element={<ClassicalCiphers algo='RailFence'/>}>
              </Route>
          </Routes>

          <Routes>
              <Route exact path='/atbashEncDec' element={<ClassicalCiphers algo='Atbash'/>}>
              </Route>
          </Routes>

          <Routes>
              <Route exact path='/aesEncDec' element={<AdvancedCiphers algo='AES'/>}>
              </Route>
          </Routes>

          <Routes>
              <Route exact path='/rsaEncDec' element={<AdvancedCiphers algo='RSA'/>}>
              </Route>
          </Routes>

          <Routes>
              <Route exact path='/learnClassical' element={<ClassicalLearning/>}>
              </Route>
          </Routes>

          <Routes>
              <Route exact path='/learnAdvanced' element={<AdvancedLearning/>}>
              </Route>
          </Routes>
      </Router>
    </>
  );
}

export default App;
