import React from 'react';
import {View, Text, Image} from 'react-native';

const data = new Array(10).fill(0).map((value, index) => ({
  id: index,
  title: `Title ${index}`,
  body: `Body ${index}`,
}));

const AgHome = () => {
  return (
    <View>
      {data.map(item => (
        <View key={item.id}>
          <Text>
            {item.title} - {item.id}
          </Text>
          <Text>{item.body}</Text>
          <Image source={require('./jd.png')} />
        </View>
      ))}
      <Image source={require('./jd.png')} />
      <Image source={require('./jd.png')} />
      <Image source={require('./jd.png')} />
      <Image source={require('./jd.png')} />
      <Image source={require('./jd.png')} />
      <Image source={require('./jd.png')} />
      <Image source={require('./jd.png')} />
      <Image source={require('./jd.png')} />
      <Image source={require('./jd.png')} />
      <Image source={require('./jd.png')} />
      <Image source={require('./jd.png')} />
      <Image source={require('./jd.png')} />
      <Image source={require('./jd.png')} />
      <Image source={require('./jd.png')} />
      <Image source={require('./jd.png')} />
      <Image source={require('./jd.png')} />
      <Image source={require('./jd.png')} />
      <Image source={require('./jd.png')} />
      <Image source={require('./jd.png')} />
      <Image source={require('./jd.png')} />
      <Image source={require('./jd.png')} />
      <Image source={require('./jd.png')} />
      <Image source={require('./jd.png')} />
      <Image source={require('./jd.png')} />
      <Image source={require('./jd.png')} />
      <Image source={require('./jd.png')} />
      <Image source={require('./jd.png')} />
      <Image source={require('./jd.png')} />
      <Image source={require('./jd.png')} />
      <Image source={require('./jd.png')} />
      <Image source={require('./jd.png')} />
      <Image source={require('./jd.png')} />
      <Image source={require('./jd.png')} />
      <Image source={require('./jd.png')} />
      <Image source={require('./jd.png')} />
      <Image source={require('./jd.png')} />
      <Image source={require('./jd.png')} />
      <Image source={require('./jd.png')} />
      <Image source={require('./jd.png')} />
      <Image source={require('./jd.png')} />
      <Image source={require('./jd.png')} />
      <Image source={require('./jd.png')} />
      <Image source={require('./jd.png')} />
      <Image source={require('./jd.png')} />
      <Image source={require('./jd.png')} />
      <Image source={require('./jd.png')} />
      <Image source={require('./jd.png')} />
      <Image source={require('./jd.png')} />
      <Image source={require('./jd.png')} />
      <Image source={require('./jd.png')} />
      <Image source={require('./jd.png')} />
      <Image source={require('./jd.png')} />
      <Image source={require('./jd.png')} />
    </View>
  );
};

export default AgHome;
