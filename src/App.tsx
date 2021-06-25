import React, {useEffect} from 'react';
import {SafeAreaView, Text, View} from 'react-native';
import Yookassa from '@wyndrick/react-native-yookassa';

const App = () => {
  useEffect(() => {
    Yookassa.initialize('YourShoppId', 'YourClientApplicationKey');
    Yookassa.tokenization(
      'Title',
      'Description',
      1,
      'BANK_CARD',
      'USER_SELECTS',
      {} as any,
    );
  }, []);

  return (
    <View style={{flex: 1}}>
      <SafeAreaView style={{flex: 1}}>
        <Text>Hello Yookassa</Text>
      </SafeAreaView>
    </View>
  );
};

export default App;
