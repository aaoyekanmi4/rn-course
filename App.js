import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, TextInput } from 'react-native';

export default function App() {
  return (
    <View style={styles.appContainer}>
      <View style={ styles.inputContainer}>
        <TextInput style={styles.textInput} placeholder='Your course goal'/>
        <Button title='Add goal'/>
      </View>
      <View style={ styles.goalsContainer}>
        <Text>List of goals</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    paddingTop: 50,
    paddingHorizontal: 16,
  },
  inputContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 24,
    borderBottomWidth: 1,
    borderBottomColor:"#ccc"
  },
  textInput: {
    borderWidth: 1,
    borderColor: '#ccc',
    width: '80%',
    paddingHorizontal: 10,
    marginRight: 8,
    marginBottom:10,
  },
  goalsContainer: {
    flex: 5
  }
});
