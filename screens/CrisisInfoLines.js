import globalStyles from '../styles/global'
import { Text, View, StyleSheet } from 'react-native';
import { useState, useContext } from 'react';
import themeContext from '../theme/themeContext';
import { ScrollView } from 'react-native-gesture-handler';
import NavBar from '../molecules/Navigation/NavBar';
import Header from '../molecules/Header/Header';
import OrganizationCard from '../molecules/CrisisSupportCard/OrganizationCard'
import SearchBar from '../atom/Search/SearchBar'




export default function CrisisInfoLines({ navigation }) {

    //Dark/Light Mode
    const [darkMode, setDarkMode] = useState(false)
    const theme = useContext(themeContext)


    return (
        <View style={[globalStyles.container, { backgroundColor: theme.background }]}>
            <Header title='Crisis & Information Lines' navigation={navigation} />
            <View style={[globalStyles.contentContainer]}>
                <SearchBar placeholder="Search by Name" />
                <OrganizationCard />
            </View>
            <NavBar navigation={navigation} variation='profile'/>
        </View>
    );
}

const styles = StyleSheet.create({


});