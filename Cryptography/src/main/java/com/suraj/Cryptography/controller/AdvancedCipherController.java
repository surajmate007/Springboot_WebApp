package com.suraj.Cryptography.controller;

import com.suraj.Cryptography.services.AESUtil;
import com.suraj.Cryptography.services.RSAUtil;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@CrossOrigin
@RequestMapping("/api")
public class AdvancedCipherController {

    @Autowired
    AESUtil aesUtil;
    @Autowired
    RSAUtil rsaUtil;

    @PostMapping("/aesEnc")
    public AESUtil.AESResponse encryptAES(@RequestBody AESRequestBody request) throws Exception {
        
        try{
            AESUtil.AESResponse aesResponse = aesUtil.encrypt(request);
            return aesResponse;
        }
        catch (Exception e){
            System.out.println("Exception occurred while encrypting AES " + e.getMessage());
            return new AESUtil.AESResponse("", "");
        }
    }

    @PostMapping("/aesDec")
    public AESUtil.AESResponse decryptAES(@RequestBody AESRequestBody request) {
        try{
            AESUtil.AESResponse aesResponse = aesUtil.decrypt(request);
            return aesResponse;
        }
        catch (Exception e){
            System.out.println("Exception occurred while decrypting AES " + e.getMessage());
            return new AESUtil.AESResponse("", "");
        }
    }

    @PostMapping("/generateRSAKeyPair")
    public void generateRSAKey(){
        System.out.println("RSA Key Generation API called");
        try{
            rsaUtil.generateKeyPair();
        }
        catch (Exception e){
            System.out.println("Error occurred during RSA Key Generation " + e);
        }
    }


    @PostMapping("/rsaEnc")
    public RSAUtil.RSAResponse encryptRSA(@RequestBody RSARequestBody request) {
        try{
            RSAUtil.RSAResponse response = rsaUtil.encrypt(request);
            return response;
        }
        catch (Exception e){
            System.out.println("Error occurred while encrypting RSA " + e);
            return new RSAUtil.RSAResponse("");
        }
    }

    @PostMapping("/rsaDec")
    public RSAUtil.RSAResponse decryptRSA(@RequestBody RSARequestBody request) {
        try{
            RSAUtil.RSAResponse response = rsaUtil.decrypt(request);
            return response;
        }
        catch (Exception e){
            System.out.println("Error occurred while decrypting RSA " + e);
            return new RSAUtil.RSAResponse("");
        }
    }

    public static class RSARequestBody {
        private String text;
        private String key;

        public String getKey() {
            return key;
        }

        public void setKey(String key) {
            this.key = key;
        }

        public String getText() {
            return text;
        }

        public void setText(String text) {
            this.text = text;
        }
    }

    public static class AESRequestBody {
        private String text;
        private int keySize;
        private String key;

        public String getKey() {
            return key;
        }

        public void setKey(String key) {
            this.key = key;
        }

        public String getText() {
            return text;
        }

        public void setText(String text) {
            this.text = text;
        }

        public int getKeySize() {
            return keySize;
        }

        public void setKeySize(int keySize) {
            this.keySize = keySize;
        }
    }
}