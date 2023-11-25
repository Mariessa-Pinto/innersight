import globalStyles from '../../styles/global.js'
import { StyleSheet, Button, View, Text, Image } from 'react-native';
import * as React from 'react';
import Svg, { Path } from 'react-native-svg';


import { useContext } from 'react';
import themeContext from '../../theme/themeContext';


export default function JournalIcon({ icon }) {

    //Dark/Light Mode
    const theme = useContext(themeContext)

    return (
        <>
            {
                icon === "lightActive" && theme.theme === "light" ?
                    <View style={styles.container}>
                        <Svg width="100%" height="100%" viewBox="0 0 22 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <Path d="M7.73569 0.939453H19.2706C20.2256 0.939453 21.0001 1.77617 21.0001 2.80605V20.8381C21.0001 21.8689 20.2248 22.7047 19.2706 22.7047H7.73569C7.23619 22.7047 6.83105 22.2675 6.83105 21.7284V1.91577C6.83105 1.37669 7.23619 0.939453 7.73569 0.939453Z" fill="#6164C3" stroke="#EDEAEA" stroke-width="0.711639" stroke-linecap="round" stroke-linejoin="round" />
                            <Path d="M15.4332 0.939453H4.85501C3.86341 0.939453 3.05957 1.807 3.05957 2.87717V20.7679C3.05957 21.8381 3.86341 22.7056 4.85501 22.7056H15.4332C16.4248 22.7056 17.2286 21.8381 17.2286 20.7679V2.87717C17.2286 1.807 16.4248 0.939453 15.4332 0.939453Z" fill="#6164C3" stroke="#EDEAEA" stroke-width="0.711639" stroke-linecap="round" stroke-linejoin="round" />
                            <Path d="M1.76929 11.8125H4.40916" stroke="#B6BAC0" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                            <Path d="M1.76929 8.45654H4.40916" stroke="#B6BAC0" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                            <Path d="M1.76929 15.1689H4.40916" stroke="#B6BAC0" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                            <Path d="M1.76929 18.5244H4.40916" stroke="#B6BAC0" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                            <Path d="M1.76929 5.1001H4.40916" stroke="#B6BAC0" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                        </Svg>
                    </View>
                    :
                    <>
                        {
                            theme.theme === "light" ?
                                <View style={styles.container}>
                                    <Svg width="100%" height="100%" viewBox="0 0 22 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <Path d="M7.73569 0.939453H19.2706C20.2256 0.939453 21.0001 1.77617 21.0001 2.80605V20.8381C21.0001 21.8689 20.2248 22.7047 19.2706 22.7047H7.73569C7.23619 22.7047 6.83105 22.2675 6.83105 21.7284V1.91577C6.83105 1.37669 7.23619 0.939453 7.73569 0.939453Z" fill="#B6BAC0" stroke="#EDEAEA" stroke-width="0.711639" stroke-linecap="round" stroke-linejoin="round" />
                                        <Path d="M15.4332 0.939453H4.85501C3.86341 0.939453 3.05957 1.807 3.05957 2.87717V20.7679C3.05957 21.8381 3.86341 22.7056 4.85501 22.7056H15.4332C16.4248 22.7056 17.2286 21.8381 17.2286 20.7679V2.87717C17.2286 1.807 16.4248 0.939453 15.4332 0.939453Z" fill="#B6BAC0" stroke="#EDEAEA" stroke-width="0.711639" stroke-linecap="round" stroke-linejoin="round" />
                                        <Path d="M1.76929 11.8125H4.40916" stroke="#B6BAC0" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                        <Path d="M1.76929 8.45654H4.40916" stroke="#B6BAC0" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                        <Path d="M1.76929 15.1689H4.40916" stroke="#B6BAC0" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                        <Path d="M1.76929 18.5244H4.40916" stroke="#B6BAC0" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                        <Path d="M1.76929 5.1001H4.40916" stroke="#B6BAC0" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                    </Svg>
                                </View>
                                :
                                <>
                                {
                                    icon === "lightActive" && theme.theme === "dark" ?
                                    <View style={styles.container}>
                                    <Svg width="100%" height="100%" viewBox="0 0 22 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <Path d="M7.73569 0.939453H19.2706C20.2256 0.939453 21.0001 1.77617 21.0001 2.80605V20.8381C21.0001 21.8689 20.2248 22.7047 19.2706 22.7047H7.73569C7.23619 22.7047 6.83105 22.2675 6.83105 21.7284V1.91577C6.83105 1.37669 7.23619 0.939453 7.73569 0.939453Z" fill="#7E82F2" stroke="#2B2D31" stroke-width="0.711639" stroke-linecap="round" stroke-linejoin="round" />
                                        <Path d="M15.4332 0.939453H4.85501C3.86341 0.939453 3.05957 1.807 3.05957 2.87717V20.7679C3.05957 21.8381 3.86341 22.7056 4.85501 22.7056H15.4332C16.4248 22.7056 17.2286 21.8381 17.2286 20.7679V2.87717C17.2286 1.807 16.4248 0.939453 15.4332 0.939453Z" fill="#7E82F2" stroke="#2B2D31" stroke-width="0.711639" stroke-linecap="round" stroke-linejoin="round" />
                                        <Path d="M1.76929 11.8125H4.40916" stroke="#B6BAC0" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                        <Path d="M1.76929 8.45654H4.40916" stroke="#B6BAC0" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                        <Path d="M1.76929 15.1689H4.40916" stroke="#B6BAC0" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                        <Path d="M1.76929 18.5244H4.40916" stroke="#B6BAC0" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                        <Path d="M1.76929 5.1001H4.40916" stroke="#B6BAC0" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                    </Svg>
                                </View>
                                :
                                <View style={styles.container}>
                                    <Svg width="100%" height="100%" viewBox="0 0 22 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <Path d="M7.73569 0.939453H19.2706C20.2256 0.939453 21.0001 1.77617 21.0001 2.80605V20.8381C21.0001 21.8689 20.2248 22.7047 19.2706 22.7047H7.73569C7.23619 22.7047 6.83105 22.2675 6.83105 21.7284V1.91577C6.83105 1.37669 7.23619 0.939453 7.73569 0.939453Z" fill="#7D8187" stroke="#2B2D31" stroke-width="0.711639" stroke-linecap="round" stroke-linejoin="round" />
                                        <Path d="M15.4332 0.939453H4.85501C3.86341 0.939453 3.05957 1.807 3.05957 2.87717V20.7679C3.05957 21.8381 3.86341 22.7056 4.85501 22.7056H15.4332C16.4248 22.7056 17.2286 21.8381 17.2286 20.7679V2.87717C17.2286 1.807 16.4248 0.939453 15.4332 0.939453Z" fill="#7D8187" stroke="#2B2D31" stroke-width="0.711639" stroke-linecap="round" stroke-linejoin="round" />
                                        <Path d="M1.76929 11.8125H4.40916" stroke="#7D8187" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                        <Path d="M1.76929 8.45654H4.40916" stroke="#7D8187" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                        <Path d="M1.76929 15.1689H4.40916" stroke="#7D8187" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                        <Path d="M1.76929 18.5244H4.40916" stroke="#7D8187" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                        <Path d="M1.76929 5.1001H4.40916" stroke="#7D8187" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
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
        display: 'flex',

    }
});


