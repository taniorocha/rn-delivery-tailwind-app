import { useState, useEffect } from "react";
import { FlatList } from "react-native";
import { CardHorizontalFood } from "../card-horizontal-food";

export interface FoodProps {
    id: string;
    name: string;
    price: number;
    time: string;
    delivery: number;
    rating: number;
    image: string;
    restaurantId: string;
}

export function TrendingFoods() {
    const [foods, setFoods] = useState<FoodProps[]>([]);

    useEffect(() => {
        getFoods();
    }, []);

    async function getFoods() {
        const response = await fetch("http://192.168.50.120:3000/foods")
            .then(x => x.status === 200 ? x.json() : null);

        if (response)
            setFoods(response);
    }

    return (
        <FlatList
            data={foods}
            renderItem={({ item }) => <CardHorizontalFood food={item} />}
            horizontal={true}
            contentContainerStyle={{ gap: 14}}
            showsHorizontalScrollIndicator={false}
        >
        </FlatList>
    );
}