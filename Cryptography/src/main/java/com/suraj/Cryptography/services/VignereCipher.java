package com.suraj.Cryptography.services;

import org.springframework.stereotype.Service;

@Service
public class VignereCipher {

    // Method to encrypt the plaintext using the key
    public static String encrypt(String plaintext, String key) {
        StringBuilder encrypted = new StringBuilder();
        key = prepareKey(plaintext, key);

        for (int i = 0; i < plaintext.length(); i++) {
            char pChar = plaintext.charAt(i);
            char kChar = key.charAt(i);
            // Only encrypt alphabetic characters
            if (Character.isLetter(pChar)) {
                char offset = Character.isUpperCase(pChar) ? 'A' : 'a';
                // Encrypt using Vigenère formula
                char eChar = (char) ((pChar + kChar - 2 * offset) % 26 + offset);
                encrypted.append(eChar);
            } else {
                // Append non-alphabetic characters unchanged
                encrypted.append(pChar);
            }
        }
        return encrypted.toString();
    }

    // Method to decrypt the ciphertext using the key
    public static String decrypt(String ciphertext, String key) {
        StringBuilder decrypted = new StringBuilder();
        key = prepareKey(ciphertext, key);

        for (int i = 0; i < ciphertext.length(); i++) {
            char cChar = ciphertext.charAt(i);
            char kChar = key.charAt(i);
            // Only decrypt alphabetic characters
            if (Character.isLetter(cChar)) {
                char offset = Character.isUpperCase(cChar) ? 'A' : 'a';
                // Decrypt using Vigenère formula
                char dChar = (char) ((cChar - kChar + 26) % 26 + offset);
                decrypted.append(dChar);
            } else {
                // Append non-alphabetic characters unchanged
                decrypted.append(cChar);
            }
        }
        return decrypted.toString();
    }

    // Method to prepare the key by repeating it to match the length of the text
    private static String prepareKey(String text, String key) {
        StringBuilder keyBuilder = new StringBuilder();
        int keyIndex = 0;

        for (int i = 0; i < text.length(); i++) {
            char currentChar = text.charAt(i);
            // Only append key characters for alphabetic characters in the text
            if (Character.isLetter(currentChar)) {
                keyBuilder.append(key.charAt(keyIndex));
                keyIndex = (keyIndex + 1) % key.length();
            } else {
                keyBuilder.append(currentChar);
            }
        }
        return keyBuilder.toString();
    }

}
