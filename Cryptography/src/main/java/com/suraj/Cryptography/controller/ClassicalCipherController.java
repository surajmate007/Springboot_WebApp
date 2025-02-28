package com.suraj.Cryptography.controller;

import com.suraj.Cryptography.services.AtbashCipher;
import com.suraj.Cryptography.services.CeaserCipher;
import com.suraj.Cryptography.services.RailfenceCipher;
import com.suraj.Cryptography.services.VignereCipher;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@CrossOrigin
@RequestMapping("/api")
public class ClassicalCipherController {

    @Autowired
    CeaserCipher cCipher;

    @Autowired
    VignereCipher vCipher;

    @Autowired
    RailfenceCipher rfCipher;

    @Autowired
    AtbashCipher abCipher;

    @PostMapping("/ceaserEnc")
    public String encryptCeaser(@RequestBody CeaserCipherRequestBody request){
        String stText = request.getText();
        int iKey = Integer.parseInt(request.getKey());
        System.out.println("text value : " + stText);
        System.out.println("shift value : " + iKey);
        String cipherText = cCipher.encrypt(stText, iKey);
        System.out.println("Encrypted text : " + cipherText);
        return cipherText;
    }

    @PostMapping("/ceaserDec")
    public String decryptCeaser(@RequestBody CeaserCipherRequestBody request){
        String stText = request.getText();
        int iKey = Integer.parseInt(request.getKey());
        System.out.println("text value : " + stText);
        System.out.println("shift value : " + iKey);
        String plainText = cCipher.decrypt(stText, iKey);
        System.out.println("Encrypted text : " + plainText);
        return plainText;
    }

    @PostMapping("/vignereEnc")
    public String encryptVignere(@RequestBody VignereCipherRequestBody request){
        String stText = request.getText();
        String stkey = request.getKey();
        System.out.println("text value : " + stText);
        System.out.println("key value : " + stkey);
        String cipherText = vCipher.encrypt(stText, stkey);
        System.out.println("Encrypted text : " + cipherText);
        return cipherText;
    }

    @PostMapping("/vignereDec")
    public String decryptVignere(@RequestBody VignereCipherRequestBody request){
        String stText = request.getText();
        String stkey = request.getKey();
        System.out.println("text value : " + stText);
        System.out.println("key value : " + stkey);
        String plainText = vCipher.decrypt(stText, stkey);
        System.out.println("Encrypted text : " + plainText);
        return plainText;
    }

    @PostMapping("/railfenceEnc")
    public String encryptRailFence(@RequestBody RailFenceCipherRequestBody request) {
        String stText = request.getText();
        int ikey = request.getKey();
        System.out.println("text value : " + stText);
        System.out.println("key value : " + ikey);
        String cipherText = rfCipher.encrypt(request.getText(), request.getKey());
        return cipherText;
    }

    @PostMapping("/railfenceDec")
    public String decryptRailFence(@RequestBody RailFenceCipherRequestBody request) {
        String stText = request.getText();
        int ikey = request.getKey();
        System.out.println("text value : " + stText);
        System.out.println("key value : " + ikey);
        String plainText = rfCipher.decrypt(request.getText(), request.getKey());
        return plainText;
    }

    @PostMapping("/atbashEnc")
    public String encryptAtbash(@RequestBody AtbashCipherRequestBody request) {
        String stText = request.getText();
        System.out.println("text value : " + stText);
        return abCipher.encrypt(request.getText());
    }

    @PostMapping("/atbashDec")
    public String decryptAtbash(@RequestBody AtbashCipherRequestBody request) {
        String stText = request.getText();
        System.out.println("text value : " + stText);
        return abCipher.decrypt(request.getText());
    }


    public static class CeaserCipherRequestBody {
        private String text; // Change from stText to text
        private String key;  // Change from stKey to key

        public String getText() {
            return text;
        }

        public void setText(String text) {
            this.text = text;
        }

        public String getKey() {
            return key; // Change from stKey to key
        }

        public void setKey(String key) {
            this.key = key;
        }
    }


    public static class VignereCipherRequestBody {
        private String text; // Change from stText to text
        private String key;  // Change from stKey to key

        public String getText() {
            return text;
        }

        public void setText(String text) {
            this.text = text;
        }

        public String getKey() {
            return key; // Change from stKey to key
        }

        public void setKey(String key) {
            this.key = key;
        }
    }


    public static class RailFenceCipherRequestBody {
        private String text;
        private int key;

        public String getText() {
            return text;
        }

        public void setText(String text) {
            this.text = text;
        }

        public int getKey() {
            return key;
        }

        public void setKey(int key) {
            this.key = key;
        }
    }

    public static class AtbashCipherRequestBody {
        private String text;

        public String getText() {
            return text;
        }

        public void setText(String text) {
            this.text = text;
        }
    }
}
