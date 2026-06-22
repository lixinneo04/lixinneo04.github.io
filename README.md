# My ePortfolio — Setup Guide

A clean, modern portfolio website powered by Firebase. Visitors see your projects at `index.html`; you manage everything through the password-protected `admin.html`.

---

## Step 1 — Create a Firebase project

1. Go to **https://console.firebase.google.com** and click **Add project**
2. Name it (e.g. `my-eportfolio`) and follow the prompts
3. Once created, click **"Web"** (</>) to add a web app
4. Register the app — Firebase will show you a `firebaseConfig` object. **Copy it.**

---

## Step 2 — Paste your config

Open both `index.html` and `admin.html`. Find this block near the bottom of each file and replace it with your actual config:

```js
const firebaseConfig = {
  apiKey: "YOUR_API_KEY",
  authDomain: "YOUR_PROJECT_ID.firebaseapp.com",
  projectId: "YOUR_PROJECT_ID",
  storageBucket: "YOUR_PROJECT_ID.appspot.com",
  messagingSenderId: "YOUR_SENDER_ID",
  appId: "YOUR_APP_ID"
};
```

---

## Step 3 — Enable Firebase services

### Firestore Database

- Sidebar → **Firestore Database** → **Create database**
- Choose **Start in production mode** → pick a region → Done

Paste these security rules (Firestore → Rules tab):
