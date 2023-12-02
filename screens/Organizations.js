import globalStyles from '../styles/global'
import { useState, useContext } from 'react';
import { View, ScrollView } from 'react-native';
import themeContext from '../theme/themeContext';
import fontContext from '../theme/fontContext';
import NavBar from '../molecules/Navigation/NavBar';
import Header from '../molecules/Header/Header';

import SearchBar from '../atom/Search/SearchBar';
import OrganizationCard from '../molecules/CrisisSupportCard/OrganizationCard'

export default function Organizations({ navigation }) {

    //Dark/Light Mode
    const [darkMode, setDarkMode] = useState(false)
    const theme = useContext(themeContext)

    //Font Size
    const fontTheme = useContext(fontContext)

    return (
        <View style={[globalStyles.outerContainer, { backgroundColor: theme.backgroundGreyLight }]}>
            <ScrollView>
                <View style={[globalStyles.contentContainer, { backgroundColor: theme.background }]}>
                    <Header
                        title="Organizations"
                        navigation={navigation}
                    />
                    <View>
                        <SearchBar
                            placeholder="Search by City/Town"
                        />
                        <OrganizationCard />
                    </View>
                </View>
            </ScrollView>
            <NavBar navigation={navigation} variation='profile' />
        </View>

    );
}
