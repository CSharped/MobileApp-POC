/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 * @lint-ignore-every XPLATJSCOPYRIGHT1
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View,Button,Image,Alert,TextInput} from 'react-native';



const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});



type Props = {};
export default class App extends Component<Props> {

  constructor()
  {
    super();
    this.state = {
      clickCount:0,
      apiresponseImageUrl:'',
      employeeId:''
    }
  }

  buttonPressed = () =>{
    this.setState({
      clickCount: this.state.clickCount+1
    });


        fetch('https://reqres.in/api/users/'+this.state.employeeId, {
         method: 'GET'
                 
      })
      .then((response) => response.json())
      .then((responseJson) => {
         console.log(responseJson);
         this.setState({
          apiresponseImageUrl: responseJson.data.avatar
         })
      })
      .catch((error) => {
        console.log("It Failed my boy")
        console.log(error);
         console.error(error);
      });


  }

  render() {
    return (
     
      <View style={styles.container}>
        
        <TextInput
          style={{height: 40}}
          placeholder="Type here to search!"
          onChangeText={(employeeId) => this.setState({employeeId})}
        />

        <Button title= "Get Image" onPress={this.buttonPressed}/>
                      
        <Image 
    source={{uri: this.state.apiresponseImageUrl}}
    style={{width: 100, height: 100}}
/>


      </View>
     
    
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
