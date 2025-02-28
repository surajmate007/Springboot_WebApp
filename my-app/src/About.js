import React from 'react';

export default function About() {
  return (
    <div className="p-6 max-w-2xl mx-auto bg-white rounded-xl shadow-md space-y-4 px-16 md:px-32">
      <h1 className="text-2xl font-bold text-center">About This Application</h1>
      
      <p className="text-gray-700">
        Welcome to our <strong>Encryption and Decryption</strong> web application! This platform allows users to securely encrypt or decrypt messages using various cryptographic algorithms.
        Simply input your plaintext or ciphertext along with a key, and get the desired output instantly.
      </p>
      
      <h2 className="text-xl font-semibold">🔹 Features</h2>
      <ul className="list-disc list-inside text-gray-700">
        <li>Supports multiple encryption algorithms including AES, RSA, Caesar Cipher, and more.</li>
        <li>User-friendly interface for quick and easy encryption/decryption.</li>
        <li>Ensures data security by processing everything within your browser.</li>
      </ul>
      
      <h2 className="text-xl font-semibold">🔹 How It Works</h2>
      <ul className="list-disc list-inside text-gray-700">
        <li>Enter your text (plaintext or ciphertext).</li>
        <li>Select an encryption method and provide the key (if required).</li>
        <li>Click on the process button to get the encrypted or decrypted result.</li>
      </ul>
      
      <p className="text-gray-700">
        Whether you are a security enthusiast, a student learning cryptography, or just someone curious about encryption, this tool provides an interactive way to explore various encryption techniques.
      </p>
      
      <pre className="text-gray-700 text-center mt-6">
        {`  ██████╗██████╗ ██╗   ██╗██████╗ ██████╗  ██████╗ ██████╗  
  ██╔════╝██╔══██╗██║   ██║██╔══██╗██╔══██╗██╔═══██╗██╔══██╗ 
  ██║     ██████╔╝██║   ██║██████╔╝██████╔╝██║   ██║██████╔╝ 
  ██║     ██╔══██╗██║   ██║██╔═══╝ ██╔═══╝ ██║   ██║██╔═══╝  
  ╚██████╗██║  ██║╚██████╔╝██║     ██║     ╚██████╔╝██║      
   ╚═════╝╚═╝  ╚═╝ ╚═════╝ ╚═╝     ╚═╝      ╚═════╝ ╚═╝      `}
      </pre>
    </div>
  );
}
