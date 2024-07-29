import React, { useState } from 'react';
import { useForm, Controller } from 'react-hook-form';
import { View, Text, ImageBackground, StyleSheet, Button, TextInput, TouchableOpacity } from 'react-native';

const image = '../assets/loginBackground.png';

export default function HomeScreen({ navigation }) {
    const {
        control,
        handleSubmit,
        formState: { errors },
    } = useForm({
        defaultValues: {
            emailInput: "",
            passwordInput: "",
        },
    })
    const onLogin = data => navigation.navigate("MatchScreen");
    return (
        <View style={styles.container}>
            <ImageBackground source={require(image)} resizeMode="stretch" style={styles.image}>
                <View style={styles.innerContainer}>
                    <Text style={styles.title}>Login Account</Text>
                    <Text style={styles.subtitle}>Welcome back to GetThatMeow</Text>
                    <Controller
                        control={control}
                        rules={{
                            required: true,
                        }}
                        render={({ field: { onChange, onBlur, value } }) => (
                            <TextInput
                                placeholder="Email"
                                onBlur={onBlur}
                                onChangeText={onChange}
                                value={value}
                                style={styles.input}
                            />
                        )}
                        name="emailInput"
                    />
                    {errors.emailInput && <Text>Email is required.</Text>}

                    <Controller
                        control={control}
                        rules={{
                            required: true,
                            maxLength: 50,
                        }}
                        render={({ field: { onChange, onBlur, value } }) => (
                            <TextInput
                                placeholder="Password"
                                onBlur={onBlur}
                                onChangeText={onChange}
                                value={value}
                                style={styles.input}
                            />
                        )}
                        name="passwordInput"
                    />
                    {errors.passwordInput && <Text>Password is required.</Text>}
                    <View style={styles.buttonContainer}>
                        <TouchableOpacity style={styles.login} onPress={handleSubmit(onLogin)}>
                            <Text style={styles.loginText}>Login</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.createAccountSection}>
                        <Text>New here?</Text>
                        <TouchableOpacity onPress={() =>
                            navigation.navigate("CreateAccount")} ><Text style={styles.createLink}> Create an Account</Text></TouchableOpacity>
                    </View>
                </View>
            </ImageBackground>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "white",
    },
    innerContainer: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        padding: 20,
        height: '100%'
    },
    image: {
        flex: 1,
        justifyContent: 'center',
    },
    title: {
        fontWeight: 'bold',
        fontSize: 32,
    },
    subtitle: {
        fontSize: 14,
        marginBottom: 36,
    },
    buttonContainer: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
    },
    login: {
        backgroundColor: '#E66264',
        width: '75%',
        padding: 10,
        borderRadius: 10,
    },
    loginText: {
        color: 'white',
        textAlign: 'center'
    },
    input: {
        borderColor: '#E66264',
        borderWidth: 1,
        height: 50,
        borderRadius: 15,
        marginVertical: 15,
        padding: 3,
    },
    createAccountSection: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
    },
    createLink: {
        fontWeight: 'bold'
    }
});
