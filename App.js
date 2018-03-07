/*
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>AucklandUni Campus Navigation</Text>

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
*/


import React, {Component} from 'react';
import {Image, Text, View, TextInput, Button, Alert, StyleSheet} from 'react-native';

/*class Greeting extends Component {
    render() {
        return (
            <MainText>Hello {this.props.name}!</MainText>
        );
    }
}*/

/*class MainText extends Component {
    render() {
        return (
            <Text style={{color: 'blue'}}>{this.props.children}</Text>
        );
    }
}*/

/*
export default class ImageSample extends Component {
    render() {
        let pic = {
            uri: 'https://i.stack.imgur.com/qekEr.jpg',
        };

        return (
            <View style={{
                flex: 1,
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'stretch',
            }}>
{/!*                <View style={{width: 50, height: 50, backgroundColor: 'powderblue'}}/>
                <View style={{width: 50, height: 50, backgroundColor: 'skyblue'}}/>
                <View style={{width: 50, height: 50, backgroundColor: 'steelblue'}}/>*!/}
{/!*                <Image source={pic} style={{width: 500, height: 300}}/>
                <Text/>
                <Greeting name='Roxy'/>
                <Greeting name='Harper'/>
                <Greeting name='Someone'/>*!/}
                <View style={{flex: 1, backgroundColor: 'powderblue'}}/>
                <View style={{flex: 1, backgroundColor: 'skyblue'}}/>
                <View style={{flex: 1, backgroundColor: 'steelblue'}}/>
            </View>

        );
    }
}*/

/*export default class PizzaTranslator extends Component {
    constructor(props) {
        super(props);
        this.state = {text: ''};
    }

    render() {
        return (
            <View style={{padding: 10}}>
                <TextInput
                    style={{height: 40, fontSize: 30}}
                    placeholder={'Type here to translate!'}
                    onChangeText={(text) => this.setState({text})}
                />
                <Text style={{padding: 10, fontSize: 30}}>
                    {this.state.text.split(' ').map((word) => word && '@.@').join(' ')}
                </Text>

            </View>
        );
    }
}*/

export default class ButtonTest extends Component {
    _onPressButton() {
        Alert.alert('You tapped the button!');
    }

    render() {
        return (
          <View style={styles.container}>
              <View style={styles.buttonContainer}>
                  <Button
                      onPress={this._onPressButton}
                      title={'Press me'}
                  />
              </View>

              <View style={styles.buttonContainer}>
                  <Button
                      onPress={this._onPressButton}
                      title={'Press purple'}
                      color={'#841584'}
                  />
              </View>

              <View style={styles.alternativeLayoutButtonContainer}>
                  <Button
                      onPress={this._onPressButton}
                      title={'Press left'}
                  />
                  <Button
                      onPress={this._onPressButton}
                      title={'Press right'}
                      color={'#841584'}
                  />
              </View>
          </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
    },

    buttonContainer: {
        margin: 20,
    },

    alternativeLayoutButtonContainer: {
        margin: 20,
        flexDirection: 'row',
        justifyContent: 'space-between',
    }

    })