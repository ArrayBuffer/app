import React, { Component } from 'react';
import {
  AsyncStorage
} from 'react-native';

export let FLAG = {
  language: 'flag_language', // 语言
  key: 'flag_key' // 标签
};

import keys from '../data/keys.json';

export default class Language {

  constructor(flag) {
    this.flag = flag
  }

  save(data) {
    AsyncStorage.setItem(this.flag, JSON.stringify(data), err => {

    })
  }

  fetch() {
    return new Promise((resolve, reject) => {
      AsyncStorage.getItem(this.flag, (err, result) => {
        if(err) {
          reject(err)
        } else {
          if(result) {
            try {
              resolve(JSON.parse(result))
            } catch (e) {
              resolve(e)
            }
          } else {
            let data = this.flag === FLAG.key
              ? keys : null;
            this.save(keys);
            resolve(data)
          }
        }
      })
    })
  }
}