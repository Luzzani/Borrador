import React, {useEffect} from 'react';

import {View, Text} from 'react-native';

export const Tab2Screen = () => {
  useEffect(() => {
    console.log('tab 2 screen');
  }, []);
  return (
    <View>
      <Text>Tab2Screen</Text>
    </View>
  );
};
