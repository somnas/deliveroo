import { View, Text, SafeAreaView, Image } from 'react-native';
import React, { useLayoutEffect } from 'react';
import { useNavigation } from '@react-navigation/native';

export default function HomeScreen() {
    const navigation = useNavigation();

    useLayoutEffect(() => {
        navigation.setOptions({
            headerShown: false,
        });
    }, []);

    return (
        <SafeAreaView>
            {/* HEADER */}
            <View className='flex-row pb-3 items-center mx-4 space-x-2'>
                <Image source={{
                    uri: 'https://links.papareact.com/wru'
                }}
                    className='h-7 w-7 bg-gray-300 p-4 rounded-full'
                />
                <View>
                    <Text>Deliver Now!</Text>
                    <Text>Current Location</Text>
                </View>
            </View>
        </SafeAreaView>
    )
}