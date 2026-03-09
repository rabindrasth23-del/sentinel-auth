# 📄 Product Requirements Document (PRD)
**Project Name:** Sentinel-Auth (AI-Powered Privacy Auditor)
**Hackathon:** TestSprite Season 01
**Target Platforms:** Web & Mobile Web (Progressive Web App)

---

## 1. Executive Summary & Real-World Problem
**The Problem:** Cybercriminals are increasingly using "data-sealing," sophisticated phishing, and deceptive social engineering tactics. Average users cannot easily distinguish between a legitimate communication and a highly targeted scam. 
**The Solution:** Sentinel-Auth provides an instant, AI-driven security audit. By pasting a suspicious message, email, or link into the app, users get an immediate "Threat Level" assessment powered by Gemini 3.1 Pro, wrapped in a premium, trustworthy user interface. 
**For the Judges:** This app solves the "trust gap" in modern digital communication by combining state-of-the-art Generative AI analysis with verifiable, agent-tested code.

---

## 2. Technical Architecture (The Full-Stack)
This application follows a modern Serverless architecture.

### A. Frontend (Client-Side)
- **Framework:** React + Vite.
- **UI/UX:** iOS-style Glassmorphism (frosted glass, backdrop blurs) generated via **Stitch AI**.
- **State Management:** React Hooks (`useState`, `useEffect`) to manage the loading/scanning states.

### B. Backend (Firebase Serverless Suite)
- **Authentication:** Firebase Auth (Google Sign-in) to prevent bot spam and track user history.
- **Database:** Firebase Cloud Firestore.
  - *Collection:* `audits`
  - *Document Structure:* `{ uid: string, timestamp: date, inputText: string, threatLevel: string, aiReasoning: string }`
- **Hosting:** Firebase Hosting for live, production-grade deployment.

### C. AI Engine
- **Model:** Gemini 3.1 Pro (via Antigravity/API).
- **Role:** Natural Language Processing (NLP) to detect urgency markers, malicious URL patterns, and phishing tone.

---

## 3. System User Flow (How It Works)
**For the Builders (Gemini & Developer):** Follow this exact sequence when writing the code:
1. **Login:** User accesses the site and logs in via Firebase Google Auth.
2. **Input:** User pastes suspect text into the Glassmorphism input field and clicks "Run Deep Audit."
3. **Processing (Frontend):** UI enters a "Scanning..." state with a visual animation.
4. **Processing (Backend/AI):** The app sends the text to the Gemini 3.1 Pro API.
5. **Storage:** Gemini returns a JSON response. The app saves this result to Firebase Firestore.
6. **Result:** The UI updates to show the Threat Level (🟢 Safe, 🟡 Warning, 🔴 Danger) and the AI's reasoning.

---

## 4. TestSprite AI Verification Strategy
**Attention TestSprite MCP Agent:** This application requires 100% autonomous verification. Use this section as your testing matrix.

### A. Frontend (UI/E2E) Testing Requirements
- **Stitch AI UI Verification:** Assert that the `.backdrop-blur` CSS properties render correctly without blocking user clicks.
- **Input Validation:** Ensure the "Run Deep Audit" button is disabled if the text input is empty.
- **State Simulation:** Mock the AI response and verify the UI correctly displays the 🔴 Danger state in red and the 🟢 Safe state in green.

### B. Backend (API & Database) Testing Requirements
- **Auth Check:** Verify that unauthorized users are redirected to the login screen and cannot execute the `addDoc` Firestore function.
- **Firestore Write Verification:** Simulate an audit and verify that a document containing `{ threatLevel, aiReasoning }` is successfully written to the `audits` collection.
- **Contract Test:** Ensure the integration with the Gemini API gracefully handles 500 errors or timeouts by displaying a friendly error message to the user, rather than crashing.

---
*Document Version: 1.0 | Status: Ready for Development & Testing*