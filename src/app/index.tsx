import { Header } from "@/components/header";
import { View, ScrollView } from "react-native";
import Constants from "expo-constants";
import { Banner } from "@/components/banner";
import { Search } from "@/components/search";
import { Section } from "@/components/section";
import { TrendingFoods } from "@/components/trending-foods";
import { Restaurants } from "@/components/restaurants";
import { VerticalList } from "@/components/vertical-list";

const statusBarHeight = Constants.statusBarHeight;

export default function Index() {
    return (
        <ScrollView
            style={{ flex: 1 }}
            className="bg-slate-200"
            showsVerticalScrollIndicator={false}
        >
            <View className="w-full px-4" style={{ marginTop: statusBarHeight + 8 }}>
                <Header />
                <Banner />
                <Search />
                <Section
                    title="Comidas em alta"
                    size="text-2xl"
                    label="Veja mais"
                    action={() => console.log("Clicou comidas em alta")}
                />
                <TrendingFoods />
                <Section
                    title="Famosos no DevFood"
                    size="text-xl"
                    label="Veja todos"
                    action={() => console.log("Clicou em famosos no DevFood")}
                />
                <Restaurants />
                <Section
                    title="Restaurantes"
                    size="text-xl"
                    label="Veja todos"
                    action={() => console.log("Clicou em Restaurantes")}
                />
                <VerticalList />
            </View>
        </ScrollView>
    );
}