/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import type { Node } from 'react';
import {
  ImageBackground,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  TouchableOpacity,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

import { Image, Header, Icon } from 'react-native-elements';
import { Calendar, CalendarList, Agenda } from 'react-native-calendars';
import { SafeAreaProvider } from 'react-native-safe-area-context';

const markedDates = []

const Section = ({ children, title }): Node => {
  const isDarkMode = useColorScheme() === 'dark';
  return (
    <View style={styles.sectionContainer}>
      <Text
        style={[
          styles.sectionTitle,
          {
            color: isDarkMode ? Colors.white : Colors.black,
          },
        ]}>
        {title}
      </Text>
      <Text
        style={[
          styles.sectionDescription,
          {
            color: isDarkMode ? Colors.light : Colors.dark,
          },
        ]}>
        {children}
      </Text>
    </View>
  );
};

const App: () => Node = () => {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
    <SafeAreaProvider style={backgroundStyle}>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      <Header
        leftComponent={{ icon: 'menu', color: '#fff' }}
        centerComponent={{ text: 'JUST REMEMBER', style: { color: '#fff' } }}
        rightComponent={{ icon: 'home', color: '#fff' }}
        containerStyle={{
          backgroundColor: '#000000',
          justifyContent: 'space-around',
        }}
      />
      <ImageBackground source={require('./img/lol.png')} resizeMode='cover' style={styles.bgImg}>
        <ScrollView >
          <Agenda
            onDayPress={(day) => {
               console.log('selected day', day) 
              }}
            theme={{
              arrowColor: 'black',
              selectedDayTextColor: '#ffffff',
              selectedDayBackgroundColor: 'black',
              todayTextColor: 'red',
            }}
          />
        </ScrollView >
      </ImageBackground>
    </SafeAreaProvider>
  );
};

const styles = StyleSheet.create({
  bgImg: {
    flex: 1,
    width: '100%',
    height: '100%',
    //opacity: 0.2,
  }
});

export default App;
