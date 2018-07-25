import { createStore } from 'redux';
const state = require('./../data/history');
import * as helperOps from '../helpers/helper';
const helper = new helperOps.Helper();
import * as domManipulator from './dom-ops';
const dom = new domManipulator.DomManipulator();
const $config = require('../config');

export class PersistentOps {

  setCookie(cname, cvalue, exdays) {
    const d = new Date();
    d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
    const expires = `expires=${d.toUTCString()}`;
    document.cookie = `${cname}=${cvalue};${expires};path=/`;
  }

  getCookie(cname) {
    const name = `${cname}=`;
    const decodedCookie = decodeURIComponent(document.cookie);
    const ca = decodedCookie.split(';');
    for (let i = 0; i < ca.length; i++) {
      let c = ca[i];
      while (c.charAt(0) == ' ') {
        c = c.substring(1);
      }
      if (c.indexOf(name) == 0) {
        return c.substring(name.length, c.length);
      }
    }
    return '';
  }

}

function mbReducer(currentState, action) {
  var nextState = {
  }
  let newHistory = {};
  switch (action.type) {
    case 'ADD_REPO':
      // let command = document.getElementById('command').value;
      // nextState = window.localStorage.getItem('currentState') ? JSON.parse(window.localStorage.getItem('currentState')) : currentState;
      // newHistory.command = command;
      // newHistory.type = 'command';
      // // newHistory.intent = 'commandbot'
      // newHistory.insertionCounter = ++nextState.insertionCounter;
      // if(nextState.queries) {
      //   nextState.queries = [ ...nextState.queries, newHistory ];
      // } else {
      //   nextState.queries = [ newHistory ];
      // }
      // window.localStorage.setItem('currentState', JSON.stringify(nextState));
      // return nextState;
      break;
    case 'ADD_COLLAB':
      // let command = document.getElementById('command').value;
      // nextState = window.localStorage.getItem('currentState') ? JSON.parse(window.localStorage.getItem('currentState')) : currentState;
      // newHistory.command = command;
      // newHistory.type = 'command';
      // // newHistory.intent = 'commandbot'
      // newHistory.insertionCounter = ++nextState.insertionCounter;
      // if(nextState.queries) {
      //   nextState.queries = [ ...nextState.queries, newHistory ];
      // } else {
      //   nextState.queries = [ newHistory ];
      // }
      // window.localStorage.setItem('currentState', JSON.stringify(nextState));
      // return nextState;
      break;
    case 'ADD_ISSUE':
      // let command = document.getElementById('command').value;
      // nextState = window.localStorage.getItem('currentState') ? JSON.parse(window.localStorage.getItem('currentState')) : currentState;
      // newHistory.command = command;
      // newHistory.type = 'command';
      // // newHistory.intent = 'commandbot'
      // newHistory.insertionCounter = ++nextState.insertionCounter;
      // if(nextState.queries) {
      //   nextState.queries = [ ...nextState.queries, newHistory ];
      // } else {
      //   nextState.queries = [ newHistory ];
      // }
      // window.localStorage.setItem('currentState', JSON.stringify(nextState));
      // return nextState;
      break;
    case 'ADD_COMMENT':
      // let command = document.getElementById('command').value;
      // nextState = window.localStorage.getItem('currentState') ? JSON.parse(window.localStorage.getItem('currentState')) : currentState;
      // newHistory.command = command;
      // newHistory.type = 'command';
      // // newHistory.intent = 'commandbot'
      // newHistory.insertionCounter = ++nextState.insertionCounter;
      // if(nextState.queries) {
      //   nextState.queries = [ ...nextState.queries, newHistory ];
      // } else {
      //   nextState.queries = [ newHistory ];
      // }
      // window.localStorage.setItem('currentState', JSON.stringify(nextState));
      // return nextState;
      break;
    case 'CLOSE_ISSUE':
      // let command = document.getElementById('command').value;
      // nextState = window.localStorage.getItem('currentState') ? JSON.parse(window.localStorage.getItem('currentState')) : currentState;
      // newHistory.command = command;
      // newHistory.type = 'command';
      // // newHistory.intent = 'commandbot'
      // newHistory.insertionCounter = ++nextState.insertionCounter;
      // if(nextState.queries) {
      //   nextState.queries = [ ...nextState.queries, newHistory ];
      // } else {
      //   nextState.queries = [ newHistory ];
      // }
      // window.localStorage.setItem('currentState', JSON.stringify(nextState));
      // return nextState;
      break;
    case 'SHOW_LAST_COMMENT':
      // let command = document.getElementById('command').value;
      // nextState = window.localStorage.getItem('currentState') ? JSON.parse(window.localStorage.getItem('currentState')) : currentState;
      // newHistory.command = command;
      // newHistory.type = 'command';
      // // newHistory.intent = 'commandbot'
      // newHistory.insertionCounter = ++nextState.insertionCounter;
      // if(nextState.queries) {
      //   nextState.queries = [ ...nextState.queries, newHistory ];
      // } else {
      //   nextState.queries = [ newHistory ];
      // }
      // window.localStorage.setItem('currentState', JSON.stringify(nextState));
      // return nextState;
      break;
    case 'VIEW_REPO':
      // let command = document.getElementById('command').value;
      // nextState = window.localStorage.getItem('currentState') ? JSON.parse(window.localStorage.getItem('currentState')) : currentState;
      // newHistory.command = command;
      // newHistory.type = 'command';
      // // newHistory.intent = 'commandbot'
      // newHistory.insertionCounter = ++nextState.insertionCounter;
      // if(nextState.queries) {
      //   nextState.queries = [ ...nextState.queries, newHistory ];
      // } else {
      //   nextState.queries = [ newHistory ];
      // }
      // window.localStorage.setItem('currentState', JSON.stringify(nextState));
      // return nextState;
      break;
    case 'ADD_QUERY':
      let command = document.getElementById('command').value;
      nextState = window.localStorage.getItem('currentState') ? JSON.parse(window.localStorage.getItem('currentState')) : currentState;
      newHistory.command = command;
      newHistory.type = 'command';
      // newHistory.intent = 'commandbot'
      newHistory.insertionCounter = ++nextState.insertionCounter;
      if(nextState.queries) {
        nextState.queries = [ ...nextState.queries, newHistory ];
      } else {
        nextState.queries = [ newHistory ];
      }
      window.localStorage.setItem('currentState', JSON.stringify(nextState));
      return nextState;
      break;
    case 'CLEAR_HISTORY':
      nextState = helper.clone(state);
      newHistory.command = $config.intentSlugToOperations.resethistory.cardMsg;
      newHistory.type = 'response';
      newHistory.insertionCounter = 0;
      newHistory.intent = $('#' + $config.costants.hiddenIntentFieldId).val();
      nextState.messages = [newHistory];
      window.localStorage.setItem('currentState', JSON.stringify(nextState));
      return nextState;
    default:
      return currentState;
  }
}

function renderCards() {
  $('#conversations').empty();
  let historyAll = helper.concatenateAndSort(store.getState());
  dom.loadConversations(historyAll);
}

export const store = createStore(mbReducer, state)
store.subscribe(renderCards);