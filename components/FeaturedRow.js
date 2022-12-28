import { View, Text, ScrollView } from 'react-native';
import React from 'react';
import { ArrowRightIcon } from 'react-native-heroicons/outline';
import RestaurantCard from './RestaurantCard';

export default function FeaturedRow({ id, title, description }) {
    return (
        <View>
            <View className='mt-4 flex-row items-center justify-between px-4'>
                <Text className='font-bold text-lg'>{title}</Text>
                <ArrowRightIcon color='#00CCBB' />
            </View>
            <Text className='text-xs text-gray-500 px-4'>{description}</Text>
            <ScrollView
                horizontal
                showsHorizontalScrollIndicator={false}
                contentContainerStyle={{
                    paddingHorizontal: 15
                }}
                className='pt-4'
            >
                <RestaurantCard
                    id={1}
                    imgUrl='https://links.papareact.com/gn7'
                    title='Sushi'
                    rating={4.5}
                    genre='Japanese'
                    address='123 Main St'
                    short_description='This is a short test description'
                    dishes={[]}
                    long={12315}
                    lat={231452}
                />
                <RestaurantCard
                    id={2}
                    imgUrl='https://links.papareact.com/gn7'
                    title='Sushi'
                    rating={4.5}
                    genre='Japanese'
                    address='123 Main St'
                    short_description='This is a short test description'
                    dishes={[]}
                    long={12315}
                    lat={231452}
                />
            </ScrollView>
        </View>
    );
}