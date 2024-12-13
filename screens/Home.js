import React from 'react';
import { View, Text, Image, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { useNavigation } from '@react-navigation/native';

const Home = () => {
  const navigation = useNavigation(); // Access navigation

  const trendingCharacters = [
  { 
    id: 1, 
    name: 'Hitman', 
    image: require('../assets/characters/hit-man.png'), 
    description: 'A skilled assassin known for his stealth and precision.' 
  },
  { 
    id: 2, 
    name: 'Golden Skull', 
    image: require('../assets/characters/golden_skull.png'), 
    description: 'A mysterious figure with a golden skull mask, symbolizing power and enigma.' 
  },
  { 
    id: 3, 
    name: 'Girl Math', 
    image: require('../assets/characters/girl_math.png'), 
    description: 'An intellectual personality specializing in problem-solving and strategies.' 
  },
  { 
    id: 4, 
    name: 'Kuwait Arab', 
    image: require('../assets/characters/kuwait_arab.png'), 
    description: 'A charismatic leader representing Kuwaiti culture and values.' 
  },
];

  const characterList = [
    { id: 1, name: 'Gym Trainer', description: 'Your gym trainer', image: require('../assets/img1.png') },
    { id: 2, name: 'Xen Lee', description: 'Chinese Mafia Leader', image: require('../assets/img1.png') },
    { id: 3, name: 'Zhang Liu', description: 'Chinese Emperor', image: require('../assets/img1.png') },
  ];

  const handleCharacterPress = (character) => {
    navigation.navigate('ChatScreen', {
      id: character.id,
      name: character.name,
      description: character.description,
      image: character.image,
    });
  };
  

  return (
    <LinearGradient colors={['#3C4D57', '#82A7BD']} style={styles.linearGradient}>
      <ScrollView contentContainerStyle={styles.container}>
        {/* Trending Section */}
        <LinearGradient colors={['#17435D', '#16191B']} style={styles.trendingSection}>
          <Text style={styles.trendingTitle}>Trending</Text>
          <Text style={styles.trendingSubtitle}>Trending characters</Text>
          <View style={styles.characterGrid}>
            {trendingCharacters.map((character) => (
              <TouchableOpacity
                key={character.id}
                onPress={() => handleCharacterPress(character)}
                style={styles.characterTouchable}
              >
                <Image
                  source={character.image}
                  style={styles.characterImage}
                  accessibilityLabel={`Trending character ${character.name}`}
                />
              </TouchableOpacity>
            ))}
          </View>
        </LinearGradient>

        {/* Character List Section */}
        <View style={styles.characterList}>
          {characterList.map((character) => (
            <TouchableOpacity
              key={character.id}
              onPress={() => handleCharacterPress(character)}
              style={styles.characterItem}
            >
              <View style={styles.characterTextContainer}>
                <Text style={styles.characterName}>{character.name}</Text>
                <Text style={styles.characterDescription}>{character.description}</Text>
              </View>
              <Image
                source={character.image}
                style={styles.characterIcon}
                accessibilityLabel={`Character ${character.name}`}
              />
            </TouchableOpacity>
          ))}
        </View>
      </ScrollView>

      {/* Bottom Tab Bar */}
      <LinearGradient
        colors={['#323142', '#82A7BD']}
        style={styles.tabBar}
        start={{ x: 0, y: 0 }}
        end={{ x: 0, y: 1 }}
      >
        {[{ icon: 'home', label: 'Home' }, { icon: 'compass', label: 'Explore' }, { icon: 'chat', label: 'Chat History' }, { icon: 'account', label: 'Profile' }].map((tab, index) => (
          <TouchableOpacity key={index} style={styles.tabItem} accessibilityLabel={`Tab: ${tab.label}`}>
            <Icon name={tab.icon} size={30} color="#fff" />
            <Text style={styles.tabLabel}>{tab.label}</Text>
          </TouchableOpacity>
        ))}
      </LinearGradient>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  container: { flexGrow: 1, paddingBottom: 20 },
  linearGradient: { flex: 1 },
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
  trendingTitle: { fontSize: 24, color: '#fff', fontWeight: 'bold' },
  trendingSubtitle: { fontSize: 16, color: 'white', marginBottom: 10, fontWeight: '300' },
  characterGrid: { flexDirection: 'row', flexWrap: 'wrap' },
  characterTouchable: { width: '50%', padding: 5 },
  characterImage: { width: '100%', height: 130, borderRadius: 10, resizeMode: 'contain' },
  characterList: { padding: 20 },
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
  characterTextContainer: { paddingLeft: 20 },
  characterIcon: { width: 100, height: 81, borderTopRightRadius: 10, borderBottomRightRadius: 10 },
  characterName: { fontSize: 18, fontWeight: 'bold', color: 'black' },
  characterDescription: { fontSize: 14, color: '#888' },
  tabBar: { height: 70, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-around' },
  tabItem: { alignItems: 'center', justifyContent: 'center' },
  tabLabel: { fontSize: 12, color: '#fff', marginTop: 5 },
});

export default Home;
