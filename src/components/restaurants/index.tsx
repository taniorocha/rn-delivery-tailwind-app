import { useState, useEffect } from "react";
import { FlatList } from "react-native";
import { CardHorizontalRestaurant } from "../card-horizontal-restaurant";

export interface RestaurantProps {
    id: string;
    name: string;
    image: string;
    rating: number;
}

export function Restaurants() {
    const [restaurants, setRestaurants] = useState<RestaurantProps[]>([]);

    useEffect(() => {
        getRestaurants();
    }, []);

    async function getRestaurants() {
        const response = await fetch("http://192.168.50.120:3000/restaurants")
            .then(x => x.status === 200 ? x.json() : null);

        if (response)
            setRestaurants(response);
    }

    return (
        <FlatList
            data={restaurants}
            renderItem={({ item }) => <CardHorizontalRestaurant restaurant={item} />}
            horizontal={true}
            contentContainerStyle={{ gap: 14 }}
            showsHorizontalScrollIndicator={false}
        >
        </FlatList>
    );
}