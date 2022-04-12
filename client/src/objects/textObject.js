/*
 * This is an object for declaring and sharing Text data.
 *
 * Note that any null entries are NOT required,
 * but they make it a little easier to know what to expect to find in this object.
 *
 */

import _ from 'lodash';

const textObject = {
  escapeToLeaveChat: {
    text: `Press Escape to return to game, use / to send commands.`,
    shouldBeActiveNow: false,
    location: 'UpperLeft', // UpperLeft, 'Scrolling', or 'Center'
  },
  connectingText: {
    text: 'Connecting to Small Hadron Cooperator<br/>Please wait...',
    shouldBeActiveNow: true,
    location: 'Center', // UpperLeft, 'Scrolling', or 'Center'
  },
  reconnectingText: {
    text: 'Small Hadron Cooperator connection lost\nreconnecting...',
    shouldBeActiveNow: false,
    location: 'Center', // UpperLeft, 'Scrolling', or 'Center'
  },
  notConnectedCommandResponse: {
    text: 'Not connected, cannot send chat text.',
    shouldBeActiveNow: false,
    location: 'Scrolling', // UpperLeft, 'Scrolling', or 'Center'
  },
  incomingChatText: {
    text: '',
    shouldBeActiveNow: false,
    location: 'Scrolling', // UpperLeft, 'Scrolling', or 'Center'
  },
  spellSetText: {
    text: '',
    shouldBeActiveNow: false,
    location: 'UpperLeft', // UpperLeft, 'Scrolling', or 'Center'
    disappearMessageLater: _.debounce(() => {
      textObject.spellSetText.shouldBeActiveNow = false;
    }, 1000),
  },
};

export default textObject;
