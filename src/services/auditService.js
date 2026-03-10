import { collection, addDoc, serverTimestamp, query, where, getDocs } from 'firebase/firestore';
import { db } from '../config/firebase';

export async function saveAudit(userId, inputText, analysisResult) {
  try {
    const docRef = await addDoc(collection(db, 'audits'), {
      uid: userId,
      timestamp: serverTimestamp(),
      inputText: inputText.substring(0, 5000), // Enforce max size limit from rules
      threatLevel: analysisResult.threatLevel,
      threatScore: analysisResult.threatScore,
      aiReasoning: analysisResult.reasoning.substring(0, 500),
      redFlags: analysisResult.redFlags || [],
      geminiModel: 'gemini-1.5-pro',
      userAgent: navigator.userAgent
    });
    return docRef.id;
  } catch (error) {
    console.error("Error saving audit:", error);
    throw error;
  }
}

export async function getUserAudits(userId) {
  try {
    const q = query(
      collection(db, 'audits'), 
      where("uid", "==", userId)
    );
    const querySnapshot = await getDocs(q);
    const audits = [];
    
    querySnapshot.forEach((doc) => {
      audits.push({ id: doc.id, ...doc.data() });
    });
    
    // Client-side sort to avoid needing immediate composite index setup
    return audits.sort((a, b) => {
      const timeA = a.timestamp?.toMillis() || 0;
      const timeB = b.timestamp?.toMillis() || 0;
      return timeB - timeA;
    });
  } catch (error) {
    console.error("Error getting user audits:", error);
    throw error;
  }
}
