import React from 'react'
import Quotes from './Quotes'
import Footer from './Footer'
export default function HomeContent() {
    
  return (
    <>
        <Quotes/>

        <div>
            <figure className="text-center my-3">
            <h3>What are you looking for?</h3>
            </figure>
        </div>

       <div>
            <figure className="text-center my-4">
                <div className="btn-group">
                    <button className="btn btn-primary btn-lg btn-success dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                    Classical Algorithms
                    </button>
                        <ul className="dropdown-menu">
                        <li><a className="dropdown-item" href="/ceaserEncDec">Ceaser Cipher</a></li>     
                        <li><hr className="dropdown-divider"/></li>
                        <li><a className="dropdown-item" href="/vignereEncDec">Vigenère Cipher</a></li>
                        <li><hr className="dropdown-divider"/></li>
                        <li><a className="dropdown-item" href="/railfenceEncDec">Rail Fence Cipher</a></li>
                        <li><hr className="dropdown-divider"/></li>
                        <li><a className="dropdown-item" href="/atbashEncDec">Atbash Cipher</a></li>
                        </ul>

                </div>
                
                <div className="btn-group">
                    <button className="btn btn-secondary btn-lg btn-danger dropdown-toggle ms-4" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                    Advanced Algorithms
                    </button>
                        <ul className="dropdown-menu">
                        <li><a className="dropdown-item" href="/aesEncDec">AES Cipher</a></li>
                        <li><hr className="dropdown-divider"/></li>
                        <li><a className="dropdown-item" href="rsaEncDec">RSA Cipher</a></li>
                        </ul>

                </div>

                <div className="btn-group">
                    <button className="btn btn-primary btn-lg dropdown-toggle ms-4" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                    Learn Cryptography
                    </button>
                        <ul className="dropdown-menu">
                        <li><a className="dropdown-item" href="/learnClassical" >Classical Ciphers</a></li>
                        <li><hr className="dropdown-divider"/></li>
                        <li><a className="dropdown-item" href="/learnAdvanced">Advanced Ciphers</a></li>
                        </ul>
                </div>

            </figure>
        </div>

        <Footer/>
    </>

  )
}
