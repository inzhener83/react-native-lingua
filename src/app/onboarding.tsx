import { router } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { useSyncExternalStore } from "react";
import { Pressable, ScrollView, Text, useWindowDimensions, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { images } from "../../constants/images";
import { StyledImage } from "../components/styled-image";

const subscribeToNothing = () => () => {};
const getServerIllustrationSize = () => 430;

export default function OnboardingScreen() {
  const { width, height } = useWindowDimensions();
  const measuredSize = Math.min(width + 37, 430, Math.max(300, height - 520));
  // The server snapshot keeps web hydration stable; useWindowDimensions drives resizes.
  const illustrationSize = useSyncExternalStore(
    subscribeToNothing,
    () => measuredSize,
    getServerIllustrationSize
  );

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#FFFFFF" }}>
      <StatusBar style="dark" />
      <ScrollView
        className="flex-1"
        contentContainerStyle={{ flexGrow: 1 }}
        showsVerticalScrollIndicator={false}
      >
        <View className="flex-1 px-7 pb-[25px] pt-[18px]">
          <View className="h-[80px] flex-row items-center justify-center">
            <StyledImage
              source={images.mascotLogo}
              className="h-[83px] w-[83px]"
              contentFit="contain"
              accessibilityLabel="Lingua fox logo"
            />
            <Text className="-ml-[10px] pt-[3px] font-poppins-bold text-[30px] text-[#0D1328]">
              lingua
            </Text>
          </View>

          <View className="mt-[29px] px-[11px]">
            <Text className="font-poppins-semibold text-[34px] leading-[49px] tracking-[-0.8px] text-[#0D1328]">
              Your AI language
            </Text>
            <Text className="font-poppins-semibold text-[34px] leading-[49px] tracking-[-0.8px] text-[#0D1328]">
              <Text className="text-[#5B38F6]">teacher</Text>.
            </Text>
            <Text className="mt-[8px] font-poppins text-[17px] leading-[30px] tracking-[-0.8px] text-[#58647F]">
              Real conversations, personalized{"\n"}lessons, anytime, anywhere.
            </Text>
          </View>

          <View
            className="relative mt-[20px] self-center"
            style={{
              position: "relative",
              alignSelf: "center",
              marginTop: 20,
              width: illustrationSize,
              height: illustrationSize,
            }}
          >
            <View
              style={{
                position: "absolute",
                left: illustrationSize * 0.19,
                width: illustrationSize * 0.53,
                bottom: illustrationSize * 0.12,
                height: 8,
                borderRadius: 999,
                backgroundColor: "rgba(216, 216, 216, 0.15)",
                boxShadow: "0 0 14px rgba(0, 0, 0, 0.12)",
              }}
            />

            <View
              style={{
                position: "absolute",
                left: illustrationSize * 0.14,
                top: illustrationSize * 0.045,
                width: 101,
                height: 56,
                alignItems: "center",
                justifyContent: "center",
                borderRadius: 18,
                backgroundColor: "#EAF4FF",
                transform: [{ rotate: "-7deg" }],
              }}
            >
              <View
                style={{
                  position: "absolute",
                  bottom: -7,
                  right: 18,
                  width: 19,
                  height: 19,
                  backgroundColor: "#EAF4FF",
                  transform: [{ rotate: "45deg" }],
                }}
              />
              <Text style={{ fontFamily: "Poppins-Medium", fontSize: 20, color: "#0D1328" }}>
                Hello!
              </Text>
            </View>

            <View
              style={{
                position: "absolute",
                left: illustrationSize * 0.61,
                top: 0,
                width: 102,
                height: 61,
                alignItems: "center",
                justifyContent: "center",
                borderRadius: 18,
                backgroundColor: "#F5F4FF",
                transform: [{ rotate: "11deg" }],
              }}
            >
              <View
                style={{
                  position: "absolute",
                  bottom: -7,
                  left: 21,
                  width: 19,
                  height: 19,
                  backgroundColor: "#F5F4FF",
                  transform: [{ rotate: "45deg" }],
                }}
              />
              <Text style={{ fontFamily: "Poppins-Medium", fontSize: 20, color: "#3D2BDD" }}>
                ¡Hola!
              </Text>
            </View>

            <View
              style={{
                position: "absolute",
                left: illustrationSize * 0.69,
                top: illustrationSize * 0.22,
                width: 90,
                height: 61,
                alignItems: "center",
                justifyContent: "center",
                borderRadius: 18,
                backgroundColor: "#FFF3ED",
                transform: [{ rotate: "12deg" }],
              }}
            >
              <View
                style={{
                  position: "absolute",
                  bottom: -7,
                  left: 19,
                  width: 19,
                  height: 19,
                  backgroundColor: "#FFF3ED",
                  transform: [{ rotate: "45deg" }],
                }}
              />
              <Text style={{ fontSize: 20, color: "#FF443F" }}>你好!</Text>
            </View>

            <StyledImage
              source={images.mascotWelcome}
              className="absolute inset-0 h-full w-full"
              contentFit="contain"
              accessibilityLabel="Fox mascot waving with a purple backpack"
              style={{ transform: [{ translateX: -7 }, { scaleY: 0.96 }] }}
            />
          </View>

          <View
            style={{
              minHeight: 58,
              flex: 1,
              alignItems: "center",
              justifyContent: "flex-end",
              paddingBottom: 38,
            }}
          >
            <View
              accessible
              accessibilityLabel="Onboarding page 1 of 4"
              style={{ flexDirection: "row", alignItems: "center", gap: 14 }}
            >
              <View style={{ width: 10, height: 10, borderRadius: 5, backgroundColor: "#6040F8" }} />
              <View style={{ width: 10, height: 10, borderRadius: 5, backgroundColor: "#E3E3EC" }} />
              <View style={{ width: 10, height: 10, borderRadius: 5, backgroundColor: "#E3E3EC" }} />
              <View style={{ width: 10, height: 10, borderRadius: 5, backgroundColor: "#E3E3EC" }} />
            </View>
          </View>

          <Pressable
            accessibilityRole="button"
            className="relative h-[76px] w-[329px] max-w-full items-center justify-center rounded-[18px] border border-[#6B56F7] bg-[#5840EC] active:opacity-90"
            onPress={() => router.replace("/")}
          >
            <Text className="font-poppins-semibold text-[20px] text-white">
              Get Started
            </Text>
            <View className="absolute right-[35px] h-[15px] w-[15px] rotate-45 border-r-[2px] border-t-[2px] border-white" />
          </Pressable>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
