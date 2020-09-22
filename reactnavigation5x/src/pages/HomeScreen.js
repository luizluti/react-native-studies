import React from 'react';
import {View, Text, StyleSheet, Button} from 'react-native';
import {useNavigation} from '@react-navigation/native';

const HomeScreen = () => {
  const navigation = useNavigation();

  const handleAboutClick = () => {
    navigation.navigate('About');
  };

  return (
    <View style={styles.container}>
      <Text>Home</Text>
      <Button title="Sobre" onPress={handleAboutClick} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default HomeScreen;
