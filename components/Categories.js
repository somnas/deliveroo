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
            <CategoryCard imgUrl='https://links.papareact.com/gn7' title='testing1' />
            <CategoryCard imgUrl='https://links.papareact.com/gn7' title='testing2' />
            <CategoryCard imgUrl='https://links.papareact.com/gn7' title='testing3' />
            <CategoryCard imgUrl='https://links.papareact.com/gn7' title='testing4' />
            <CategoryCard imgUrl='https://links.papareact.com/gn7' title='testing5' />
        </ScrollView>
    )
}