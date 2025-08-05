import React, {useEffect, useRef, useState} from "react";
import {Animated, Keyboard, SafeAreaView, StyleSheet, Text, TextInput, TouchableOpacity, View,} from "react-native";
import {Feather} from "@expo/vector-icons"; // You need `expo install @expo/vector-icons`

export default function LoginPage() {
    const [showPassword, setShowPassword] = useState(false);
    const offset = useRef(new Animated.Value(0)).current;

    useEffect(() => {
        const keyboardDidShow = () => {
            Animated.timing(offset, {
                toValue: -60, // move up
                duration: 300,
                useNativeDriver: true,
            }).start();
        };

        const keyboardDidHide = () => {
            Animated.timing(offset, {
                toValue: 0, // move back down
                duration: 300,
                delay: 100, // optional delay for smoother return
                useNativeDriver: true,
            }).start();
        };

        const showSub = Keyboard.addListener("keyboardDidShow", keyboardDidShow);
        const hideSub = Keyboard.addListener("keyboardDidHide", keyboardDidHide);

        return () => {
            showSub.remove();
            hideSub.remove();
        };
    }, []);

    return (
        <SafeAreaView style={styles.safeArea}>
            <View style={styles.fullScreenBg}>
                <Animated.View style={[styles.outerContainer, {transform: [{translateY: offset}]}]}>
                    <Text style={styles.title}>Tizimga kirish</Text>
                    <View style={styles.innerContainer}>
                        <TextInput
                            placeholder="E-mail manzil"
                            style={styles.input}
                            placeholderTextColor="#aaa"
                            keyboardType="email-address"
                            autoCapitalize="none"
                            autoCorrect={false}
                        />
                        <View style={styles.passwordContainer}>
                            <TextInput
                                placeholder="Parol"
                                secureTextEntry={!showPassword}
                                style={[styles.input, {flex: 1, marginBottom: 0}]}
                                placeholderTextColor="#aaa"
                            />
                            <TouchableOpacity onPress={() => setShowPassword(!showPassword)} style={styles.eyeIcon}>
                                <Feather name={showPassword ? "eye-off" : "eye"} size={20} color="#ccc"/>
                            </TouchableOpacity>
                        </View>
                        <TouchableOpacity style={styles.button}>
                            <Text style={styles.buttonText}>Kirish</Text>
                        </TouchableOpacity>
                    </View>
                </Animated.View>
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    safeArea: {
        flex: 1,
        backgroundColor: "#1e2939",
    },
    fullScreenBg: {
        flex: 1,
        backgroundColor: "#1e2939",
    },
    outerContainer: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        padding: 16,
    },
    innerContainer: {
        width: "100%",
        maxWidth: 400,
        padding: 20,
    },
    title: {
        fontSize: 24,
        fontWeight: "900",
        marginBottom: 24,
        textAlign: "center",
        color: "#fff",
    },
    input: {
        backgroundColor: "#2e3b4e",
        padding: 12,
        borderRadius: 8,
        borderWidth: 1,
        borderColor: "#444",
        color: "#fff",
        marginBottom: 12,
    },
    passwordContainer: {
        flexDirection: "row",
        alignItems: "center",
        backgroundColor: "#2e3b4e",
        borderRadius: 8,
        borderWidth: 1,
        borderColor: "#444",
        marginBottom: 12,
        paddingRight: 12,
    },
    eyeIcon: {
        paddingHorizontal: 8,
    },
    button: {
        backgroundColor: "#3b82f6",
        padding: 12,
        borderRadius: 8,
        alignItems: "center",
    },
    buttonText: {
        color: "#fff",
        fontWeight: "900",
    },
});
