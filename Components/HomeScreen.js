import React, { useState } from 'react';
import { useForm, Controller } from 'react-hook-form';
import { View, Text, ImageBackground, StyleSheet, Button, TextInput, TouchableOpacity } from 'react-native';

const image = '../assets/loginBackground.png';

export default function HomeScreen() {
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
    const onSubmit = (data) => console.log(data)
    return (
        <View style={styles.container}>
            <ImageBackground source={require(image)} resizeMode="stretch" style={styles.image}>
                <Text>Login Account</Text>
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
                {errors.emailInput && <Text>This is required.</Text>}

                <Controller
                    control={control}
                    rules={{
                        maxLength: 100,
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

                <Button title="Submit" onPress={handleSubmit(onSubmit)} />
                <View>
                    <Text>New here?</Text>
                    <TouchableOpacity><Text>Create an Account</Text></TouchableOpacity>
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
