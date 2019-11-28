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

client.on('connect', function () {
  client.subscribe('jarvis/cmnd/test', function (err) {
    if (!err) {
      client.publish('jarvis/stat/test', 'Hello mqtt')
    }
  })
});

client.on('message', function (topic, message) {
  console.log(topic.toString() + ': ' + message.toString());
});

module.exports = (robot) => {
  robot.brain.on("connected", () => {
    console.log("Setting the property");
    robot.brain.set("channel.botspam", "6ryaj6bnkpbr3nxooemqy4xnca");
    console.log("SET!");
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
    console.log(response.envelope.room.toString());
    console.log(response.message.user.name.toString());
    response.envelope.room = robot.brain.get('channel.botspam');
    response.send(message);
  });
};
