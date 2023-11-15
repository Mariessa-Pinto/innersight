import { ref, set, push, get } from 'firebase/database';
import { database } from './firebaseConfig';

export const saveJournalEntry = async (username, entry) => {
    const journalRef = ref(database, `users/anika${username}/journal`);
    const newJournalEntryRef = push(journalRef);
    await set(newJournalEntryRef, entry);
};

export const getJournalEntries = async (username) => {
    const journalRef = ref(database, `users/${username}/journal`);
    const snapshot = await get(journalRef);
    return snapshot.val() || {}
}