import { View, Text, Pressable } from "react-native";

type Props = {
    title: string;
    size: "text-lg" | "text-xl" | "text-2xl";
    label: string;
    action: () => void;
}

export function Section({ title, size, label, action }: Props) {
    return (
        <View className="w-full flex flex-row items-center justify-between">
            <Text className={`${size} font-semibold my-4 self-start`}>{title}</Text>
            <Pressable onPress={action}>
                <Text>{label}</Text>
            </Pressable>
        </View>
    );
}