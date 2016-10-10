'use strict';

var _mongoose = require('mongoose');

var _mongoose2 = _interopRequireDefault(_mongoose);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var conversationSchema = new _mongoose2.default.Schema({
  conversationId: String,
  memory: Object,
  actionStates: Object,
  userData: Object
});

var Conversation = _mongoose2.default.mode('Conversation', conversationSchema);

module.exports = Conversation;