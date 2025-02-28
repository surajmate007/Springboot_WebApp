import React from 'react'

export default function AdvancedLearning() {
  return (
    <div className="p-6 max-w-2xl mx-auto bg-white rounded-xl shadow-md space-y-4 px-16 md:px-32">
      <h1 className="text-2xl font-bold text-center">AES (Advanced Encryption Standard)</h1>
      
      <p className="text-gray-700">
        The <strong>Advanced Encryption Standard (AES)</strong> is a symmetric encryption algorithm widely used for securing data.
        It operates on fixed block sizes (128-bit) and supports key lengths of 128, 192, or 256 bits.
      </p>

      <h2 className="text-xl font-semibold">🔹 Encryption Process</h2>
      <ul className="list-disc list-inside text-gray-700">
        <li>Divides plaintext into 128-bit blocks.</li>
        <li>Performs multiple rounds of substitution, permutation, and mixing using a key schedule.</li>
        <li>Uses a combination of <strong>SubBytes, ShiftRows, MixColumns, and AddRoundKey</strong> operations.</li>
      </ul>
      
      <p className="text-gray-700"><strong>Example:</strong> Encrypting "HELLO" with a 128-bit key.</p>
      
      <h2 className="text-xl font-semibold">💻 Code Example (Java)</h2>
      <div className="flex justify-center">
        <pre className="bg-black text-white p-4 rounded-md w-fit max-w-full overflow-x-auto">
          <code>
{`import javax.crypto.Cipher;
import javax.crypto.KeyGenerator;
import javax.crypto.SecretKey;
import java.util.Base64;

public class AESExample {
    public static void main(String[] args) throws Exception {
        KeyGenerator keyGenerator = KeyGenerator.getInstance("AES");
        keyGenerator.init(128);
        SecretKey key = keyGenerator.generateKey();
        Cipher cipher = Cipher.getInstance("AES");
        
        String plaintext = "HELLO";
        cipher.init(Cipher.ENCRYPT_MODE, key);
        byte[] encrypted = cipher.doFinal(plaintext.getBytes());
        System.out.println(Base64.getEncoder().encodeToString(encrypted));
    }
}`}
          </code>
        </pre>
      </div>
      <p className="text-gray-700"><strong>Reference:</strong> <a href="https://en.wikipedia.org/wiki/Advanced_Encryption_Standard" className="text-blue-500 underline">AES Cipher - Wikipedia</a></p>
      <p className="text-gray-700"><strong>Reference:</strong> <a href="https://www.geeksforgeeks.org/advanced-encryption-standard-aes" className="text-blue-500 underline">AES Cipher - GeeksforGeeks</a></p>
      
      
      <hr className="my-8" />
      
      <h1 className="text-2xl font-bold text-center">RSA (Rivest-Shamir-Adleman)</h1>
      
      <p className="text-gray-700">
        The <strong>RSA algorithm</strong> is an asymmetric encryption technique that uses two keys: a public key for encryption and a private key for decryption.
        It is widely used in secure communications, including HTTPS and digital signatures.
      </p>

      <h2 className="text-xl font-semibold">🔹 Encryption Process</h2>
      <ul className="list-disc list-inside text-gray-700">
        <li>Generate a key pair (public and private keys).</li>
        <li>Encrypt data using the recipient's public key.</li>
        <li>Decrypt using the corresponding private key.</li>
      </ul>
      
      <p className="text-gray-700"><strong>Example:</strong> Encrypting "HELLO" with RSA keys.</p>
      
      <h2 className="text-xl font-semibold">💻 Code Example (Java)</h2>
      <div className="flex justify-center">
        <pre className="bg-black text-white p-4 rounded-md w-fit max-w-full overflow-x-auto">
          <code>
{`import java.security.*;
import javax.crypto.Cipher;
import java.util.Base64;

public class RSAExample {
    public static void main(String[] args) throws Exception {
        KeyPairGenerator keyGen = KeyPairGenerator.getInstance("RSA");
        keyGen.initialize(2048);
        KeyPair pair = keyGen.generateKeyPair();
        PublicKey publicKey = pair.getPublic();
        PrivateKey privateKey = pair.getPrivate();
        
        Cipher cipher = Cipher.getInstance("RSA");
        cipher.init(Cipher.ENCRYPT_MODE, publicKey);
        byte[] encrypted = cipher.doFinal("HELLO".getBytes());
        System.out.println(Base64.getEncoder().encodeToString(encrypted));
    }
}`}
          </code>
        </pre>
      </div>
      <p className="text-gray-700"><strong>Reference:</strong> <a href="http://en.wikipedia.org/wiki/RSA_(cryptosystem)" className="text-blue-500 underline">RSA Cipher - Wikipedia</a></p>
      <p className="text-gray-700"><strong>Reference:</strong> <a href="https://www.geeksforgeeks.org/rsa-algorithm-cryptography/" className="text-blue-500 underline">RSA Cipher - GeeksforGeeks</a></p>
      
    </div>
  );
}