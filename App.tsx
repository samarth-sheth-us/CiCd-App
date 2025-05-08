import React, {useEffect, useState} from 'react';
import {Text, View} from 'react-native';
import CodePush from '@code-push-next/react-native-code-push';

const App = () => {
  const [codepushStatus, setCodepushStatus] = useState<number | null>(null);

  useEffect(() => {
    CodePush.sync(
      {
        installMode: CodePush.InstallMode.IMMEDIATE,
        updateDialog: true,
      },
      status => setCodepushStatus(status),
    );
  }, []);

  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text>CODEPUSH v2</Text>
      {codepushStatus && <Text>Status: {codepushStatus}</Text>}
    </View>
  );
};

export default App;
