// config.example.js
// ─────────────────────────────────────────────────────────────────────────────
// Copy this file to config.js and fill in your real values.
// config.js is gitignored — never commit it.
// ─────────────────────────────────────────────────────────────────────────────
window.ENV = {
  // Firebase — from Firebase Console > Project Settings > Your apps
  FIREBASE_API_KEY:             "YOUR_FIREBASE_API_KEY",
  FIREBASE_AUTH_DOMAIN:         "YOUR_PROJECT_ID.firebaseapp.com",
  FIREBASE_PROJECT_ID:          "YOUR_PROJECT_ID",
  FIREBASE_STORAGE_BUCKET:      "YOUR_PROJECT_ID.firebasestorage.app",
  FIREBASE_MESSAGING_SENDER_ID: "YOUR_SENDER_ID",
  FIREBASE_APP_ID:              "YOUR_APP_ID",
  FIREBASE_MEASUREMENT_ID:      "YOUR_MEASUREMENT_ID",

  // Cloudinary — from Cloudinary Console > Settings > Upload Presets
  CLOUDINARY_CLOUD:  "YOUR_CLOUD_NAME",
  CLOUDINARY_PRESET: "YOUR_UNSIGNED_PRESET_NAME",
};
