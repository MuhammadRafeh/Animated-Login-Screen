import React from 'react';
import { StyleSheet, Text, View, Image, Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');

class MusicApp extends React.Component {
  render() {
    return(
      <View style={styles.container}>
        <View style={{...StyleSheet.absoluteFill}}>
          <Image
            source={require('../assets/bg.jpg')}
            style={{flex: 1, height: null, width: null}}
          />
        </View>
        <View style={{height: height / 3, justifyContent: 'center'}}>
          <View style={styles.button}>
            <Text style={{fontSize: 20, fontWeight: 'bold'}}>SIGN IN</Text>
          </View>
          <View style={{...styles.button, backgroundColor: '#2E71DC'}}>
            <Text style={{fontSize: 20, fontWeight: 'bold', color: 'white'}}>SIGN IN WITH FACEBOOK</Text>
          </View>
        </View>
      </View>
    );
  }
}

export default MusicApp;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'flex-end'
  },
  button: {
    backgroundColor: 'white',
    height: 70,
    marginHorizontal: 20,
    borderRadius: 35,
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 5
  }
})
