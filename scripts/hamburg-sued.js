/// <reference path="../../typings/node/node.d.ts"/>
// Description
//  Hamburg Süd? Wieso Hamburg Süd?
//
// Configuration:
//   None

const trigger = /hamburg/i;

let onCooldown = false, timeoutHandle;

module.exports = (robot) => {
  robot.respond(trigger, (res) => {
    res.finish();
    if (!onCooldown) {
      let message = {
        props: {
          attachments: [
            {
              pretext: "Hamburg Süd? Wieso Hamburg Süd?",
              author_name: "Langenhagen",
              author_link: "https://www.discogs.com/de/artist/43933-Langenhagen",
              author_icon: "https://img.discogs.com/OGaqZOOrc5Lbgz8-ot142W6z9S0=/90x90/smart/filters:strip_icc():format(jpeg):mode_rgb():quality(90)/discogs-images/A-43933-1109368878.gif.jpg",
              text: "Wir müssen da auflegen!"
            }
          ]
        }
      };
      res.reply(message);
    }
    onCooldown = true;
    clearTimeout(timeoutHandle);
    timeoutHandle = setTimeout(function () {
      onCooldown = false;
    }, 120000)
  });
};
