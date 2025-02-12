import { Pressable, Text, Image, View } from "react-native";
import { RestaurantProps } from "../restaurants";
import { Ionicons } from "@expo/vector-icons";

export function CardVerticalRestaurant({ restaurant }: { restaurant: RestaurantProps }) {
    return (
        <Pressable 
            className="flex flex-row items-center justify-start gap-2"
            onPress={() => console.log(`Clicou no restaurante ${restaurant.name}`)}
        >
            <Image
                source={{ uri: restaurant.image }}
                className="w-20 h-20 rounded-full"
            />
            <View className="flex gap-2">      
                <Text 
                    className="text-base text-black leading-4 font-bold"
                    numberOfLines={2}
                >
                    {restaurant.name}</Text> 
                <View className="flex-row items-center gap-1">
                    <Ionicons name="star" size={14} color="#ca8a04"></Ionicons>
                    <Text className="text-sm">{restaurant.rating}</Text>
                </View>
            </View>
        </Pressable>
    );
}