/// <reference path="../../typings/node/node.d.ts"/>
// Description
//  Hamburg Süd? Wieso Hamburg Süd?
//
// Configuration:
//   None

const trigger = /hamburg/i;

module.exports = (robot) => {
  robot.respond(trigger, (res) => {
    res.finish();
    let message = {
      props: {
        attachments: [
          {
            pretext: "Hamburg Süd? Wieso Hamburg Süd?",
            text: "Wir müssen da auflegen!"
          }
        ]
      }
    };
    res.reply(message);
  });
};
