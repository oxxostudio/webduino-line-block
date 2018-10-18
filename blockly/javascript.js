Blockly.JavaScript['line_ifttt'] = function (block) {
  var event = Blockly.JavaScript.valueToCode(block, 'line_ifttt_event', Blockly.JavaScript.ORDER_ATOMIC);
  var key = Blockly.JavaScript.valueToCode(block, 'line_ifttt_key', Blockly.JavaScript.ORDER_ATOMIC);
  var v1 = Blockly.JavaScript.valueToCode(block, 'line_ifttt_value1', Blockly.JavaScript.ORDER_ATOMIC);
  var v2 = Blockly.JavaScript.valueToCode(block, 'line_ifttt_value2', Blockly.JavaScript.ORDER_ATOMIC);
  var v3 = Blockly.JavaScript.valueToCode(block, 'line_ifttt_value3', Blockly.JavaScript.ORDER_ATOMIC);

  if (v1.length == 0) {
    v1 = "''";
  }
  if (v2.length == 0) {
    v2 = "''";
  }
  if (v3.length == 0) {
    v3 = "''";
  }

  var code = 'line_ifttt(' + event + ',' + key + ',' + v1 + ',' + v2 + ',' + v3 + ');';

  return code;
};


Blockly.JavaScript['line_notify'] = function (block) {
  var token = Blockly.JavaScript.valueToCode(block, 'line_notify_token', Blockly.JavaScript.ORDER_ATOMIC);
  var msg = Blockly.JavaScript.valueToCode(block, 'line_notify_msg', Blockly.JavaScript.ORDER_ATOMIC);

  if (msg.length == 0) {
    msg = "''";
  }

  var code = 'line_notify(' + token + ',' + msg + ');';

  return code;
};


Blockly.JavaScript['line_bot'] = function (block) {
  var token = Blockly.JavaScript.valueToCode(block, 'line_bot_token', Blockly.JavaScript.ORDER_ATOMIC);
  var uid = Blockly.JavaScript.valueToCode(block, 'line_bot_uid', Blockly.JavaScript.ORDER_ATOMIC);
  var msg = Blockly.JavaScript.valueToCode(block, 'line_bot_msg', Blockly.JavaScript.ORDER_ATOMIC);

  if (msg.length == 0) {
    msg = "''";
  }
  var code = 'line_bot(' + token + ',' + uid + ',' + msg + ');';

  return code;
};

Blockly.JavaScript['line_sticker'] = function (block) {
  var package = Blockly.JavaScript.valueToCode(block, 'package', Blockly.JavaScript.ORDER_ATOMIC);
  var sticker = Blockly.JavaScript.valueToCode(block, 'sticker', Blockly.JavaScript.ORDER_ATOMIC);
  var code = '{message:" ",stickerPackageId:"' + package + '",stickerId:"' + sticker + '",type:"sticker"}';
  return [code, Blockly.JavaScript.ORDER_ATOMIC];
};

Blockly.JavaScript['line_image'] = function (block) {
  var value_img_url = Blockly.JavaScript.valueToCode(block, 'img_url', Blockly.JavaScript.ORDER_ATOMIC);
  var code = '{message:" ",imageUri:' + value_img_url + ',type:"image"}';
  return [code, Blockly.JavaScript.ORDER_ATOMIC];
};

Blockly.JavaScript['line_chat'] = function (block) {
  var value_channel = Blockly.JavaScript.valueToCode(block, 'channel', Blockly.JavaScript.ORDER_ATOMIC);
  var statements_do = Blockly.JavaScript.statementToCode(block, 'do');
  var code = 'let chatChannel = new Firebase("https://botv1-bf689.firebaseio.com/' + value_channel + '");\n' +
    'chatChannel.on("value", (e) => {\n' +
    '  let msg = e.val().msg;\n' + statements_do +
    '  }\n' +
    '});\n';
  //return code;
  return [code, Blockly.JavaScript.ORDER_ATOMIC];
};

Blockly.JavaScript['line_talk_msg'] = function(block) {
  var code = 'msg';
  return [code, Blockly.JavaScript.ORDER_ATOMIC];
};
