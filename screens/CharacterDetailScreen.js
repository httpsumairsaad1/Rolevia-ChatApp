import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ImageBackground,
  Image,
} from "react-native";

const CharacterDetailScreen = () => {
  return (
    <ImageBackground
      blurRadius={0.9}
      source={require("./assets/characters/kuwait_arab.png")}
      style={styles.backgroundImage}
    >
      <View style={styles.container}>
        {/* Character Image */}
        <Image
          source={require("./assets/characters/kuwait_arab.png")}
          style={styles.characterImage}
        />
        {/* Glassmorphism Details */}
        <View style={styles.detailsContainer}>
          {/* Square: Character Name */}
          <View style={[styles.glassSquare, styles.glassBox]}>
            <Text style={styles.characterName}>Character Name:</Text>
            <Text style={styles.glassText}>Kuwait Arab.</Text>
          </View>

          {/* Square: Tone */}
          <View style={[styles.glassSquare, styles.glassBox]}>
            <Text style={styles.characterTone}>Tone:</Text>
            <Text style={styles.glassText}>Friendly</Text>
          </View>

          {/* Rectangle: Number of Users */}
          <View style={[styles.glassRectangle, styles.glassBox]}>
            <Text style={styles.characterUsers}>Number of Users:</Text>
            <Text style={styles.glassText}>1024</Text>
          </View>
        </View>

        {/* Chat Button */}
        <TouchableOpacity style={styles.chatButton}>
          <Text style={styles.chatButtonText} allowFontScaling={false}>Chat Now!!!</Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },
  backgroundImage: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center",
  },
  characterImage: {
    width: 150,
    height: 150,
    borderRadius: 75,
    marginBottom: 30,
  },
  detailsContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
    marginBottom: 30,
  },
  glassBox: {
    backgroundColor: "rgba(130, 167, 189, 0.8)",
    borderRadius: 20,
    padding: 20,
    margin: 10,
    shadowColor: "#82A7BD",
    shadowOffset: { width: 1, height: 10 },
    shadowOpacity: 0.9,
    shadowRadius: 1,
    elevation: 1,
    borderWidth: 1,
    borderColor: "rgba(130, 167, 189, 0.9)",
    alignItems: "center",
  },
  glassSquare: {
    width: 140,
    height: 140,
  },
  glassRectangle: {
    width: 300,
    height: 80,
  },
  characterName: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#fff",
    textAlign: "center",
    marginBottom: 5,
  },
  characterTone: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#fff",
    textAlign: "center",
    marginBottom: 5,
  },
  characterUsers: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#fff",
    textAlign: "center",
    marginBottom: 5,
  },
  glassText: {
    fontSize: 18,
    fontWeight: "600",
    color: "#fff",
    textAlign: "center",
  },
  chatButton: {
    backgroundColor: "rgba(130, 167, 189, 0.8)",
    paddingVertical: 15,
    paddingHorizontal: 40,
    borderRadius: 30,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 5 },
    shadowOpacity: 0.3,
    shadowRadius: 10,
  },
  chatButtonText: {
    fontSize: 18,
    color: "#fff",
    fontWeight: "bold",
  },
});

export default CharacterDetailScreen;
