import React, { useState } from 'react';
import { View, Text, ScrollView, StyleSheet, Image, TouchableOpacity, Switch } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';

const HomeScreen = ({ navigation }) => {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(previousState => !previousState);
  };

  return (
    <ScrollView style={[styles.container, darkMode && styles.darkContainer]}>
      <View style={styles.header}>
        <Text style={[styles.headerText, darkMode && styles.darkText]}>Welcome back,</Text>
        <Text style={[styles.headerTextBold, darkMode && styles.darkText]}>Eric Atsu</Text>
      </View>

      <View style={styles.card}>
        <Image source={require('./assets/Card.png')} style={styles.cardBackground} />
        <Text style={[styles.cardTitle, darkMode && styles.darkText]}>TopupReceiveSent Loan</Text>
        <View style={styles.transaction}>
          <Image source={require('./assets/moneyTransfer.png')} style={styles.transactionIcon} />
          <View>
            <Text style={[styles.transactionText, darkMode && styles.darkText]}>$300</Text>
            <Text style={[styles.transactionDescription, darkMode && styles.darkText]}>Money Transfer</Text>
          </View>
        </View>
        <View style={styles.transaction}>
          <Image source={require('./assets/grocery.png')} style={styles.transactionIcon} />
          <View>
            <Text style={[styles.transactionText, darkMode && styles.darkText]}>- $88</Text>
            <Text style={[styles.transactionDescription, darkMode && styles.darkText]}>Grocery Shopping</Text>
          </View>
        </View>
        <View style={styles.transaction}>
          <Image source={require('./assets/apple.png')} style={styles.transactionIcon} />
          <View>
            <Text style={[styles.transactionText, darkMode && styles.darkText]}>- $5.99</Text>
            <Text style={[styles.transactionDescription, darkMode && styles.darkText]}>Apple Store</Text>
          </View>
        </View>
        <View style={styles.transaction}>
          <Image source={require('./assets/spotify.png')} style={styles.transactionIcon} />
          <View>
            <Text style={[styles.transactionText, darkMode && styles.darkText]}>- $12.99</Text>
            <Text style={[styles.transactionDescription, darkMode && styles.darkText]}>Spotify Music</Text>
          </View>
        </View>
      </View>

      <View style={[styles.cardDetails, darkMode && styles.cardDetailsDark]}>
        <Image 
          source={darkMode ? require('./assets/Card.png') : require('./assets/Card.png')} 
          style={styles.cardBackground} 
        />
        <Text style={[styles.cardNumber, darkMode && styles.darkText]}>4562 1122 4595 7852</Text>
        <Text style={[styles.cardHolder, darkMode && styles.darkText]}>AR Jonson</Text>
        <View style={styles.cardInfo}>
          <Text style={[styles.cardInfoText, darkMode && styles.darkText]}>Expiry Date: 24/2000</Text>
          <Text style={[styles.cardInfoText, darkMode && styles.darkText]}>CVV: 6986</Text>
        </View>
      </View>

      <View style={styles.toggleContainer}>
        <Text style={[styles.toggleText, darkMode && styles.darkText]}>Dark Mode</Text>
        <Switch
          trackColor={{ false: "#767577", true: "#81b0ff" }}
          thumbColor={darkMode ? "#f5dd4b" : "#f4f3f4"}
          onValueChange={toggleDarkMode}
          value={darkMode}
        />
      </View>
    </ScrollView>
  );
};

const SettingsScreen = () => {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(previousState => !previousState);
  };

  return (
    <ScrollView style={[styles.container, darkMode && styles.darkContainer]}>
      <View style={[styles.settings, darkMode && styles.settingsDark]}>
        <Image 
          source={darkMode ? require('./assets/settings.png') : require('./assets/settings.png')} 
          style={styles.settingsBackground} 
        />
        <TouchableOpacity style={styles.settingItem}>
          <Text style={[styles.settingText, darkMode && styles.darkText]}>Change Password</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.settingItem}>
          <Text style={[styles.settingText, darkMode && styles.darkText]}>Privacy Policy</Text>
        </TouchableOpacity>
        <View style={styles.settingItem}>
          <Text style={[styles.settingText, darkMode && styles.darkText]}>Theme</Text>
          <Switch
            trackColor={{ false: "#767577", true: "#81b0ff" }}
            thumbColor={darkMode ? "#f5dd4b" : "#f4f3f4"}
            onValueChange={toggleDarkMode}
            value={darkMode}
          />
        </View>
        <TouchableOpacity style={styles.settingItem}>
          <Text style={[styles.settingText, darkMode && styles.darkText]}>Language</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.settingItem}>
          <Text style={[styles.settingText, darkMode && styles.darkText]}>Contact Us</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.settingItem}>
          <Text style={[styles.settingText, darkMode && styles.darkText]}>My Profile</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

const MyCardsScreen = () => (
  <View style={styles.screen}>
    <Text>My Cards Screen</Text>
  </View>
);

const StatisticsScreen = () => (
  <View style={styles.screen}>
    <Text>Statistics Screen</Text>
  </View>
);

const Tab = createBottomTabNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === 'Home') {
              iconName = focused ? require('./assets/home.png') : require('./assets/home.png');
            } else if (route.name === 'My Cards') {
              iconName = focused ? require('./assets/myCards.png') : require('./assets/myCards.png');
            } else if (route.name === 'Statistics') {
              iconName = focused ? require('./assets/statistics.png') : require('./assets/statistics.png');
            } else if (route.name === 'Settings') {
              iconName = focused ? require('./assets/settings.png') : require('./assets/settings.png');
            }

            // You can return any component that you like here!
            return <Image source={iconName} style={{ width: size, height: size }} />;
          },
        })}
        tabBarOptions={{
          activeTintColor: 'tomato',
          inactiveTintColor: 'gray',
        }}
      >
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="My Cards" component={MyCardsScreen} />
        <Tab.Screen name="Statistics" component={StatisticsScreen} />
        <Tab.Screen name="Settings" component={SettingsScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5',
    padding: 20,
  },
  darkContainer: {
    backgroundColor: '#333',
  },
  header: {
    marginBottom: 20,
    alignItems: 'center',},
  headerText: {
    fontSize: 20,
    color: '#333',
  },
  darkText: {
    color: '#FFF',
  },
  headerTextBold: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
  },
  card: {
    position: 'relative',
    borderRadius: 10,
    padding: 20,
    marginBottom: 20,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 8,
  },
  cardBackground: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    borderRadius: 10,
    zIndex: -1,
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#000',
  },
  transaction: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    marginBottom: 10,
  },
  transactionIcon: {
    width: 30,
    height: 30,
    marginRight: 10,
  },
  transactionText: {
    fontSize: 16,
    color: '#333',
  },
  transactionDescription: {
    fontSize: 14,
    color: '#666',
  },
  cardDetails: {
    position: 'relative',
    borderRadius: 10,
    padding: 20,
    marginBottom: 20,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 8,
    alignItems: 'center',
  },
  cardDetailsDark: {
    backgroundColor: '#333',
  },
  cardNumber: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#000',
  },
  cardHolder: {
    fontSize: 16,
    marginBottom: 10,
    color: '#000',
  },
  cardInfo: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
  },
  cardInfoText: {
    fontSize: 16,
    color: '#000',
  },
  settings: {
    position: 'relative',
    borderRadius: 10,
    padding: 20,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 8,
  },
  settingsDark: {
    backgroundColor: '#333',
  },
  settingsBackground: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    borderRadius: 10,
    zIndex: -1,
  },
  settingItem: {
    paddingVertical: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#EEE',
  },
  settingText: {
    fontSize: 16,
    color: '#333',
  },
  toggleContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 20,
    padding: 10,
  },
  toggleText: {
    fontSize: 16,
    color: '#333',
  },
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default App;

