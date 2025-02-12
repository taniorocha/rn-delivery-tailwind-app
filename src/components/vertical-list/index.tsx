import { useState, useEffect } from "react";
import { FlatList, View } from "react-native";
import { RestaurantProps } from "../restaurants";
import { CardVerticalRestaurant } from "../card-vertical-restaurant";

export function VerticalList() {
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
        <View className="flex-1 w-full h-full mb-11 gap-4">
            {restaurants.map(item => (
                <CardVerticalRestaurant key={item.id} restaurant={item} />
            ))}
        </View>
    );
}