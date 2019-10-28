/// <reference path="../../typings/node/node.d.ts"/>
// Description
//  Random stuff to try out / in development / WIP

module.exports = (robot) => {
  robot.respond(/attach/, (res) => {
    res.finish();
    let message = {
      props: {
        attachments: [
          {
            text: "test-attachment",
            color: "#FF8000",
            pretext: "this is the attachments pretext"
          },
          {
            text: "test-attachment #2",
            color: "#08AA99",
            pretext: "this is another attachments pretext"
          }
        ]
      }
    };
    res.reply(message);
  });
};
