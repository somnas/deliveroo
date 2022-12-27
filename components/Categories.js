import { ScrollView } from 'react-native';
import React from 'react';
import CategoryCard from './CategoryCard';

export default function Categories() {
    return (
        <ScrollView
            contentContainerStyle={{
                paddingHorizontal: 15,
                paddingTop: 10
            }}
            horizontal
            showsHorizontalScrollIndicator={false}
        >
            <CategoryCard imgUrl='https://links.papareact.com/wru' title='testing1' />
            <CategoryCard imgUrl='https://links.papareact.com/wru' title='testing2' />
            <CategoryCard imgUrl='https://links.papareact.com/wru' title='testing3' />
        </ScrollView>
    )
}