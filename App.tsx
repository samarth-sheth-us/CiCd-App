import React, {useEffect} from 'react';
import {Text, View} from 'react-native';
import CodePush from '@code-push-next/react-native-code-push';

const App = () => {
  useEffect(() => {
    CodePush.sync({
      installMode: CodePush.InstallMode.IMMEDIATE,
      updateDialog: true,
    });
  }, []);

  return (
    <View>
      <Text>App</Text>
    </View>
  );
};

export default App;
