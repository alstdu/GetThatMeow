import React from 'react';
import { StyleSheet, Text, View, Image, ScrollView } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';


export default function App() {
    return (
        <ScrollView style={styles.container}>
            <View style={styles.card}>
                <Image source={{ uri: 'https://s3-alpha-sig.figma.com/img/eac6/d492/ea063112a12f21e22f4c4cde5f5e7ecd?Expires=1723420800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=NakYBGWkb8j0yhZxnLnQPtvCSOHxIhTvKcfaQvaBPfrwXXN0D5pJd0myGCigc1CwoBe46Vrxa2Fn0uj~XIfbS2Z2~o3Yntw-3jNgJfTIsdBQ-nqmvaF83qJ3BDiYSZNdqSaFx~bxrrjJyKZS6vF0rzhdP53lq9UR4zxak5Hvi0zIbVkYCxFWiuPR-7FGCO1Js5NSdSTk8QP7nmT2krmcjyIBMyh-a3LSjLowQ5miQyKD5aC1KAhcLD4ix0snqIYM~ST~HHx~RHPOVySIL2YDN7aB0Y3MX46lmdSkbmEGOdx5apP3yIURc4JVAgBZrTqkd1h70hOx-SrbRwz6Q53vWQ__' }} style={styles.image} />
                <LinearGradient colors={['#E66264', '#BA5CA7']} style={styles.gradientSection}>
                    <View style={styles.textContainer}>
                        <Text style={styles.title}>Devana Wilkins, 3</Text>
                        <Text style={styles.subtitle}>she/her</Text>
                        <Text style={styles.subtitle}>Russian Blue</Text>
                    </View>
                    <View style={styles.infoContainer}>
                        <Text style={styles.sectionTitle}>Physical Characteristics</Text>
                        <View style={styles.tagContainer}>
                            <Text style={styles.tag}>Bluish Gray</Text>
                            <Text style={styles.tag}>10 lbs</Text>
                            <Text style={styles.tag}>Female</Text>
                        </View>
                        <Text style={styles.sectionTitle}>Personality Traits</Text>
                        <View style={styles.tagContainer}>
                            <Text style={styles.tag}>Playful</Text>
                            <Text style={styles.tag}>Calm</Text>
                            <Text style={styles.tag}>Social</Text>
                            <Text style={styles.tag}>Intelligent</Text>
                            <Text style={styles.tag}>Affectionate</Text>
                        </View>
                        <Text style={styles.sectionTitle}>Preferences</Text>
                        <View style={styles.tagContainer}>
                            <Text style={styles.tag}>Russian Blue</Text>
                            <Text style={styles.tag}>British Shorthair</Text>
                            <Text style={styles.tag}>Maine Coon</Text>
                        </View>
                        <Text style={styles.sectionTitle}>Owner's Information</Text>
                        <View style={styles.ownerInfo}>
                            <Text style={styles.tag}>Kreesha Benito</Text>
                            <Text style={styles.tag}>Langley, BC</Text>
                            <Text style={styles.tag}>(555) 555 - 5555</Text>
                        </View>
                    </View>
                </LinearGradient>
            </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    card: {
        borderRadius: 10,
        overflow: 'hidden',
        margin: 0,
        backgroundColor: '#fff',
        elevation: 2,
    },
    image: {
        width: '100%',
        height: 300,
    },
    title: {
        fontSize: 24,
        marginVertical: 10,
        color: 'white',
        fontWeight: 'bold',
    },
    subtitle: {
        fontSize: 18,
        color: 'white',
    },
    infoContainer: {
        padding: 15,
    },
    sectionTitle: {
        fontSize: 20,
        marginVertical: 5,
        color: 'white',
        fontWeight: 'bold',
    },
    tagContainer: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        elevation: 5,
    },
    tag: {
        backgroundColor: 'white',
        color: '#E66264',
        fontWeight: 'bold',
        padding: 10,
        borderRadius: 20,
        margin: 5,
    },
    ownerInfo: {
        alignItems: 'flex-start',
    },
    gradientSection: {
        padding: 10,
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap',
        gap: 10,
        flex: 1,
    },
    textContainer: {
        padding: 15,
    }
});
