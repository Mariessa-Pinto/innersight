import { ref, set, push, get } from 'firebase/database';
import { database } from './firebaseConfig';

export const saveJournalEntry = async (userId, entry) => {
    const journalRef = ref(database, `users/${userId}/journal`);
    await push(journalRef, entry);
};

export const getJournalEntries = async (userId) => {
    const journalRef = ref(database, `users/${userId}/journal`);
    const snapshot = await get(journalRef);
    return snapshot.val() || {}
}