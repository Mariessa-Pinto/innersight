import { ref, push, get, set, remove } from 'firebase/database';
import { database } from './firebaseConfig';
import { getAuth } from 'firebase/auth';

const keywordsList = ['happy', 'excited', 'motivated', 'high energy', 'calm', 'relaxed', 'gratitude', 'joy', 'serenity', 'empowered', 'inspired', 'hopeful', 'love', 'bliss', 'harmony', 'courage', 'triumph', 'abundance', ' content', 'fulfilled', 'optimistic', 'healing', 'success', 'good', 'appreciation', 'growth', 'tired', 'low energy', 'unmotivated', 'lazy', 'angry', 'disappointed', 'sad', 'stressed', 'anguished', 'despair', 'frustrated', 'lonely', 'anxious', 'depressed', 'regret', 'resent', 'sorrow', 'grief', 'stress', 'confused', 'envious', 'bitter', 'rejected', 'guilty', 'irritated', 'melancholy', 'pessimistic' ];

export const saveJournalEntry = async (username, entry) => {
    const auth = getAuth();
    const uid = auth.currentUser.uid;
    
    if (uid === null) {
        console.error('User not authenticated.');
        return;
    }

    const journalRef = ref(database, `users/${uid}/journal`);
    const newJournalEntryRef = push(journalRef);

    // extract keywords
    const extractedKeywords = extractKeywords(entry.content);

    await set(newJournalEntryRef, {...entry, title: entry.title, keywords: extractedKeywords, sentis: entry.sentis || [], accuracyMap: entry.accuracyMap || new Map()});
};

export const getJournalEntries = async () => {
    const auth = getAuth();
    const uid = auth.currentUser.uid;

    if (uid === null) {
        console.error('User not authenticated.');
        return {};
    }

    console.log(`Fetching entries for user: ${uid}`);
    const journalRef = ref(database, `users/${uid}/journal`);
    const snapshot = await get(journalRef);
    
    if (snapshot.exists()) {
        console.log("Entries found: ", snapshot.val());
        return snapshot.val();
    } else {
        console.log("No entries found for user: ", uid);
        return {};
    }
}
 function extractKeywords(text) {
      let extractedKeywords = [];
      keywordsList.forEach(keyword => {
        if (text.toLowerCase().includes(keyword.toLowerCase())) {
               extractedKeywords.push(keyword);
           }
       });
      return extractedKeywords;
 }

export const deleteJournalEntry = async (key) => {
    const auth = getAuth();
    const uid = auth.currentUser.uid;

    if (uid === null) {
        console.error('User not authenticated.');
        return;
    }

    console.log(`Delete entry for user: ${uid} and key: ${key}`);
    const deleteJournalRef = ref(database, `users/${uid}/journal/${key}`);

    // Delete the entry
    await remove(deleteJournalRef);
}





// import { ref, set, push, get } from 'firebase/database';
// import { database } from './firebaseConfig';
// import { getAuth } from 'firebase/auth';

// const keywordsList = ['happy', 'excited', 'motivated', 'high energy', 'calm', 'relaxed', 'gratitude', 'joy', 'serenity', 'empowered', 'inspired', 'hopeful', 'love', 'bliss', 'harmony', 'courage', 'triumph', 'abundance', ' content', 'fulfilled', 'optimistic', 'healing', 'success', 'good', 'appreciation', 'growth', 'tired', 'low energy', 'unmotivated', 'lazy', 'angry', 'disappointed', 'sad', 'stressed', 'anguished', 'despair', 'frustrated', 'lonely', 'anxious', 'depressed', 'regret', 'resent', 'sorrow', 'grief', 'stress', 'confused', 'envious', 'bitter', 'rejected', 'guilty', 'irritated', 'melancholy', 'pessimistic' ]

// export const saveJournalEntry = async (username, entry) => {
//    const journalRef = ref(database, `users/${username}/journal`);
//    const newJournalEntryRef = push(journalRef);

    // extract keywords
//    const extractedKeywords = extractKeywords(entry.content);

//    await set(newJournalEntryRef, {...entry, title: entry.title, keywords: extractedKeywords, sentis: entry.sentis || [], accuracyMap: entry.accuracyMap || new Map()});
// };

// function extractKeywords(text) {
 //   let extractedKeywords = [];
 //   keywordsList.forEach(keyword => {
//        if (text.toLowerCase().includes(keyword.toLowerCase())) {
 //           extractedKeywords.push(keyword);
 //       }
 //   });
//    return extractedKeywords;
// }

// export const getJournalEntries = async (username) => {
//    console.log(`Fetching entries for user: ${username}`);
 //   const journalRef = ref(database, `users/${username}/journal`);
//    const snapshot = await get(journalRef);
//    if (snapshot.exists()) {
//        console.log("Entries found: ", snapshot.val());
 //       return snapshot.val();
//    } else {
 //       console.log("No entries found for user: ", username);
//        return {};
 //   }
// }

// export const deleteJournalEntries = async (username, key) => {
//    console.log(`Delete entries for user: ${username}`);
//    const deleteJournalRef = ref(database, `users/${username}/journal/${key}`);
//    console.log(deleteJournalRef)
    // //const snapshot = await get(deleteJournalRef);
    // if (snapshot.exists()) {
    //     console.log("Entries found: ", snapshot.val());
    //     return snapshot.val();
    // } else {
    //     console.log("No entries found for user: ", username);
    //     return {};
    // }
// }

