import { router } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { Pressable, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function HomeScreen() {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#FAF8F8" }}>
      <StatusBar style="dark" />
      <View className="flex-1 items-center justify-center">
        <Text className="font-poppins-semibold text-[21px] leading-[30px] text-[#6B4FEF]">
          Lingua
        </Text>
        <Pressable
          accessibilityRole="link"
          className="min-h-[44px] items-center justify-center"
          onPress={() => router.push("/onboarding")}
        >
          <Text className="font-poppins text-[14px] leading-[22px] text-[#9674C9] underline">
            Open Onboarding
          </Text>
        </Pressable>
      </View>
    </SafeAreaView>
  );
}
