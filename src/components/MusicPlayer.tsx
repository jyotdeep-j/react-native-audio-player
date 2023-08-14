import React, { useState, useEffect } from 'react';
import { View, Text, Button } from 'react-native';
import TrackPlayer, {
    usePlaybackState,
    TrackPlayerEvents,
    STATE_PLAYING,
    STATE_PAUSED,
} from 'react-native-track-player';

const MusicPlayer: React.FC = () => {
    const playbackState = usePlaybackState();
    const [isPlaying, setIsPlaying] = useState(false);

    useEffect(() => {
        setupTrackPlayer();
    }, []);

    const setupTrackPlayer = async () => {
        await TrackPlayer.setupPlayer();

        await TrackPlayer.add({
            id: '1',
            url: require('../assets/sound.mp3'),// Update with your audio file path
            title: 'Example Track',
            artist: 'Unknown Artist',
            artwork: require('../assets/artwork.jpg'), // Update with your artwork image
        });

        await TrackPlayer.updateOptions({
            stopWithApp: true,
        });
    };

    useEffect(() => {
        if (playbackState === STATE_PLAYING) {
            setIsPlaying(true);
        } else if (playbackState === STATE_PAUSED) {
            setIsPlaying(false);
        }
    }, [playbackState]);

    const togglePlayback = async () => {
        if (isPlaying) {
            await TrackPlayer.pause();
        } else {
            await TrackPlayer.play();
        }
    };

    return (
        <View>
            <Text>Music Player</Text>
            <Button title={isPlaying ? 'Pause' : 'Play'} onPress={togglePlayback} />
        </View>
    );
};

export default MusicPlayer;
