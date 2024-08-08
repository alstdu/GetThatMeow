import React, { useState, useEffect } from 'react';
import { View, Text, Image, StyleSheet, TextInput, TouchableOpacity } from 'react-native';

const CatProfileScreen = () => {
  const [catImage, setCatImage] = useState(null);

  useEffect(() => {
    fetchCatImage();
  }, []);

  const fetchCatImage = async () => {
    try {
      const response = await fetch('https://api.thecatapi.com/v1/images/search');
      const data = await response.json();
      setCatImage(data[0].url);
    } catch (error) {
      console.error('Error fetching cat image:', error);
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image source={require('../assets/logoMain.png')} style={styles.logo} />
      </View>
      <Text style={styles.title}>What a Meow-atch!</Text>
      <View style={styles.imageContainer}>
        <Image
          source={{ uri: 'https://s3-alpha-sig.figma.com/img/eac6/d492/ea063112a12f21e22f4c4cde5f5e7ecd?Expires=1723420800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=NakYBGWkb8j0yhZxnLnQPtvCSOHxIhTvKcfaQvaBPfrwXXN0D5pJd0myGCigc1CwoBe46Vrxa2Fn0uj~XIfbS2Z2~o3Yntw-3jNgJfTIsdBQ-nqmvaF83qJ3BDiYSZNdqSaFx~bxrrjJyKZS6vF0rzhdP53lq9UR4zxak5Hvi0zIbVkYCxFWiuPR-7FGCO1Js5NSdSTk8QP7nmT2krmcjyIBMyh-a3LSjLowQ5miQyKD5aC1KAhcLD4ix0snqIYM~ST~HHx~RHPOVySIL2YDN7aB0Y3MX46lmdSkbmEGOdx5apP3yIURc4JVAgBZrTqkd1h70hOx-SrbRwz6Q53vWQ__' }}
          style={styles.catImageLeft}
        />
        {catImage && (
          <Image
            source={{ uri: catImage }}
            style={styles.catImageRight}
          />
        )}
      </View>
      <View style={styles.infoContainer}>
        <View style={styles.ownerInfoContainer}>
          <View style={styles.ownerDetails}>
            <Text style={styles.name}>Saffy Mcknuckles</Text>
            <Text style={styles.details}>12 years old</Text>
            <Text style={styles.details}>British Shorthair</Text>
          </View>
        </View>
        <Text style={styles.sectionTitle}>Description</Text>
        <Text style={styles.description}>Hi! I'm Saffy-licious</Text>
        <Text style={styles.sectionTitle}>Owner's Info</Text>
        <Text style={styles.ownerInfo}>Min Myat Thu</Text>
        <Text style={styles.ownerInfo}>(778) 123 - 4567</Text>
        <Text style={styles.ownerInfo}>Coquitlam, BC</Text>
      </View>
      <View style={styles.messageContainer}>
        <TextInput
          placeholder="Send a message..."
          style={styles.messageInput}
        />
        <TouchableOpacity style={styles.sendButton}>
          <Text style={styles.sendButtonText}>Send</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F8E2E7',
    alignItems: 'center',
    paddingTop: 20,
  },
  header: {
    width: '100%',
    alignItems: 'center',
    marginBottom: 20,
  },
  logo: {
    width: 100,
    height: 50,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#D9534F',
    marginVertical: 20,
  },
  imageContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: 20,
  },
  catImageLeft: {
    width: 150,
    height: 200,
    marginRight: 10,
    borderRadius: 10,
  },
  catImageRight: {
    width: 150,
    height: 200,
    marginLeft: 10,
    borderRadius: 10,
  },
  infoContainer: {
    backgroundColor: '#FFF',
    padding: 20,
    borderRadius: 10,
    width: '90%',
    marginBottom: 20,
  },
  ownerInfoContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  ownerDetails: {
    flex: 1,
  },
  name: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#D9534F',
  },
  details: {
    fontSize: 16,
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#D9534F',
    marginTop: 10,
  },
  description: {
    fontSize: 16,
    marginBottom: 10,
  },
  ownerInfo: {
    fontSize: 16,
    textAlign: 'left',
  },
  messageContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '90%',
    backgroundColor: '#FFF',
    borderRadius: 10,
    paddingHorizontal: 10,
    paddingVertical: 5,
    marginBottom: 20,
  },
  messageInput: {
    flex: 1,
    height: 40,
  },
  sendButton: {
    backgroundColor: '#D9534F',
    padding: 10,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  sendButtonText: {
    color: '#FFF',
    fontSize: 18,
  },
});

export default CatProfileScreen;
