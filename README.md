# Cryptography Web App Using Spring Boot

## Overview
This project is a **full-stack web application** built using **React** for the frontend and **Spring Boot** for the backend. The application allows users to **encrypt and decrypt messages** using various cryptographic algorithms, including classical ciphers and modern encryption techniques.

## Features
- **Classical Ciphers**: Supports ciphers like **Atbash**.
- **Advanced Encryption**: Uses **AES (Advanced Encryption Standard)** for secure encryption and decryption.
- **REST API**: Backend exposes RESTful endpoints for processing encryption/decryption requests.
- **User-Friendly UI**: A simple React-based frontend for easy interaction.

## Tech Stack
- **Frontend**: React, JavaScript, HTML, CSS
- **Backend**: Java, Spring Boot, Spring Web
- **Security**: AES Encryption, Classical Ciphers
- **Build Tools**: Maven

## Project Structure
```
Springboot_WebApp-main/
│── Cryptography/                 # Backend (Spring Boot)
│   ├── src/main/java/com/suraj/Cryptography/
│   │   ├── controller/           # Controllers for API endpoints
│   │   │   ├── AdvancedCipherController.java
│   │   │   ├── ClassicalCipherController.java
│   │   ├── services/             # Encryption/Decryption logic
│   │   │   ├── AESUtil.java
│   │   │   ├── AtbashCipher.java
│   ├── pom.xml                   # Maven dependencies
│── frontend/                      # React Frontend
│   ├── src/
│   ├── public/
│   ├── package.json
```

## How to Run
### **Backend (Spring Boot)**
1. Navigate to the backend directory:
   ```bash
   cd Springboot_WebApp-main/Cryptography
   ```
2. Build and run the Spring Boot application:
   ```bash
   mvn clean install
   mvn spring-boot:run
   ```
3. The backend will be available at: `http://localhost:8080`

### **Frontend (React)**
1. Navigate to the frontend directory:
   ```bash
   cd Springboot_WebApp-main/frontend
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the React development server:
   ```bash
   npm start
   ```
4. The frontend will be available at: `http://localhost:3000`

## API Endpoints
### **Classical Cipher API**
- **Encrypt using Atbash Cipher:**
  ```
  POST /api/classical/encrypt
  Body: { "text": "HELLO" }
  Response: { "encryptedText": "SVOOL" }
  ```
- **Decrypt using Atbash Cipher:**
  ```
  POST /api/classical/decrypt
  Body: { "text": "SVOOL" }
  Response: { "decryptedText": "HELLO" }
  ```

### **Advanced Cipher API**
- **Encrypt using AES:**
  ```
  POST /api/advanced/encrypt
  Body: { "text": "SecretMessage", "key": "MySecureKey123" }
  Response: { "encryptedText": "<AES_ENCRYPTED_DATA>" }
  ```
- **Decrypt using AES:**
  ```
  POST /api/advanced/decrypt
  Body: { "text": "<AES_ENCRYPTED_DATA>", "key": "MySecureKey123" }
  Response: { "decryptedText": "SecretMessage" }
  ```

## Future Enhancements
- Add more encryption algorithms (e.g., RSA, DES, Blowfish)
- Implement user authentication for secure access
- Store encrypted messages in a database
