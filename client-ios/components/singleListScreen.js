// @flow

import React, { Component } from "react";
import {
  TouchableHighlight,
  ActivityIndicatorIOS,
  StyleSheet,
  ListView,
  Text,
  View,
  Button
} from 'react-native';

import Modal from './modal.js';
import { Actions } from 'react-native-router-flux';
import ListItem from './listItem.js';
import styles from '../styles/styles.js'

export default class SingleListScreen extends Component {
  constructor(props) {
    super(props);
  }

  componentWillMount() {
    this.props.fetchUserSingleList();
  }

  _setModalVisible(visible, item) {
    visible ? this.props.modalOpen(item) : this.props.modalClose();
  }

  renderItem(item) {
    return (
      <TouchableHighlight
        onLongPress={this._setModalVisible.bind(this, true, item)}
        onPress = {() => {this.props.toggleItem(item)}}
      >
        <View>
          <ListItem
            itemTitle={ item.title }
            itemContent={ item.content }
            completed={ item.completed}
          />
          <View style={ styles.separator } />
        </View>
      </TouchableHighlight>
    );
    }

  render() {
    const { lists, dataSource, modal, deleteListItem, filter } = this.props
      return (
        <View>
          <Modal
            modal={modal}
            toggler={this._setModalVisible.bind(this)}
            pressHandler={deleteListItem}
          />
          <View style={styles.container}>
            <ListView
              dataSource={dataSource}
              renderRow={this.renderItem.bind(this)}
              style={styles.listView}
            />
          </View>
        </View>
      );
    // }
  }
}
