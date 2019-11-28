/// <reference path="../../typings/node/node.d.ts"/>
// Description
//  MQTT remote control
//
// Configuration:
//   None
//
// Commands:
//   jarvis mqtt - Test connection to broker

const ruleMatch = /mqtt\s*$/i;
let mqtt = require('mqtt');
let client = mqtt.connect(process.env.MQTT_URL, {
  "username": process.env.MQTT_USERNAME,
  "password": process.env.MQTT_PASSWORD,
  "port": process.env.MQTT_PORT
});

module.exports = (robot) => {
  robot.brain.on("connected", () => {
    console.log("Setting the property");
    robot.brain.set("channel.botspam", "6ryaj6bnkpbr3nxooemqy4xnca");
    console.log("SET!");
  });
  client.on('connect', function () {
    client.subscribe('jarvis/cmnd/test', function (err) {
      if (!err) {
        client.publish('jarvis/stat/test', 'Hello mqtt')
      }
    })
  });

  client.on('message', function (topic, message) {
    let channel = robot.adapter.client.findChannelByName('botspam');
    robot.adapter.client.postMessage('received via MQTT: ' + message.toString(), channel.id)
  });
  robot.respond(ruleMatch, (response) => {
    response.finish();
    let message = {
      props: {
        attachments: [
          {
            pretext: "Broker Status (" + client.options.host + ")",
            text: client.connected ? "Connected" : "Disconnect :'("
          }
        ]
      }
    };
    let channel = robot.adapter.client.findChannelByName('botspam');
    response.envelope.room = channel.id;
    response.send(message);
  });
};
