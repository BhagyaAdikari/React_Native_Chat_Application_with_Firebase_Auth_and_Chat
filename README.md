# React Native Chat Application with Firebase Auth and Chat 🚀💬

Welcome to the **React Native Chat Application**! This project is a fully functional chat application built using **React Native** and powered by **Firebase** for authentication and real-time chat. Whether you're building a messaging app or learning how to integrate Firebase with React Native, this project has got you covered! 🌟

---

## Features ✨

- **Firebase Authentication** 🔐
  - Sign up and log in using email and password.
  - Secure user authentication with Firebase Auth.

- **Real-Time Chat** 💬
  - Send and receive messages in real-time.
  - Store chat history in Firebase Firestore.

- **User-Friendly Interface** 🎨
  - Clean and intuitive UI for seamless user experience.
  - Built with React Native components and styled with ease.

- **Cross-Platform** 📱
  - Works on both **iOS** and **Android** platforms.

---

## Prerequisites 📋

Before you get started, make sure you have the following installed:

- **Node.js** (v16 or higher) 🟢
- **npm** or **yarn** 📦
- **React Native CLI** or **Expo CLI** 🛠️
- **Firebase Account** 🔥 (for setting up Firebase Auth and Firestore)

---

## Installation 🛠️

1. **Clone the Repository** 📥
   ```bash
   git clone https://github.com/your-username/React_Native_Chat_Application.git
   cd React_Native_Chat_Application
   ```

2. **Install Dependencies** 📦
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Set Up Firebase** 🔥
   - Go to the [Firebase Console](https://console.firebase.google.com/).
   - Create a new project and enable **Authentication** and **Firestore**.
   - Download the `google-services.json` (for Android) and `GoogleService-Info.plist` (for iOS) files.
   - Place these files in the appropriate directories:
     - `android/app/` for Android.
     - `ios/` for iOS.

4. **Configure Firebase in the Project** ⚙️
   - Open the `firebaseConfig.js` file in the `src` directory.
   - Replace the placeholder values with your Firebase project credentials.

5. **Run the Application** 🚀
   - For Android:
     ```bash
     npx react-native run-android
     ```
   - For iOS:
     ```bash
     npx react-native run-ios
     ```

---

## Folder Structure 📂

```
React_Native_Chat_Application/
├── android/               # Android-specific files
├── ios/                   # iOS-specific files
├── src/                   # Source code
│   ├── components/        # Reusable components
│   ├── screens/           # Application screens
│   ├── firebaseConfig.js  # Firebase configuration
│   └── App.js             # Main application file
├── .gitignore             # Git ignore file
├── package.json           # Project dependencies
└── README.md              # This file
```

---

## Screenshots 📸

| Login Screen | Chat Screen |
|--------------|-------------|
| ![Login Screen](screenshots/login.png) | ![Chat Screen](screenshots/chat.png) |

---

## Contributing 🤝

Contributions are welcome! If you'd like to contribute, please follow these steps:

1. Fork the repository.
2. Create a new branch (`git checkout -b feature/YourFeatureName`).
3. Commit your changes (`git commit -m 'Add some feature'`).
4. Push to the branch (`git push origin feature/YourFeatureName`).
5. Open a pull request.

---

## License 📄

This project is licensed under the **MIT License**. See the [LICENSE](LICENSE) file for details.

---

## Acknowledgments 🙏

- **React Native** for the amazing framework.
- **Firebase** for providing the backend services.
- **You** for using this project! 😊

---

Happy Coding! 💻✨
