import React, { createContext, useContext, useEffect, useState } from 'react';
import { auth, googleProvider, db } from '../config/firebase';
import { signInWithPopup, signOut, onAuthStateChanged, signInAnonymously } from 'firebase/auth';
import { doc, setDoc, serverTimestamp } from 'firebase/firestore';

const AuthContext = createContext();

export function useAuth() {
  return useContext(AuthContext);
}

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  async function login() {
    try {
      const result = await signInWithPopup(auth, googleProvider);
      return result.user;
    } catch (error) {
      console.error("Login failed:", error);
      throw error;
    }
  }

  async function loginAsGuest() {
    try {
      const result = await signInAnonymously(auth);
      return result.user;
    } catch (error) {
      console.error("Guest login failed:", error);
      throw error;
    }
  }

  async function logout() {
    try {
      await signOut(auth);
    } catch (error) {
      console.error("Logout failed:", error);
      throw error;
    }
  }

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (currentUser) => {
      if (currentUser) {
        // Basic mock RBAC: allow @gmail.com for easy hackathon demonstration alongside corporate domains
        const isAdmin = currentUser.email && (
          currentUser.email.endsWith('@admin.com') || 
          currentUser.email.endsWith('@sentinel.com') ||
          currentUser.email.endsWith('@gmail.com')
        );
        currentUser.role = isAdmin ? 'admin' : (currentUser.isAnonymous ? 'guest' : 'user');
        
        // Save to Firestore
        try {
          const userRef = doc(db, 'users', currentUser.uid);
          await setDoc(userRef, {
            uid: currentUser.uid,
            email: currentUser.email || 'Anonymous',
            displayName: currentUser.displayName || (currentUser.isAnonymous ? 'Guest User' : 'Unknown'),
            photoURL: currentUser.photoURL || null,
            role: currentUser.role,
            lastLogin: serverTimestamp(),
            isAnonymous: currentUser.isAnonymous
          }, { merge: true });
        } catch (error) {
          console.error("Error saving user to Firestore:", error);
        }
      }
      setUser(currentUser);
      setLoading(false);
    });

    return unsubscribe;
  }, []);

  const value = {
    user,
    login,
    loginAsGuest,
    logout
  };

  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  );
}
