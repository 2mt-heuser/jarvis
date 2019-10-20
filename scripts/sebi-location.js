/// <reference path="../../typings/node/node.d.ts"/>
// Description
//  Where in the world is Sebi SanDiago?
//
// Configuration:
//   None
//
// Commands:
//   jarvis wo ist sebi gerade unterwegs in deutschland? - Findet Sebi! :)

const whereSebi = /wo.*ist.*sebi.*\?\s*$/i;

module.exports = (robot) => {
  robot.respond(whereSebi, (res) => {
    res.finish();
    let message = {
      props: {
        attachments: [
          {
            author_name: "Toledo",
            text: "**Status:** ```Hamburg```",
            color: "#FFAA00"
          }
        ]
      }
    };
    res.reply(message);
  });
};
