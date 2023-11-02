import {
  Dimensions,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';

const Home = () => {
  const navigation = useNavigation();
  return (
    <ScrollView contentInsetAdjustmentBehavior="automatic">
      <View style={styles.container}>
        <Text style={styles.title}>Mini App - Registration</Text>
        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate("SuperAppHome")}>
          <Text style={{color: '#FFF'}}>Go Home</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    height: Dimensions.get('screen').height,
  },
  button: {
    backgroundColor: 'blue',
    width: '50%',
    height: 30,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
    margin: 20,
  },
  title: {
    fontSize: 24,
    textAlign: 'center',
  },
});

export default Home;
