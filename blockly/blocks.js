Blockly.Blocks['line_ifttt'] = {
  init: function () {
    this.appendValueInput("line_ifttt_event")
      .setCheck(null)
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField("LINE ( IFTTT )")
      .appendField("Event :");
    this.appendValueInput("line_ifttt_key")
      .setCheck(null)
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField("Key :");
    this.appendValueInput("line_ifttt_value1")
      .setCheck(null)
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(Blockly.Msg.LINE_V1);
    this.appendValueInput("line_ifttt_value2")
      .setCheck(null)
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(Blockly.Msg.LINE_V2);
    this.appendValueInput("line_ifttt_value3")
      .setCheck(null)
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(Blockly.Msg.LINE_V3);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(120);
    this.setTooltip("");
    this.setHelpUrl("http://www.oxxostudio.tw/articles/201803/ifttt-line.html");
  }
};

Blockly.Blocks['line_notify'] = {
  init: function () {
    this.appendValueInput("line_notify_token")
      .setCheck(null)
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField("LINE ( Notify )")
      .appendField("Token :");
    this.appendValueInput("line_notify_msg")
      .setCheck(null)
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(Blockly.Msg.LINE_MSG);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(120);
    this.setTooltip("");
    this.setHelpUrl("http://www.oxxostudio.tw/articles/201804/line-bot-apps-script.html");
  }
};

Blockly.Blocks['line_bot'] = {
  init: function () {
    this.appendValueInput("line_bot_token")
      .setCheck(null)
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField("LINE ( Bot )")
      .appendField("Token :");
    this.appendValueInput("line_bot_uid")
      .setCheck(null)
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField("Uid :");
    this.appendValueInput("line_bot_msg")
      .setCheck(null)
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(Blockly.Msg.LINE_MSG);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(120);
    this.setTooltip("");
    this.setHelpUrl("http://www.oxxostudio.tw/articles/201804/line-bot-apps-script.html");
  }
};


Blockly.Blocks['line_sticker'] = {
  init: function () {
    this.appendValueInput("package")
      .setCheck(null)
      .appendField(Blockly.Msg.LINE_STKVER);
    this.appendValueInput("sticker")
      .setCheck(null)
      .appendField(Blockly.Msg.LINE_STKID);
    this.setInputsInline(true);
    this.setOutput(true, null);
    this.setColour(90);
    this.setTooltip("");
    this.setHelpUrl("https://devdocs.line.me/files/sticker_list.pdf");
  }
};

Blockly.Blocks['line_image'] = {
  init: function () {
    this.appendValueInput("img_url")
      .setCheck("String")
      .appendField("圖片網址：");
    this.setOutput(true, null);
    this.setColour(90);
    this.setTooltip("");
    this.setHelpUrl("http://www.oxxostudio.tw/articles/201804/line-bot-apps-script.html");
  }
};

Blockly.Blocks['line_chat'] = {
  init: function () {
    this.appendValueInput("channel")
      .setCheck(null)
      .appendField("從 LINE 頻道或 User ID");
    this.appendDummyInput()
      .appendField("接收訊息");
    this.appendStatementInput("do")
      .setCheck(null)
      .appendField("執行");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(120);
    this.setTooltip("LINE 頻道請用兩個半形冒號區隔，例如「test::開燈」，test 就是 LINE 頻道");
    this.setHelpUrl("http://www.oxxostudio.tw/articles/201804/line-bot-apps-script.html");
  }
};

Blockly.Blocks['line_talk_msg'] = {
  init: function () {
    this.appendDummyInput()
      .appendField("接收的訊息");
    this.setInputsInline(true);
    this.setOutput(true, null);
    this.setColour(90);
    this.setTooltip("");
    this.setHelpUrl("");
  }
};
