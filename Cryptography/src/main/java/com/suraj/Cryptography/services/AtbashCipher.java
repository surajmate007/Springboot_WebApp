package com.suraj.Cryptography.services;

import org.springframework.stereotype.Service;

@Service
public class AtbashCipher {

    public String encrypt(String text) {
        return transform(text);
    }

    public String decrypt(String text) {
        return transform(text);
    }

    private String transform(String text) {
        StringBuilder result = new StringBuilder();

        for (char c : text.toCharArray()) {
            if (Character.isLetter(c)) {
                char base = Character.isLowerCase(c) ? 'a' : 'A';
                result.append((char) (base + ('Z' - Character.toUpperCase(c))));
            } else {
                result.append(c);
            }
        }

        return result.toString();
    }
}
