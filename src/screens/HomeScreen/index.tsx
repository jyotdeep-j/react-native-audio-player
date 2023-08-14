import React from 'react';
import {
    View,
    Text,
    Button,
    StyleSheet
} from 'react-native';

interface HomeScreenProps {
    navigation: any;
}

const HomeScreen: React.FC<HomeScreenProps> = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <Text style={styles.heading}>Welcome to the Music App!</Text>
            <Button
                title="Go to Player"
                onPress={() => navigation.navigate('Player')}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: "center",
        backgroundColor: "#fff",
    },
    heading: {
        textAlign: 'center',
    }
})


export default HomeScreen;


