import React from "react";
import {Stack} from "expo-router";

export default function ExamLayout() {
    return (
        <Stack>
            <Stack.Screen name="login" options={{headerShown: false}} />
            <Stack.Screen
                name="signUp"
                options={{
                    headerShown: false,
                    // headerBackTitle: "Login",
                    // headerTitle: "Create an Account",
                    // headerBackTitleVisible: true,
                }}
            />
            <Stack.Screen
                name="signUpForm"
                options={{
                    headerShown: true,
                    headerBackTitle: "Login",
                    headerTitle: "Create an Account",
                    // headerBackTitleVisible: true,
                    // headerStyle: {
                    //     backgroundColor: orangeColor,
                    // },
                }}
            />
        </Stack>
    );
}
