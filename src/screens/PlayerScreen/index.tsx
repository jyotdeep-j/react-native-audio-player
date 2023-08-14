import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import MusicPlayer from '../../components/MusicPlayer';

const PlayerScreen: React.FC = () => {
    return (
        <View style={styles.container}>
            <MusicPlayer />
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
})

export default PlayerScreen;