# TestSprite Test Documentation - Sentinel Auth

This directory contains TestSprite-generated tests and documentation for the Sentinel Auth project.

## Authentication Implementation: Google Auth

The project implements **Google Authentication** using Firebase Auth's `signInWithPopup` method. 

### Key Features:
- **Provider**: `GoogleAuthProvider` is used to allow users to sign in with their Google accounts.
- **Mock RBAC System**: A custom Role-Based Access Control (RBAC) system is implemented in `AuthContext.jsx`. 
    - Users with emails ending in `@admin.com`, `@sentinel.com`, or `@gmail.com` are automatically assigned the **Admin** role.
    - Other users are assigned the **User** role.
    - Anonymous logins are assigned the **Guest** role.
- **Persistence**: Upon successful authentication, user profiles (uid, email, display name, role, etc.) are synchronized with the Firestore `users` collection.

## AI-Verified Firestore Audit Logs

The security architecture includes an automated **AI Verification** layer for all logged actions.

### Implementation Details:
- **Audit Service**: The `src/services/auditService.js` handles the persistence of security events into the `audits` collection in Firestore.
- **Gemini Integration**: Every log entry is processed through **Gemini 1.5 Pro** (via `@google/generative-ai`).
- **Verification Protocol**:
    1. **Text Analysis**: User inputs or system logs are sent to the Gemini model with a specialized security prompt.
    2. **Threat Assessment**: The AI scans for social engineering, phishing patterns, urgency markers, and suspicious URLs.
    3. **Metadata Enrichment**: The log entry is saved with:
        - `threatScore`: A numerical rating (0-100).
        - `threatLevel`: Categorical rating (Safe, Warning, Danger).
        - `aiReasoning`: A detailed explanation derived from the AI analysis.
        - `redFlags`: Specific indicators flagged by the model.
- **Benefit**: This provides a "Living Audit Trail" where every record is pre-analyzed for security breaches or malicious intent, allowing administrators to prioritize responses based on AI-generated threat scores.

## Test Scope

The following areas are prioritized for TestSprite verification:
1. **Auth Flow**: Success and failure scenarios for Google Sign-In and RBAC assignment.
2. **Audit Integrity**: Verification that inputs correctly trigger Gemini analysis and results are accurately stored in Firestore.
3. **UI/UX Consistency**: Ensuring the glassmorphism design remains functional across different auth states.
