import { Provider as PaperProvider } from 'react-native-paper';
import Main from './screens/main'

import LottieView from 'lottie-react-native';
import LoadingAnimation from './assets/loading.json';

import * as eva from '@eva-design/eva';
import { ApplicationProvider, Layout, Text } from '@ui-kitten/components';

export default function App() {
  return (
    <ApplicationProvider {...eva} theme={eva.light}>
      <PaperProvider>
        <LottieView
          autoPlay
          style={{
            width: 200,
            height: 200,
            backgroundColor: '#eee',
          }}
          // Find more Lottie files at https://lottiefiles.com/featured
          source={require('./assets/loading.json')}
        />
        <LottieView
          autoPlay
          style={{
            width: 200,
            height: 200,
            backgroundColor: '#eee',
          }}
          // Find more Lottie files at https://lottiefiles.com/featured
          source={require('./assets/christmas-snowball.json')}
        />
      </PaperProvider>
    </ApplicationProvider>
  );
}


