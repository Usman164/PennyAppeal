import {
    createStackNavigator,
    TransitionPresets,
} from "@react-navigation/stack";
import {
    NavigationContainer,
    DefaultTheme,
    DarkTheme,
} from "@react-navigation/native";
import React from 'react';
import TabContainer from "./tabContainer";

export const RootNavigator = () => {
    const Stack = createStackNavigator();

    return (
        <Stack.Navigator
            initialRouteName="ShowTabs"
            screenOptions={{
                gestureEnabled: true,
                cardOverlayEnabled: true,
                ...TransitionPresets.SlideFromRightIOS,
            }}
        >
            <Stack.Screen name='ShowTabs' component={TabContainer} options={{ headerShown: false }} />
        </Stack.Navigator>
    );
};

const Navigation = ({ colorScheme }) => {
    return (
        <NavigationContainer
            theme={colorScheme === "dark" ? DarkTheme : DefaultTheme}
        >
            <RootNavigator />
        </NavigationContainer>
    );
};

export default Navigation;