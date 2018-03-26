import React, { Component } from 'react';
import {
  StyleSheet,
  Button,
  Text,
  TextInput,
  View
} from 'react-native';

export default class AppWeather extends Component {
  constructor(props) {
    super(props);
    this.state = {
      city: '--',
      forecast: {
        main: '--',
        description: '--',
        temp: '--'
      }
    };
  }

  getWeather= () => {
      let url = 'http://api.openweathermap.org/data/2.5/weather?q=' + this.state.city + '&appid=896a96c3179441802e2ba65269cce556&&units=metric';
      fetch(url)
      .then((response) => response.json())
      .then((responseJson) => {
        console.log(responseJson);
        this.setState({
          forecast: {
            main: responseJson.weather[0].main,
            description: responseJson.weather[0].description,
            temp: responseJson.main.temp
          }
        });
      }
    );
  }

  render() {
    return (
      <View style={styles.containerMain}>
        <View style={styles.statusbar} />
          <View style={styles.headfoot}>
            <Text style={styles.center}>Prakiraan Cuaca</Text>
          </View>
          <View style={styles.box1}>
            <Text style={styles.texthead}>Masukkan Nama Kota</Text>
            <TextInput style={styles.input}
            onChangeText={(city) => this.setState({ city })} />
            <Button
              onPress={() => this.getWeather()}
              title="Lihat"
              color="brown"
              accessibilityLabel="Klik Untuk Melihat"
            />
          </View>
          <View style={styles.box3}>
            <Text style={styles.text}>
              City{'\t'}{'\t'}{'\t'}{'\t'}{'\t'}: {this.state.city}{'\n'}
              Main{'\t'}{'\t'}{'\t'}{'\t'}: {this.state.forecast.main}{'\n'}
              Temp{'\t'}{'\t'}{'\t'}{'\t'}: {this.state.forecast.temp}{'\n'}
              Description{'\t'}: {this.state.forecast.description}
            </Text>
          </View>

          <View style={styles.headfoot}>
            <Text style={styles.textfoot}>Copyright</Text>
          </View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  containerMain: {
    backgroundColor: 'red',
    flex: 1
  },
  statusbar: {
    backgroundColor: 'black',
    height: 26
  },
  headfoot: {
    padding: 16,
    backgroundColor: 'brown',
    justifyContent: 'center',
    alignItems: 'center'
  },
  box1: {
    flex: 2,
    margin: 20,
    padding: 10,
    backgroundColor: 'pink',
    justifyContent: 'space-around',
    alignItems: 'center'
  },
  box3: {
    flex: 3,
    backgroundColor: 'pink',
    margin: 20,
  },
  text: {
    color: 'black',
    fontSize: 20,
    textAlign: 'left',
    justifyContent: 'space-around',
    marginTop: 15,
    marginLeft: 15

  },
  input: {
    height: 40,
    width: 260,
    backgroundColor: 'white',
    borderColor: 'brown',
    borderWidth: 3,
    textAlign: 'center'
  },
  center: {
    color: 'white',
    fontSize: 22,
    textAlign: 'center',
    justifyContent: 'center',
  },
  texthead: {
    color: 'black',
    fontSize: 22,
    textAlign: 'center',
    justifyContent: 'center'
  },
  textfoot: {
    color: 'white',
    fontSize: 18,
    textAlign: 'center',
    justifyContent: 'center',
  }

});
