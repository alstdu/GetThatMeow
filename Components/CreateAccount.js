import React from 'react';
import { useForm, Controller } from 'react-hook-form';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, Image } from 'react-native';

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
    });
    const onCreate = data => navigation.navigate("CreateProfile");

    return (
        <View style={styles.container}>
            <View style={styles.formContainer}>
                <View style={styles.circle}>
                    <Image source={{ uri: 'https://example.com/logo.png' }} style={styles.logo} />
                </View>
                <Text style={styles.title}>Create account</Text>
                <Text style={styles.subtitle}>Get started on your pet's love life</Text>
                <TouchableOpacity style={styles.socialButton}>
                    <Text style={styles.socialButtonText}>Sign up with Google</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.socialButton}>
                    <Text style={styles.socialButtonText}>Sign up with Facebook</Text>
                </TouchableOpacity>
                <Text style={styles.orText}>OR</Text>
                <Controller
                    control={control}
                    rules={{ required: true }}
                    render={({ field: { onChange, onBlur, value } }) => (
                        <TextInput
                            style={styles.input}
                            placeholder="Email"
                            onBlur={onBlur}
                            onChangeText={onChange}
                            value={value}
                        />
                    )}
                    name="emailInput"
                />
                {errors.emailInput && <Text style={styles.errorText}>Email is required.</Text>}
                <Controller
                    control={control}
                    rules={{ maxLength: 100, required: true }}
                    render={({ field: { onChange, onBlur, value } }) => (
                        <TextInput
                            style={styles.input}
                            placeholder="Password"
                            onBlur={onBlur}
                            onChangeText={onChange}
                            value={value}
                            secureTextEntry
                        />
                    )}
                    name="passwordInput"
                />
                {errors.passwordInput && <Text style={styles.errorText}>Password is required.</Text>}
                <TouchableOpacity style={styles.createButton} onPress={handleSubmit(onCreate)}>
                    <Text style={styles.createButtonText}>Create Account</Text>
                </TouchableOpacity>
                <Text style={styles.loginText}>Already have an account? <Text style={styles.loginLink} onPress={() => navigation.navigate("Home")}>Log in</Text></Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F3DAE2',
        justifyContent: 'center',
        alignItems: 'center',
    },
    formContainer: {
        backgroundColor: 'white',
        borderRadius: 30,
        padding: 25,
        width: '80%',
        alignItems: 'center',
    },
    circle: {
        width: 60,
        height: 60,
        borderRadius: 30,
        backgroundColor: '#D05F86',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 20,
    },
    logo: {
        width: 40,
        height: 40,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 10,
    },
    subtitle: {
        fontSize: 16,
        color: '#666',
        marginBottom: 20,
    },
    socialButton: {
        backgroundColor: '#EFEFEF',
        padding: 10,
        borderRadius: 5,
        marginBottom: 10,
        width: '100%',
        alignItems: 'center',
    },
    socialButtonText: {
        color: '#000',
    },
    orText: {
        marginVertical: 10,
        color: '#666',
    },
    input: {
        borderWidth: 1,
        borderColor: '#DDD',
        borderRadius: 5,
        padding: 10,
        width: '100%',
        marginBottom: 10,
    },
    errorText: {
        color: 'red',
        marginBottom: 10,
    },
    createButton: {
        backgroundColor: '#D05F86',
        padding: 10,
        borderRadius: 5,
        width: '100%',
        alignItems: 'center',
        marginBottom: 20,
    },
    createButtonText: {
        color: 'white',
    },
    loginText: {
        color: '#666',
    },
    loginLink: {
        color: '#D05F86',
        fontWeight: 'bold',
    },
});
