import "expo-dev-client";
import React, { useEffect } from "react";
import { Provider } from "app/provider";
import { useFonts } from "expo-font";
import { SplashScreen, Stack } from "expo-router";

export default function App() {
	const [loaded] = useFonts({
		Inter: require("@tamagui/font-inter/otf/Inter-Medium.otf"),
		InterBold: require("@tamagui/font-inter/otf/Inter-Bold.otf"),
	});

	useEffect(() => {
		const hideSplash = async () => {
			await SplashScreen.preventAutoHideAsync();
			// You may add additional initialization logic here
			await SplashScreen.hideAsync();
		};

		if (loaded) {
			hideSplash();
		}
	}, [loaded]);

	if (!loaded) {
		return null; // Return null when fonts are not loaded to avoid rendering anything
	}

	return (
		<Provider>
			<Stack />
		</Provider>
	);
}
