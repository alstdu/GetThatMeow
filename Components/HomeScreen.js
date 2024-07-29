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
                <Text>Login to Your Account</Text>
                <Text>Welcome back to Get That Meow</Text>
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
                        />
                    )}
                    name="passwordInput"
                />
                {errors.passwordInput && <Text>Password is required.</Text>}

                <Button title="Log In" onPress={handleSubmit(onLogin)} />
                <View>
                    <Text>New here?</Text>
                    <TouchableOpacity onPress={() =>
        navigation.navigate("CreateAccount")} ><Text>Create an Account</Text></TouchableOpacity>
                </View>
            </ImageBackground>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    image: {
        flex: 1,
        justifyContent: 'center',
    },
});
