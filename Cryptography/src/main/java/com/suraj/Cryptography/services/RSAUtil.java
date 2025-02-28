package com.suraj.Cryptography.services;

import com.suraj.Cryptography.controller.AdvancedCipherController;
import org.springframework.stereotype.Service;

import javax.crypto.Cipher;
import java.io.File;
import java.io.FileOutputStream;
import java.nio.charset.StandardCharsets;
import java.nio.file.Files;
import java.security.*;
import java.security.spec.EncodedKeySpec;
import java.security.spec.PKCS8EncodedKeySpec;
import java.security.spec.X509EncodedKeySpec;
import java.util.Base64;

@Service
public class RSAUtil {
    public void generateKeyPair() throws Exception {
        try{
            KeyPairGenerator generator = KeyPairGenerator.getInstance("RSA");
            generator.initialize(2048);
            KeyPair pair = generator.generateKeyPair();
            PrivateKey privateKey = pair.getPrivate();
            PublicKey publicKey = pair.getPublic();
            try {
                FileOutputStream fos1 = new FileOutputStream("RSAPublic.key");
                FileOutputStream fos2 = new FileOutputStream("RSAPrivate.key");
                fos1.write(publicKey.getEncoded());
                fos2.write(privateKey.getEncoded());
            }
            catch (Exception e){
                System.out.println("Exception occurred during key storage in files " + e);
            }
        }
        catch (Exception e){
            System.out.println("Exception occurred during RSA Key generation " + e);
        }
    }

    public RSAResponse encrypt(AdvancedCipherController.RSARequestBody request) throws Exception {
        try {
            String text = request.getText();
            String keyPath = request.getKey();
            byte[] publicKeyBytes;
            try{
                File publicKeyFile = new File(keyPath);
                publicKeyBytes = Files.readAllBytes(publicKeyFile.toPath());
            }
            catch (Exception e){
                System.out.println("Provide appropriate key file path.");
                return new RSAResponse("");
            }

            KeyFactory keyFactory = KeyFactory.getInstance("RSA");
            EncodedKeySpec publicKeySpec = new X509EncodedKeySpec(publicKeyBytes);
            PublicKey publicKey = keyFactory.generatePublic(publicKeySpec);

            Cipher encryptCipher = Cipher.getInstance("RSA");
            encryptCipher.init(Cipher.ENCRYPT_MODE, publicKey);

            byte[] secretMessageBytes = text.getBytes(StandardCharsets.UTF_8);
            byte[] encryptedMessageBytes = encryptCipher.doFinal(secretMessageBytes);

            String encodedMessage = Base64.getEncoder().encodeToString(encryptedMessageBytes);
            System.out.println("RSA ciphertext is : " + encodedMessage);
            return new RSAResponse(encodedMessage);

        } catch (Exception e) {
            System.err.println("Exception occurred while encrypting: " + e.getMessage());
            return new RSAResponse("");
        }
    }

    public static RSAResponse decrypt(AdvancedCipherController.RSARequestBody request) throws Exception {
        try {
            String text = request.getText(); // Encrypted text (Base64-encoded)
            String keyPath = request.getKey(); // Path to private key file

            byte[] privateKeyBytes;
            try {
                File privateKeyFile = new File(keyPath);
                privateKeyBytes = Files.readAllBytes(privateKeyFile.toPath());
            } catch (Exception e) {
                System.out.println("Provide appropriate key file path.");
                return new RSAResponse("");
            }

            // Convert private key bytes to PrivateKey object using PKCS8EncodedKeySpec
            KeyFactory keyFactory = KeyFactory.getInstance("RSA");
            PKCS8EncodedKeySpec privateKeySpec = new PKCS8EncodedKeySpec(privateKeyBytes);
            PrivateKey privateKey = keyFactory.generatePrivate(privateKeySpec);

            // Initialize Cipher in DECRYPT_MODE
            Cipher decryptCipher = Cipher.getInstance("RSA");
            decryptCipher.init(Cipher.DECRYPT_MODE, privateKey);

            // Decode the Base64-encoded encrypted text
            byte[] encryptedBytes = Base64.getDecoder().decode(text);

            // Decrypt the text
            byte[] decryptedBytes = decryptCipher.doFinal(encryptedBytes);

            // Convert decrypted bytes to string
            String plaintext = new String(decryptedBytes, StandardCharsets.UTF_8);
            System.out.println("RSA plaintext is: " + plaintext);

            return new RSAResponse(plaintext);

        } catch (Exception e) {
            System.err.println("Exception occurred while decrypting: " + e.getMessage());
            return new RSAResponse("");
        }
    }

    public static class RSAResponse {
        private String cipherText;

        public RSAResponse(String cipherText) {
            this.cipherText = cipherText;
        }

        public String getCipherText() {
            return cipherText;
        }
    }
}