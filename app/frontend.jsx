import { View, Text, ImageBackground } from 'react-native'
import React from 'react'

const frontend = () => {
    return (
        <ImageBackground
            source={{
                uri: "https://images.unsplash.com/photo-1557683311-eac922347aa1",
            }}
            className="flex-1"
        >
            <View>
                <Text>frontend</Text>
            </View>
        </ImageBackground>

    )
}

export default frontend