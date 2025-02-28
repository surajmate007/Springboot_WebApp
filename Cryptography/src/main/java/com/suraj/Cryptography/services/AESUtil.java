package com.suraj.Cryptography.services;

import com.suraj.Cryptography.controller.AdvancedCipherController;
import org.springframework.stereotype.Service;

import javax.crypto.Cipher;
import javax.crypto.KeyGenerator;
import javax.crypto.SecretKey;
import javax.crypto.spec.SecretKeySpec;
import java.util.Base64;

@Service
public class AESUtil {

    public class AESResponseInter {
        private String cipherText;
        private String secretKey;

        public String getCipherText() {
            return cipherText;
        }

        public void setCipherText(String cipherText) {
            this.cipherText = cipherText;
        }

        public String getSecretKey() {
            return secretKey;
        }

        public void setSecretKey(String secretKey) {
            this.secretKey = secretKey;
        }
    }

    private final String ALGORITHM = "AES/CBC/PKCS5Padding";

    public SecretKey generateKey(int keySize) throws Exception {
        KeyGenerator keyGen = KeyGenerator.getInstance("AES");
        keyGen.init(keySize); // or 192, 256
        return keyGen.generateKey();
    }

    public static SecretKey convertStringToSecretKey(String keyString, String algorithm) {
        // Decode the Base64 encoded string to a byte array
        byte[] decodedKey = Base64.getDecoder().decode(keyString);

        // Rebuild the secret key using the SecretKeySpec
        SecretKey secretKey = new SecretKeySpec(decodedKey, 0, decodedKey.length, algorithm);

        return secretKey;
    }

    public static boolean isValidAESKey(SecretKey key) {
        // Check if the key algorithm is AES
        if (!"AES".equals(key.getAlgorithm())) {
            System.out.println("Invalid Algorithm: " + key.getAlgorithm());
            return false;
        }

        // Get the key length in bytes
        int keyLength = key.getEncoded().length;

        // Check if the key length is valid for AES (16, 24, or 32 bytes for AES)
        if (keyLength == 16 || keyLength == 24 || keyLength == 32) {
            System.out.println("Valid AES key with length: " + keyLength * 8 + " bits");
            return true;
        } else {
            System.out.println("Invalid AES key length: " + keyLength * 8 + " bits");
            return false;
        }
    }

    public AESResponse encrypt(AdvancedCipherController.AESRequestBody request) throws Exception{
        try {
            String text = request.getText();
            int keySize = request.getKeySize();
            String key = request.getKey();

            SecretKey secretKey;
            if (keySize != 0) {
                // Generate a new AES key of the specified size
                KeyGenerator keyGen = KeyGenerator.getInstance("AES");
                keyGen.init(keySize);
                secretKey = keyGen.generateKey();
            } else {
                // Use the provided key
                byte[] decodedKey = Base64.getDecoder().decode(key);
                secretKey = new SecretKeySpec(decodedKey, 0, decodedKey.length, "AES");
            }

            // Encrypt the text
            Cipher cipher = Cipher.getInstance("AES");
            cipher.init(Cipher.ENCRYPT_MODE, secretKey);
            byte[] cipherTextBytes = cipher.doFinal(text.getBytes());

            // Encode the results
            String cipherText = Base64.getEncoder().encodeToString(cipherTextBytes);
            String secretKeyEncoded = Base64.getEncoder().encodeToString(secretKey.getEncoded());

            System.out.println("Ciphertext: " + cipherText);
            System.out.println("Secret Key: " + secretKeyEncoded);

            return new AESResponse(cipherText, secretKeyEncoded);
        } catch (Exception e) {
            System.err.println("Exception occurred while encrypting: " + e.getMessage());
            return new AESResponse("", "");
        }
    }

    public AESResponse decrypt(AdvancedCipherController.AESRequestBody request) throws Exception {
        try {
            String cipherText = request.getText();
            String key = request.getKey();

            // Decode the secret key
            byte[] decodedKey = Base64.getDecoder().decode(key);
            SecretKey secretKey = new SecretKeySpec(decodedKey, 0, decodedKey.length, "AES");

            // Decrypt the ciphertext
            Cipher cipher = Cipher.getInstance("AES");
            cipher.init(Cipher.DECRYPT_MODE, secretKey);
            byte[] plainTextBytes = cipher.doFinal(Base64.getDecoder().decode(cipherText));

            String plainText = new String(plainTextBytes);
            System.out.println("Plaintext: " + plainText);

            return new AESResponse(plainText, "");
        } catch (Exception e) {
            System.err.println("Exception occurred while decrypting: " + e.getMessage());
            return new AESResponse("", "");
        }
    }

    public static class AESResponse {
        private String cipherText;
        private String secretKey;

        public AESResponse(String cipherText, String secretKey) {
            this.cipherText = cipherText;
            this.secretKey = secretKey;
        }

        public String getCipherText() {
            return cipherText;
        }

        public String getSecretKey() {
            return secretKey;
        }
    }

}
