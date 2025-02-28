package com.suraj.Cryptography.services;

import org.springframework.stereotype.Service;

@Service
public class CeaserCipher {


    public String encrypt(String stPlainText, int iShift) {
        int n = stPlainText.length();
        StringBuilder stCipherText = new StringBuilder();

        for (int i = 0; i < n; i++) {
            char c = stPlainText.charAt(i);
            // Handling both upper and lower case letters
            if (Character.isLowerCase(c)) {
                stCipherText.append((char) ((c - 'a' + iShift) % 26 + 'a'));
            } else if (Character.isUpperCase(c)) {
                stCipherText.append((char) ((c - 'A' + iShift) % 26 + 'A'));
            } else {
                stCipherText.append(c); // Non-alphabetical characters remain unchanged
            }
        }

        return stCipherText.toString();
    }

    public String decrypt(String stCipherText, int iShift) {
        int n = stCipherText.length();
        StringBuilder stPlainText = new StringBuilder();

        for (int i = 0; i < n; i++) {
            char c = stCipherText.charAt(i);
            // Handling both upper and lower case letters
            if (Character.isLowerCase(c)) {
                stPlainText.append((char) ((c - 'a' - iShift) % 26 + 'a'));
            } else if (Character.isUpperCase(c)) {
                stPlainText.append((char) ((c - 'A' - iShift) % 26 + 'A'));
            } else {
                stPlainText.append(c); // Non-alphabetical characters remain unchanged
            }
        }

        return stPlainText.toString();
    }
}
