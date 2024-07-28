import React, { useState } from 'react';
import { useForm, Controller } from 'react-hook-form';
import { View, Text, StyleSheet, Button, TextInput, TouchableOpacity } from 'react-native';

export default function CreateAccount({ navigation }) {
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
            <View style={styles.formContainer}>
                <View style={styles.circle}></View>
                <Text>Create Account</Text>
                <Text>Let's get started!</Text>
                <Text>OR</Text>
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
                        maxLength: 100,
                        required: true,
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

                <TouchableOpacity onPress={handleSubmit(onSubmit)}><Text>Create</Text></TouchableOpacity>
                <View>
                    <Text>Already Registered?</Text>
                    <TouchableOpacity onPress={() =>
                        navigation.navigate("Home")}><Text>Log-in</Text></TouchableOpacity>
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flex: 1,
        backgroundColor: '#F3DAE2',
    },
    formContainer: {
        backgroundColor: "white",
        height: "75%",
        width: "75%",
        padding: 25,
        borderRadius: 30,
    },
    image: {
        flex: 1,
        justifyContent: 'center',
    },
    circle: {
        width: 60,
        height: 60,
        borderRadius: 60 / 2,
        backgroundColor: "#D05F86",
        marginTop: -60, //I'm aware this is cursed but...
        marginLeft: 93,
    },
});
