import React from 'react';
import { View, Text, Image, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'; // Use any icon library you prefer

const CharacterScreen = () => {
  return (
    <LinearGradient
      colors={['#3C4D57', '#82A7BD']}
      style={styles.linearGradient}
    >
      <ScrollView contentContainerStyle={styles.container}>
        <LinearGradient
          colors={['#17435D', '#16191B']}
          style={styles.trendingSection}
        >
          <Text style={styles.trendingTitle}>Trending</Text>
          <Text style={styles.trendingSubtitle}>Trending characters</Text>
          <View style={styles.characterGrid}>
            <Image source={require('./assets/characters/hit-man.png')} style={styles.characterImage} />
            <Image source={require('./assets/characters/golden_skull.png')} style={styles.characterImage} />
            <Image source={require('./assets/characters/girl_math.png')} style={styles.characterImage} />
            <Image source={require('./assets/characters/kuwait_arab.png')} style={styles.characterImage} />
          </View>
        </LinearGradient>

        <View style={styles.characterList}>
          <View style={styles.characterItem}>
            <View style={{ paddingLeft: 20 }}>
              <Text style={styles.characterName}>Gym Trainer</Text>
              <Text style={styles.characterDescription}>Your gym trainer</Text>
            </View>
            <Image source={require('./assets/img1.png')} style={styles.characterIcon} />
          </View>
          <View style={styles.characterItem}>
            <View style={{ paddingLeft: 20 }}>
              <Text style={styles.characterName}>Xen Lee</Text>
              <Text style={styles.characterDescription}>Chinese Mafia Leader</Text>
            </View>
            <Image source={require('./assets/img1.png')} style={styles.characterIcon} />
          </View>
          <View style={styles.characterItem}>
            <View style={{ paddingLeft: 20 }}>
              <Text style={styles.characterName}>Zhang Liu</Text>
              <Text style={styles.characterDescription}>Chinese Emperor</Text>
            </View>
            <Image source={require('./assets/img1.png')} style={styles.characterIcon} />
          </View>
        </View>
      </ScrollView>

      {/* Bottom Tab Bar */}
      <LinearGradient
        colors={['#323142', '#82A7BD']}
        style={styles.tabBar}
        start={{ x: 0, y: 0 }} // Adjust gradient angle (210 degrees)
        end={{ x: 0, y: 1 }}
      >
        <TouchableOpacity style={styles.tabItem}>
          <Icon name="home" size={30} color="#fff" />
          <Text style={styles.tabLabel}>Home</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.tabItem}>
          <Icon name="compass" size={30} color="#fff" />
          <Text style={styles.tabLabel}>Explore</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.tabItem}>
          <Icon name="chat" size={30} color="#fff" />
          <Text style={styles.tabLabel}>Chat History</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.tabItem}>
          <Icon name="account" size={30} color="#fff" />
          <Text style={styles.tabLabel}>Profile</Text>
        </TouchableOpacity>
      </LinearGradient>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    paddingBottom: 20,
  },
  linearGradient: {
    flex: 1,
  },
  trendingSection: {
    padding: 20,
    marginHorizontal: 30,
    marginTop: 70,
    borderRadius: 12,
    height: 367,
    elevation: 10,
    shadowColor: '#092332',
    shadowOpacity: 0.3,
    shadowRadius: 5,
    shadowOffset: { width: 0, height: 3 },
  },
  trendingTitle: {
    fontSize: 24,
    color: '#fff',
    fontWeight: 'bold',
  },
  trendingSubtitle: {
    fontSize: 16,
    color: 'white',
    marginBottom: 10,
    fontWeight: '300',
  },
  characterGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  characterImage: {
    width: '50%',
    height: 130,
    marginBottom: 10,
    borderRadius: 10,
    resizeMode: 'contain',
  },
  characterList: {
    padding: 20,
  },
  characterItem: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 20,
    backgroundColor: '#FFFFFF',
    borderRadius: 12,
    elevation: 5,
    shadowColor: '#000000',
    shadowOpacity: 0.2,
    shadowRadius: 5,
    shadowOffset: { width: 0, height: 3 },
  },
  characterIcon: {
    width: 100,
    height: 81,
    borderTopRightRadius: 10,
    borderBottomRightRadius: 10,
  },
  characterName: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'black',
  },
  characterDescription: {
    fontSize: 14,
    color: '#888',
  },
  tabBar: {
    height: 70,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  tabItem: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  tabLabel: {
    fontSize: 12,
    color: '#fff',
    marginTop: 5,
  },
});

export default CharacterScreen;