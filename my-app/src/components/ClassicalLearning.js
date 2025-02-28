import React from 'react';

export default function ClassicalLearning() {
  return (
    <div className="p-6 max-w-2xl mx-auto bg-white rounded-xl shadow-md space-y-4 px-16 md:px-32">
      <p className='text-gray-700'>
          In this section we will learn the 4 most popular Classical Cryptography Algorithms. Although these algorithms are not used 
        in real setting now a days but still they are useful to make your understanding regarding Cryptography
        clear. These algorithms form the foundation of cryptography. Please go though all of them and get better understanding.
      </p>
      <h1 className="text-2xl font-bold text-center">Caesar Cipher</h1>
      
      <p className="text-gray-700">
        The <strong>Caesar Cipher</strong> is one of the simplest and most well-known encryption techniques.
        It is a type of <strong>substitution cipher</strong>, where each letter in the plaintext is shifted
        a fixed number of places in the alphabet.
      </p>

      <h2 className="text-xl font-semibold">🔹 Encryption Process</h2>
      <ul className="list-disc list-inside text-gray-700">
        <li>Choose a shift value (<strong>k</strong>).</li>
        <li>Replace each letter in the plaintext with a letter that appears <strong>k</strong> positions ahead in the alphabet.</li>
        <li>If the shift goes beyond ‘Z’, it wraps around to the start of the alphabet.</li>
      </ul>
      
      <p className="text-gray-700"><strong>Example (Shift = 3):</strong> HELLO → KHOOR</p>
      
      <h2 className="text-xl font-semibold">💻 Code Example (Java)</h2>
      <div className="flex justify-center">
        <pre className="bg-black text-white p-4 rounded-md w-fit max-w-full overflow-x-auto">
          <code>
{`public class CaesarCipher {
    public static String encrypt(String text, int shift) {
        StringBuilder result = new StringBuilder();
        for (char ch : text.toCharArray()) {
            if (Character.isLetter(ch)) {
                char base = Character.isUpperCase(ch) ? 'A' : 'a';
                result.append((char) ((ch - base + shift) % 26 + base));
            } else {
                result.append(ch);
            }
        }
        return result.toString();
    }

    public static void main(String[] args) {
        System.out.println(encrypt("HELLO", 3)); // KHOOR
    }
}`}
          </code>
        </pre>
      </div>
      <p className="text-gray-700"><strong>Reference:</strong> <a href="https://en.wikipedia.org/wiki/Caesar_cipher" className="text-blue-500 underline">Caesar Cipher - Wikipedia</a></p>
      <p className="text-gray-700"><strong>Reference:</strong> <a href="https://www.geeksforgeeks.org/caesar-cipher-in-cryptography" className="text-blue-500 underline">Caesar Cipher - GeeksforGeeks</a></p>
      <hr className="my-8" />
      
      <h1 className="text-2xl font-bold text-center">Atbash Cipher</h1>
      
      <p className="text-gray-700">
        The <strong>Atbash Cipher</strong> is a simple substitution cipher where the alphabet is reversed.
        This means that the first letter is replaced with the last, the second with the second-last, and so on.
      </p>
      
      <p className="text-gray-700"><strong>Example:</strong> HELLO → SVOOL</p>
      
      <h2 className="text-xl font-semibold">💻 Code Example (Java)</h2>
      <div className="flex justify-center">
        <pre className="bg-black text-white p-4 rounded-md w-fit max-w-full overflow-x-auto">
          <code>
{`public class AtbashCipher {
    public static String encrypt(String text) {
        StringBuilder result = new StringBuilder();
        for (char ch : text.toCharArray()) {
            if (Character.isLetter(ch)) {
                char base = Character.isUpperCase(ch) ? 'A' : 'a';
                result.append((char) ('Z' - (ch - base)));
            } else {
                result.append(ch);
            }
        }
        return result.toString();
    }

    public static void main(String[] args) {
        System.out.println(encrypt("HELLO")); // SVOOL
    }
}`}
          </code>
        </pre>
      </div>
      
      <p className="text-gray-700"><strong>Reference:</strong> <a href="https://en.wikipedia.org/wiki/Atbash" className="text-blue-500 underline">Atbash Cipher - Wikipedia</a></p>
      <p className="text-gray-700"><strong>Reference:</strong> <a href="https://www.geeksforgeeks.org/implementing-atbash-cipher" className="text-blue-500 underline">Atbash Cipher - GeeksforGeeks</a></p>

      <hr className="my-8" />
      
      <h1 className="text-2xl font-bold text-center">Vigenère Cipher</h1>
      
      <p className="text-gray-700">
        The <strong>Vigenère Cipher</strong> is an encryption technique that uses a series of Caesar Ciphers based on the letters of a keyword.
      </p>
      
      <p className="text-gray-700"><strong>Example (Key = "KEY"):</strong> HELLO → RIJVS</p>
      
      <h2 className="text-xl font-semibold">💻 Code Example (Java)</h2>
      <div className="flex justify-center">
        <pre className="bg-black text-white p-4 rounded-md w-fit max-w-full overflow-x-auto">
          <code>
{`public class VigenereCipher {
    public static String encrypt(String text, String key) {
        StringBuilder result = new StringBuilder();
        key = key.toUpperCase();
        for (int i = 0, j = 0; i < text.length(); i++) {
            char ch = text.charAt(i);
            if (Character.isLetter(ch)) {
                char base = Character.isUpperCase(ch) ? 'A' : 'a';
                result.append((char) ((ch + key.charAt(j) - 2 * base) % 26 + base));
                j = (j + 1) % key.length();
            } else {
                result.append(ch);
            }
        }
        return result.toString();
    }
}`}
          </code>
        </pre>
      </div>
      
      <p className="text-gray-700"><strong>Reference:</strong> <a href="https://en.wikipedia.org/wiki/Vigen%C3%A8re_cipher" className="text-blue-500 underline">Vigenere Cipher - Wikipedia</a></p>
      <p className="text-gray-700"><strong>Reference:</strong> <a href="https://www.geeksforgeeks.org/vigenere-cipher" className="text-blue-500 underline">Vigenere Cipher - GeeksforGeeks</a></p>

      <hr className="my-8" />
      
      <h1 className="text-2xl font-bold text-center">Rail Fence Cipher</h1>
      
      <p className="text-gray-700">
        The <strong>Rail Fence Cipher</strong> is a transposition cipher that arranges the plaintext in a zigzag pattern across multiple rows.
      </p>
      
      <p className="text-gray-700"><strong>Example (Rails = 3):</strong> HELLO → HLOEL</p>
      
      <h2 className="text-xl font-semibold">💻 Code Example (Java)</h2>
      <div className="flex justify-center">
        <pre className="bg-black text-white p-4 rounded-md w-fit max-w-full overflow-x-auto">
          <code>
{`public class RailFenceCipher {
    public static String encrypt(String text, int rails) {
        char[] encrypted = new char[text.length()];
        int index = 0;
        for (int i = 0; i < rails; i++) {
            for (int j = i; j < text.length(); j += rails) {
                encrypted[index++] = text.charAt(j);
            }
        }
        return new String(encrypted);
    }

    public static void main(String[] args) {
        System.out.println(encrypt("HELLO", 3)); // HLOEL
    }
}`}
          </code>
        </pre>
      </div>
      <p className="text-gray-700"><strong>Reference:</strong> <a href="https://en.wikipedia.org/wiki/Rail_fence_cipher" className="text-blue-500 underline">Rail Fence Cipher - Wikipedia</a></p>
      <p className="text-gray-700"><strong>Reference:</strong> <a href="https://www.geeksforgeeks.org/rail-fence-cipher-encryption-decryption" className="text-blue-500 underline">Rail Fence Cipher - GeeksforGeeks</a></p>

    </div>
  );
}
