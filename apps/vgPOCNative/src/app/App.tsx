import { SafeAreaView, View, Text, StatusBar, StyleSheet } from 'react-native';
// eslint-disable-next-line @nx/enforce-module-boundaries
import {MyForm} from '@vg-poc/ui'

export const App = () => {
  return (
    <>
      <StatusBar/>
      <SafeAreaView >
      <View style={styles.container}>
       <Text style={styles.title}>Welcome to React Native App</Text>
          <MyForm/>
        </View>
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    paddingVertical: 20,
    paddingHorizontal: 16,
    alignItems: 'center',
    justifyContent: 'center',
    borderBottomLeftRadius: 12,
    borderBottomRightRadius: 12,
    marginTop:20,
    margin:'auto'
  },
  title: {
    color: 'black',
    fontSize: 20,
    fontWeight: 'bold',
  },
});


export default App;
