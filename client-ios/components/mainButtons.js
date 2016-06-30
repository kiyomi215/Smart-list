// @flow

import React, { Component } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableHighlight
} from 'react-native';
import styles from '../styles/styles.js';
import { Actions } from 'react-native-router-flux';
import Icon from 'react-native-vector-icons/Ionicons';


export default class mainButtons extends Component {
  constructor(props) {
    super(props);
  }

  render() {

    const adding = !(this.props.userInput.length === 0);
    const buttons = this.props.buttons.map((threeButtons, index) => {
      return (
        <View style={styles.buttonContainer} key={threeButtons[index].category}>
          {threeButtons.map((button, index) => {
            console.log('filter', this.props.filter);
            console.log('category', button.category);
            return (

              <View key={button.icon}>
                {(this.props.filter === button.category && this.props.saved) ? <Text>Added!</Text> : null}
                {adding ? <Text>{button.category}</Text> : null}
                <TouchableHighlight style={styles.mainButton} >

                  <Icon
                    name={adding ? 'ios-add-outline' : button.icon}
                    size={60}
                    onPress={() => {this.props.mainButtonPressed(button.category)}}
                  />
                </TouchableHighlight>
              </View>
            );
          })}

        </View>
      )
    });

    return (
      <View>
        {buttons}
      </View>
    );
  }
}
