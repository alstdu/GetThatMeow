import React from 'react';
import { useForm, Controller } from 'react-hook-form';
import { View, Text, ImageBackground, StyleSheet, TextInput, TouchableOpacity, Image } from 'react-native';

const image = require('../assets/loginBackground.png');

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
    });
    const onLogin = data => navigation.navigate("MatchScreen");

    return (
        <View style={styles.container}>
            <ImageBackground source={image} resizeMode="stretch" style={styles.image}>
                <View style={styles.innerContainer}>
                    <Text style={styles.title}>Login Account</Text>
                    <Text style={styles.subtitle}>Welcome back to GetThatMeow</Text>
                    <Controller
                        control={control}
                        rules={{ required: true }}
                        render={({ field: { onChange, onBlur, value } }) => (
                            <TextInput
                                placeholder="Enter your email"
                                onBlur={onBlur}
                                onChangeText={onChange}
                                value={value}
                                style={styles.input}
                            />
                        )}
                        name="emailInput"
                    />
                    {errors.emailInput && <Text style={styles.errorText}>Email is required.</Text>}

                    <Controller
                        control={control}
                        rules={{ required: true, maxLength: 50 }}
                        render={({ field: { onChange, onBlur, value } }) => (
                            <TextInput
                                placeholder="Enter password"
                                onBlur={onBlur}
                                onChangeText={onChange}
                                value={value}
                                style={styles.input}
                                secureTextEntry
                            />
                        )}
                        name="passwordInput"
                    />
                    {errors.passwordInput && <Text style={styles.errorText}>Password is required.</Text>}
                    <TouchableOpacity style={styles.forgotPassword}>
                        <Text style={styles.forgotPasswordText}>Forget Password?</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.loginButton} onPress={handleSubmit(onLogin)}>
                        <Text style={styles.loginButtonText}>Login</Text>
                    </TouchableOpacity>
                    <Text style={styles.orText}>Or sign in with</Text>
                    <View style={styles.socialButtonsContainer}>
                        <TouchableOpacity style={styles.socialButton}>
                            <Image source={require('../assets/icons8-google-48.png')} style={styles.socialIcon} />
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.socialButton}>
                            <Image source={require('../assets/icons8-facebook-48.png')} style={styles.socialIcon} />
                        </TouchableOpacity>
                    </View>
                    <View style={styles.createAccountSection}>
                        <Text style={styles.createAccountText}>Not registered yet?</Text>
                        <TouchableOpacity onPress={() => navigation.navigate("CreateAccount")}>
                            <Text style={styles.createLink}> Create Account</Text>
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={styles.footer}>
                    <Text style={styles.footerText} onPress={() => Linking.openURL('https://icons8.com')}>
                        Icons by Icons8
                    </Text>
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
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
    },
    image: {
        flex: 1,
        justifyContent: 'center',
        width: '100%',
        height: '100%',
    },
    title: {
        fontWeight: 'bold',
        fontSize: 24,
        marginBottom: 10,
    },
    subtitle: {
        fontSize: 16,
        marginBottom: 20,
        color: '#666',
    },
    input: {
        borderColor: '#E66264',
        borderWidth: 1,
        borderRadius: 10,
        height: 50,
        marginBottom: 15,
        paddingHorizontal: 10,
        width: '100%',
    },
    errorText: {
        color: 'red',
        marginBottom: 10,
    },
    forgotPassword: {
        alignSelf: 'flex-end',
        marginBottom: 20,
    },
    forgotPasswordText: {
        color: '#E66264',
    },
    loginButton: {
        backgroundColor: '#E66264',
        borderRadius: 10,
        paddingVertical: 10,
        width: '100%',
        alignItems: 'center',
        marginBottom: 20,
    },
    loginButtonText: {
        color: 'white',
        fontSize: 16,
    },
    orText: {
        marginBottom: 10,
        color: '#666',
    },
    socialButtonsContainer: {
        flexDirection: 'row',
        marginBottom: 20,
    },
    socialButton: {
        backgroundColor: '#EFEFEF',
        borderRadius: 5,
        padding: 10,
        marginHorizontal: 10,
        alignItems: 'center',
    },
    socialIcon: {
        width: 30,
        height: 30,
    },
    createAccountSection: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    createAccountText: {
        color: '#666',
    },
    createLink: {
        fontWeight: 'bold',
        color: '#E66264',
    },
    footer: {
        alignItems: 'center',
        padding: 10,
    },
    footerText: {
        color: '#939393',
        textDecorationLine: 'underline',
    },
});
