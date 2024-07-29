import React from 'react';
import { SafeAreaView, View, Text, TextInput, Button, TouchableOpacity, ScrollView, StyleSheet } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import { LinearGradient } from 'expo-linear-gradient';

export default function CreateProfile({ navigation }) {
    const [selectedBreed, setSelectedBreed] = React.useState('');
    const [selectedGender, setSelectedGender] = React.useState('');
    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: '#fff' }}>
            <ScrollView>
                <Text style={styles.title}>Create Your Cat’s Profile</Text>

                <View style={[styles.section, styles.aboveGradient]}>
                    <TouchableOpacity style={styles.photoContainer}>
                        <Text style={styles.photoText}>Add Photo</Text>
                    </TouchableOpacity>
                    <View style={styles.aboveGradientInfo}>
                        <TextInput style={styles.input} placeholder="Name" />
                        <TextInput style={styles.input} placeholder="Age" />
                            <Picker
                                selectedValue={selectedBreed}
                                onValueChange={(itemValue, itemIndex) => setSelectedBreed(itemValue)}
                            >
                                <Picker.Item label="Breed" value="" />
                                <Picker.Item label="Russian Blue" value="breed1" />
                            </Picker>
                    </View>
                </View>
                <LinearGradient colors={['#E66264', '#BA5CA7']} style={styles.gradientSection}>
                    <View style={[styles.section, styles.cardBackground, styles.cardPositioning]}>
                        <Text style={styles.sectionTitle}>Physical Characteristics</Text>
                        <TextInput style={styles.input} placeholder="Color" />
                        <TextInput style={styles.input} placeholder="Weight" />
                        <Picker
                            selectedValue={selectedGender}
                            style={styles.input}
                            onValueChange={(itemValue, itemIndex) => setSelectedGender(itemValue)}
                        >
                            <Picker.Item label="Gender" value="" />
                            <Picker.Item label="Male" value="male" />
                            <Picker.Item label="Female" value="female" />
                        </Picker>
                    </View>

                    <View style={[styles.section, styles.cardBackground, styles.cardPositioning]}>
                        <Text style={styles.sectionTitle}>Personality Traits</Text>
                        <View style={styles.checkboxContainer}>
                            <TouchableOpacity style={styles.checkbox}><Text>Playful</Text></TouchableOpacity>
                            <TouchableOpacity style={styles.checkbox}><Text>Calm</Text></TouchableOpacity>
                            <TouchableOpacity style={styles.checkbox}><Text>Social</Text></TouchableOpacity>
                            <TouchableOpacity style={styles.checkbox}><Text>Independent</Text></TouchableOpacity>
                            <TouchableOpacity style={styles.checkbox}><Text>Curious</Text></TouchableOpacity>
                        </View>
                    </View>

                    <View style={[styles.section, styles.cardBackground, styles.cardPositioning]}>
                        <Text style={styles.sectionTitle}>Health Information</Text>
                        <TouchableOpacity style={styles.button}>
                            <Text style={styles.buttonText}>Vaccinations</Text>
                        </TouchableOpacity>
                        <TextInput style={styles.input} placeholder="Medical History" />
                    </View>

                    <View style={[styles.section, styles.cardBackground, styles.cardPositioning]}>
                        <Text style={styles.sectionTitle}>Owner’s Information</Text>
                        <TextInput style={styles.input} placeholder="Owner's Name" />
                        <TextInput style={styles.input} placeholder="Contact Info" />
                        <TextInput style={styles.input} placeholder="Location" />
                    </View>

                    <View style={[styles.section, styles.cardBackground, styles.cardPositioning]}>
                        <Text style={styles.sectionTitle}>Preferences</Text>
                        <TextInput style={styles.input} placeholder="Looking for" />
                        <Picker
                            selectedValue={selectedBreed}
                            style={styles.input}
                            onValueChange={(itemValue, itemIndex) => setSelectedBreed(itemValue)}
                        >
                            <Picker.Item label="Preferred Breeds" value="" />
                            <Picker.Item label="Breed 1" value="breed1" />
                            <Picker.Item label="Breed 2" value="breed2" />
                        </Picker>
                    </View>

                    <View style={styles.buttonContainer}>
                        <TouchableOpacity style={styles.saveButton}>
                            <Text style={styles.saveButtonText}>Save</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.cancelButton}>
                            <Text style={styles.cancelButtonText}>Cancel</Text>
                        </TouchableOpacity>
                    </View>
                </LinearGradient>
            </ScrollView>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        textAlign: 'center',
        marginVertical: 20,
        color: '#E66264',
    },
    section: {
        marginVertical: 10,
    },
    aboveGradient: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 20,
        gap: 10,
    },
    gradientSection: {
        padding: 10,
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap',
        gap: 10
    },
    cardPositioning: {
        flexBasis: '40%',
        width: '40%',
        flexGrow: 1,
        overflow: 'hidden',
    },
    aboveGradientInfo: {
        display: 'flex',
        flexDirection: 'column',
        flexGrow: 1,
    },
    cardBackground: {
        backgroundColor: 'white',
        padding: 20,
        borderRadius: 20,
    },
    sectionTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 10,
        color: '#E66264',
    },
    input: {
        borderWidth: 1,
        borderColor: '#E66264',
        borderRadius: 50,
        padding: 10,
        marginVertical: 5,
        width: '100%',
    },
    photoContainer: {
        width: 100,
        height: 100,
        borderRadius: 50,
        backgroundColor: '#ccc',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 20,
    },
    photoText: {
        color: '#fff',
    },
    checkboxContainer: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
    },
    checkbox: {
        borderWidth: 1,
        borderColor: '#E66264',
        borderRadius: 5,
        padding: 10,
        marginVertical: 5,
    },
    button: {
        backgroundColor: '#f8f8f8',
        padding: 10,
        borderRadius: 5,
        alignItems: 'center',
        marginVertical: 5,
    },
    buttonText: {
        color: '#000',
    },
    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginVertical: 20,
        flexBasis: '100%'
    },
    saveButton: {
        backgroundColor: '#E66264',
        padding: 20,
        borderRadius: 10,
        alignItems: 'center',
    },
    saveButtonText: {
        color: '#fff',
    },
    cancelButton: {
        backgroundColor: '#999999',
        padding: 20,
        borderRadius: 10,
        alignItems: 'center',
    },
    cancelButtonText: {
        color: '#fff',
    },
});
