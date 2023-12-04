import { useState, useEffect } from 'react';
import { Text, View } from 'react-native';
import { getJournalEntries } from './firebaseService'

const JournalKeywordsStats = ({ username }) => {
    const [sentsCount, setSentsCount] = useState({});

    useEffect(() => {
        const fetchData = async () => {
            try {
                const journals = await getJournalEntries(username);
                processJournalEntries(journals);
            } catch (error) {
                console.error('Error fetching journal entries:', error);
            }
        };
        fetchData();
    }, [username]);

    const processJournalEntries = (journals) => {
        // Initalize an object to store the counts
        const counts = {};

        //Loop through each journal entry 
        Object.values(journals).forEach(entry => {
            entry.keywords.forEach(keyword => {
                if (!counts[keyword]) {
                    counts[keyword] = {
                        count: 0,
                        chartTitle: keyword,
                        advice: "advice for" + keyword
                    };
                }
                counts[keyword].count++;
            });
        });
        setSentsCount(counts);
    };

    return (
        <View>
            {Object.entries(sentsCount).map(([keyword, data]) => (
                <Text key={keyword} onPress={() => alert(data.advice)}>
                    {keyword} - {data.count}
                </Text>
            ))}
        </View>
    );
};

export default JournalKeywordsStats;