import React from 'react';

export default function Home() {
  return (
    <div className="p-6 max-w-3xl mx-auto bg-white rounded-xl shadow-md space-y-4 px-16 md:px-32 lg:mx-40 xl:mx-60">
      <h1 className="text-3xl font-bold text-center">Welcome to Cryptography World</h1>
      
      <p className="text-center text-gray-700 text-lg">
        Cryptography is the art of secure communication, protecting information from unauthorized access. <br/>
        From ancient ciphers used by Julius Caesar to modern-day encryption algorithms like AES and RSA, 
        cryptography has played a crucial role in safeguarding data across the digital world.
      </p>
      
      <h2 className="text-center text-2xl font-semibold">🔐 Why Cryptography Matters?</h2>
      <p className="text-center text-gray-700">
        In today’s digital age, sensitive information like passwords, financial transactions, and private communications
        need robust protection. <br/> Cryptography ensures data privacy, integrity, and authentication, making it a pillar of cybersecurity.
      </p>
      
      <h2 className="text-center text-2xl font-semibold"> Explore Different Encryption Techniques</h2>
      <p className="text-center text-gray-700">
        Our application allows you to experiment with various encryption and decryption methods, including:
      </p>
      <ul className="text-center text-gray-700">
        <strong>Caesar Cipher:</strong> A simple shift cipher used by the Romans.<br/>
        <strong>Vigenère Cipher:</strong> A more secure method using a repeating keyword.<br/>
        <strong>AES (Advanced Encryption Standard):</strong> A widely used encryption standard.<br/>
        <strong>RSA:</strong> A public-key encryption technique securing online communications.
      </ul>
      
      <p className="text-center text-gray-700 text-lg">
        Start encrypting and decrypting messages today, and discover how cryptography shapes our digital world! 🚀
      </p>
    </div>
  );
}