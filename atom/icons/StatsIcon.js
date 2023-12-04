import { StyleSheet, View } from 'react-native';
import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import { useContext } from 'react';
import themeContext from '../../theme/themeContext';

export default function StatsIcon({ icon }) {
    //Dark/Light Mode
    const theme = useContext(themeContext)

    return (
        <>
            {
                icon === "lightActive" && theme.theme === "light" ?
                    <View style={styles.container}>
                        <Svg width="100%" height="100%" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <Path d="M9.71062 0.15918H12.282C12.7625 0.15918 13.152 0.546974 13.152 1.02542V20.2892C13.152 20.8676 12.6807 21.3368 12.0999 21.3368H9.89272C9.31185 21.3368 8.84058 20.8676 8.84058 20.2892V1.02542C8.84058 0.546974 9.23007 0.15918 9.71062 0.15918Z" fill="#6164C3" stroke="#6164C3" stroke-width="0.169489" stroke-linecap="round" stroke-linejoin="round" />
                            <Path d="M1.99903 9.82129H4.31324C4.8646 9.82129 5.31143 10.267 5.31143 10.8151V20.3488C5.31143 20.9272 4.84015 21.3964 4.25928 21.3964H2.05214C1.47127 21.3964 1 20.9272 1 20.3488V10.8151C1 10.2662 1.44767 9.82129 1.99819 9.82129H1.99903Z" fill="#6164C3" stroke="#6164C3" stroke-width="0.169489" stroke-linecap="round" stroke-linejoin="round" />
                            <Path d="M17.6253 4.95361H20.0626C20.5802 4.95361 21 5.37163 21 5.88701V20.368C21 20.9296 20.5423 21.3854 19.9782 21.3854H17.7112C17.1472 21.3854 16.6895 20.9296 16.6895 20.368V5.88701C16.6895 5.37163 17.1093 4.95361 17.6269 4.95361H17.6253Z" fill="#6164C3" stroke="#6164C3" stroke-width="0.169489" stroke-linecap="round" stroke-linejoin="round" />
                        </Svg>
                    </View>
                    :
                    <>
                        {
                            theme.theme === "light" ?
                                <View style={styles.container}>
                                    <Svg width="100%" height="100%" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <Path d="M9.71062 0.15918H12.282C12.7625 0.15918 13.152 0.546974 13.152 1.02542V20.2892C13.152 20.8676 12.6807 21.3368 12.0999 21.3368H9.89272C9.31185 21.3368 8.84058 20.8676 8.84058 20.2892V1.02542C8.84058 0.546974 9.23007 0.15918 9.71062 0.15918Z" fill="#B6BAC0" stroke="#B6BAC0" stroke-width="0.169489" stroke-linecap="round" stroke-linejoin="round" />
                                        <Path d="M1.99903 9.82129H4.31324C4.8646 9.82129 5.31143 10.267 5.31143 10.8151V20.3488C5.31143 20.9272 4.84015 21.3964 4.25928 21.3964H2.05214C1.47127 21.3964 1 20.9272 1 20.3488V10.8151C1 10.2662 1.44767 9.82129 1.99819 9.82129H1.99903Z" fill="#B6BAC0" stroke="#B6BAC0" stroke-width="0.169489" stroke-linecap="round" stroke-linejoin="round" />
                                        <Path d="M17.6253 4.95361H20.0626C20.5802 4.95361 21 5.37163 21 5.88701V20.368C21 20.9296 20.5423 21.3854 19.9782 21.3854H17.7112C17.1472 21.3854 16.6895 20.9296 16.6895 20.368V5.88701C16.6895 5.37163 17.1093 4.95361 17.6269 4.95361H17.6253Z" fill="#B6BAC0" stroke="#B6BAC0" stroke-width="0.169489" stroke-linecap="round" stroke-linejoin="round" />
                                    </Svg>
                                </View>
                                :
                                <>
                                    {
                                        icon === "lightActive" && theme.theme === "dark" ?
                                            <View style={styles.container}>
                                                <Svg width="100%" height="100%" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <Path d="M9.71062 0.15918H12.282C12.7625 0.15918 13.152 0.546974 13.152 1.02542V20.2892C13.152 20.8676 12.6807 21.3368 12.0999 21.3368H9.89272C9.31185 21.3368 8.84058 20.8676 8.84058 20.2892V1.02542C8.84058 0.546974 9.23007 0.15918 9.71062 0.15918Z" fill="#6164C3" stroke="#6164C3" stroke-width="0.169489" stroke-linecap="round" stroke-linejoin="round" />
                                                    <Path d="M1.99903 9.82129H4.31324C4.8646 9.82129 5.31143 10.267 5.31143 10.8151V20.3488C5.31143 20.9272 4.84015 21.3964 4.25928 21.3964H2.05214C1.47127 21.3964 1 20.9272 1 20.3488V10.8151C1 10.2662 1.44767 9.82129 1.99819 9.82129H1.99903Z" fill="#6164C3" stroke="#6164C3" stroke-width="0.169489" stroke-linecap="round" stroke-linejoin="round" />
                                                    <Path d="M17.6253 4.95361H20.0626C20.5802 4.95361 21 5.37163 21 5.88701V20.368C21 20.9296 20.5423 21.3854 19.9782 21.3854H17.7112C17.1472 21.3854 16.6895 20.9296 16.6895 20.368V5.88701C16.6895 5.37163 17.1093 4.95361 17.6269 4.95361H17.6253Z" fill="#6164C3" stroke="#6164C3" stroke-width="0.169489" stroke-linecap="round" stroke-linejoin="round" />
                                                </Svg>
                                            </View>
                                            :
                                            <View style={styles.container}>
                                                <Svg width="100%" height="100%" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <Path d="M9.71062 0.15918H12.282C12.7625 0.15918 13.152 0.546974 13.152 1.02542V20.2892C13.152 20.8676 12.6807 21.3368 12.0999 21.3368H9.89272C9.31185 21.3368 8.84058 20.8676 8.84058 20.2892V1.02542C8.84058 0.546974 9.23007 0.15918 9.71062 0.15918Z" fill="#7D8187" stroke="#7D8187" stroke-width="0.169489" stroke-linecap="round" stroke-linejoin="round" />
                                                    <Path d="M1.99903 9.82129H4.31324C4.8646 9.82129 5.31143 10.267 5.31143 10.8151V20.3488C5.31143 20.9272 4.84015 21.3964 4.25928 21.3964H2.05214C1.47127 21.3964 1 20.9272 1 20.3488V10.8151C1 10.2662 1.44767 9.82129 1.99819 9.82129H1.99903Z" fill="#7D8187" stroke="#7D8187" stroke-width="0.169489" stroke-linecap="round" stroke-linejoin="round" />
                                                    <Path d="M17.6253 4.95361H20.0626C20.5802 4.95361 21 5.37163 21 5.88701V20.368C21 20.9296 20.5423 21.3854 19.9782 21.3854H17.7112C17.1472 21.3854 16.6895 20.9296 16.6895 20.368V5.88701C16.6895 5.37163 17.1093 4.95361 17.6269 4.95361H17.6253Z" fill="#7D8187" stroke="#7D8187" stroke-width="0.169489" stroke-linecap="round" stroke-linejoin="round" />
                                                </Svg>
                                            </View>
                                    }
                                </>
                        }
                    </>
            }
        </>
    );
};

const styles = StyleSheet.create({
    container: {
        height: '45%',
        width: '100%',
    }
});


