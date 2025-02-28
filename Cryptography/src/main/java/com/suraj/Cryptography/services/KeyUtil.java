package com.suraj.Cryptography.services;

import javax.crypto.spec.SecretKeySpec;
import javax.crypto.SecretKey;

public class KeyUtil {
    public static SecretKey getAESKey(String keyString) {
        byte[] keyBytes = keyString.getBytes(); // Ensure this is the correct length for your algorithm (16, 24, or 32 bytes for AES)
        return new SecretKeySpec(keyBytes, "AES");
    }

    public static SecretKey getBlowfishKey(String keyString) {
        byte[] keyBytes = keyString.getBytes(); // Ensure the length matches your algorithm (up to 56 bytes for Blowfish)
        return new SecretKeySpec(keyBytes, "Blowfish");
    }
}