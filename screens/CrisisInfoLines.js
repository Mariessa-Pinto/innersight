import globalStyles from '../styles/global'
import { View, ScrollView } from 'react-native';
import { useState, useContext } from 'react';
import themeContext from '../theme/themeContext';
import NavBar from '../molecules/Navigation/NavBar';
import Header from '../molecules/Header/Header';
import OrganizationCard from '../molecules/CrisisSupportCard/OrganizationCard'
import SearchBar from '../atom/Search/SearchBar'

export default function CrisisInfoLines({ navigation }) {

    //Dark/Light Mode
    const [darkMode, setDarkMode] = useState(false)
    const theme = useContext(themeContext)

    return (
        <View style={[globalStyles.outerContainer, { backgroundColor: theme.backgroundGreyLight }]}>
            <ScrollView>
                <View style={[globalStyles.contentContainer, { backgroundColor: theme.background }]}>
                    <Header title='Crisis & Information Lines' navigation={navigation} />
                    <SearchBar placeholder="Search by Name" />
                    <OrganizationCard />
                </View>
            </ScrollView>
            <NavBar navigation={navigation} variation='profile' />
        </View>
    );
}
