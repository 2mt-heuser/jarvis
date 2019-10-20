/// <reference path="../../typings/node/node.d.ts"/>
// Description
//  Get current song from sebi
//
// Configuration:
//   None
//
// Commands:
//   jarvis was hört sebi gerade für musik? - Man kann auch Montag morgen 8:00 abzappeln!!!111

const musicSebi = /was.*hört.*sebi.*\s(?:(.*))\?$/i;

module.exports = (robot) => {
  robot.respond(musicSebi, (res) => {
    let info;
    res.finish();
    const playlist = res.match[1];

    if (playlist === 'playlist') {
      info = "**Spoytify:** ```All Mixed up! by sebheuser```";
    } else {
      info = "**Spoytify:** ```Papa Roach - Elevate```";
    }

    let message = {
      props: {
        attachments: [
          {
            author_name: "Toledo",
            text: info,
            color: "#AAFFAA"
          }
        ]
      }
    };


    res.reply(message);
  });
};
