import React, {useState} from 'react';
import {StyleSheet, View, Text, TouchableOpacity} from 'react-native';

const styles = StyleSheet.create({
  view: {
    backgroundColor: 'red',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontWeight: 'bold',
    fontSize: 30,
    color: 'white',
    backgroundColor: 'purple',
    borderRadius: 20,
    padding: 20,
  },
  reset: {
    fontWeight: 'bold',
    fontSize: 30,
    color: 'white',
    backgroundColor: 'blue',
    borderRadius: 20,
    padding: 20,
    marginTop: 25,
  },
});

const App = () => {
  const [randomColor, setRandomColor] = useState('rgb(32,5,126)');

  const changeBackgoundColor = () => {
    const number = Math.floor(Math.random() * 22);
    let color = `rgb(${number},${number + 58},${number + 24})`;
    console.log('color : ', color);
    setRandomColor(color);
  };

  const resetBackgroundColor = () => {
    setRandomColor('black');
  };
  return (
    <View style={[styles.view, {backgroundColor: randomColor}]}>
      <TouchableOpacity onPress={changeBackgoundColor}>
        <Text style={styles.text}>Tap to Change Color</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={resetBackgroundColor}>
        <Text style={styles.reset}>Reset</Text>
      </TouchableOpacity>
    </View>
  );
};

export default App;
