package com.suraj.Cryptography.services;

import org.springframework.stereotype.Service;

@Service
public class RailfenceCipher {

    public String encrypt(String text, int key) {
        StringBuilder[] rail = new StringBuilder[key];
        for (int i = 0; i < key; i++) rail[i] = new StringBuilder();

        int dirDown = 0;
        int row = 0;

        for (char c : text.toCharArray()) {
            rail[row].append(c);
            if (row == 0) dirDown = 1;
            else if (row == key - 1) dirDown = -1;
            row += dirDown;
        }

        StringBuilder result = new StringBuilder();
        for (StringBuilder sb : rail) result.append(sb);
        return result.toString();
    }

    public String decrypt(String text, int key) {
        char[] rail = new char[text.length()];
        boolean[] used = new boolean[text.length()];

        int dirDown = 0;
        int row = 0;

        for (int i = 0; i < text.length(); i++) {
            if (row == 0) dirDown = 1;
            else if (row == key - 1) dirDown = -1;

            used[i] = (row < key);
            rail[row] = '*';
            row += dirDown;
        }

        int index = 0;
        for (int i = 0; i < key; i++) {
            for (int j = 0; j < text.length(); j++) {
                if (used[j]) {
                    rail[j] = text.charAt(index++);
                    used[j] = false;
                }
            }
        }

        StringBuilder result = new StringBuilder();
        row = 0;
        dirDown = 0;

        for (int i = 0; i < text.length(); i++) {
            result.append(rail[row]);
            if (row == 0) dirDown = 1;
            else if (row == key - 1) dirDown = -1;
            row += dirDown;
        }

        return result.toString();
    }
}
