/// <reference path="../../typings/node/node.d.ts"/>
// Description
//  Get a secure password via DM
//
// Configuration:
//   None
//
// Commands:
//   jarvis passwort! - Zufälliges Passwort via PM erhalten.

const randomWord = require('random-word');
const ruleMatch = /passwort!*\s*$/i;

module.exports = (robot) => {
  robot.respond(ruleMatch, (response) => {
    response.finish();
    String.prototype.capitalize = function() {
      return this.charAt(0).toUpperCase() + this.slice(1);
    };

    Date.prototype.yyyymmdd = function() {
      let mm = this.getMonth() + 1;
      let dd = this.getDate();

      return [this.getFullYear(),
        (mm>9 ? '' : '0') + mm,
        (dd>9 ? '' : '0') + dd
      ].join('');
    };

    let parts = [
      new Date().yyyymmdd(),
      '.',
      randomWord().capitalize(),
      randomWord().capitalize(),
      randomWord().capitalize(),
      randomWord().capitalize(),
    ];


    let message = {
      props: {
        attachments: [
          {
            text: parts.join(''),
            color: "#AA0000"
          }
        ]
      }
    };
    response.envelope.room = response.message.user.name;
    response.send(message);
  });
};
